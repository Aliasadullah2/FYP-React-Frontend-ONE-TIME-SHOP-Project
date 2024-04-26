import React, { useEffect, useRef, useState } from 'react';
import { getCurrentUserDetail, isLoggedIn } from '../Auth/AuthIndex';
import { Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { createReportapi } from '../Services/Reports';
import JoditEditor from 'jodit-react';

const AddReport = () => {

    const editor = useRef(null);
  const [titleError, setTitleError] = useState('');
  const [aboutError, setAboutError] = useState('');
  const [userId,setUserId]=useState([])
  const [login,setLogin] = useState([]);
  const [report,setReport]=useState({
    
    title:" ",
    about:"",
  })

  useEffect(()=>{
    setUserId(getCurrentUserDetail().id);
    setLogin(isLoggedIn())
    
    


},[])

const handleChange=(event)=>{
        
    setReport({...report,[event.target.name]:event.target.value})
   
} 
const handleChangeDesp=(Data)=>{
      
    setReport({...report,'about':Data})
 
}

const createReport=(event)=>{
    event.preventDefault();
    // console.log(product);

    if(report.title.trim()===""){
      toast.warning("Fill the Report Title")
      return;
    }

    if(report.about.trim()===""){
      toast.warning("Fill the Report Despcription")
      return;
    }

    

    //submit data on sever
    report['userId']=userId.id
    createReportapi(userId,report).then(data=>{
        
        

        

      toast.success("Product Added Successfully");
      console.log(report);
      setReport({
        title:" ",
        about:"",
      })
     
    //   navigate('/mentor/seller/SellerFreelances ');
    }).catch((error)=>{
      toast.error("Internal Server Error");
      console.log(error);
      
    })
    


}
  

  return (
    <div>
        <Container   >
                {/* <Col sm={{span: 8, offset: 2}} lg={{span: 8, offset: 3}} xl={{span: 8, offset: 4}} className=" offset-sm-2 offset-lg-3  offset-xl-4 text-center"> */}
              
                <form className=" rounded bg-white shadow p-5" onSubmit={createReport} style={{marginTop:'-80px',marginLeft:"140px"} }>
                <h3 className="text-dark fw-bolder fs-4 mb-4">Add Report </h3>

                <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="title" 
                     name='title'
                     placeholder="Report Title" 
                     required
                      onChange={(e)=>handleChange(e,'title')}
                      value={report.title}
                      
                     />
                    <label htmlFor="title">Reports Name</label>
                </div>
    
                    <div className="form-floating mb-3">
                     

                    <div class="form-floating">
                    <label for="about">Report Description</label><br></br>
                    <br></br>
                    <JoditEditor
			              ref={editor}
			              value={report.about}
		                onChange={handleChangeDesp}
		/>
                    </div>
                </div>
                    

                    




                   
                    {JSON.stringify(report)}

                <Button type="submit" className="btn  submit_btn w-100 my-4">Add Report</Button>
                  
                </form>
                {/* </Col> */}
                
                {/* <div>
                   <h2 className='mt-3'>My Products ({myProduct.length})</h2>
                    {
                      myProduct.map((productDto,index)=>{
                        return(
                          <MyProduct product={productDto} key={index} />
                        )
                      })
                    }
                </div> */}
            </Container>
      {/* <label>Title:</label>
      <input type="text" value={report.title} onChange={handleTitleChange} />
      {titleError && <p style={{ color: 'red' }}>{titleError}</p>}

      <label>About:</label>
      <textarea value={report.about} onChange={handleAboutChange} />
      {aboutError && <p style={{ color: 'red' }}>{aboutError}</p>} */}
    </div>
  );
};

export default AddReport;
