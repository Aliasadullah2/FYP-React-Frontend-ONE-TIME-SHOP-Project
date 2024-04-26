import React, { useEffect, useRef, useState } from 'react';
import { getCurrentUserDetail, isLoggedIn } from '../Auth/AuthIndex';
import { Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { createReportapi, loadAllReportbyUser, loadReport } from '../Services/Reports';
import JoditEditor from 'jodit-react';
import ReportPage from '../Reports/ReportPage';

const ReportsAl = () => {

    const editor = useRef(null);
  const [titleError, setTitleError] = useState('');
  const [aboutError, setAboutError] = useState('');
  const [user,setUser]=useState(undefined)
  const [myReport,setMyReport] = useState([]);
  const [login,setLogin] = useState([]);
  const [report,setReport]=useState({
    
    title:" ",
    about:"",
  })

  useEffect(()=>{
    setUser(getCurrentUserDetail());
    setLogin(isLoggedIn())
    
    loadAllReportbyUser(getCurrentUserDetail().id).then(data=>{
      setMyReport([...data])
      console.log(data)
    }).catch(error=>{
      console.log(error)
      toast.error()
    })


},[])

const handleChange=(event)=>{
        
    setReport({...report,[event.target.name]:event.target.value})

    
    

    if (report.title.length >= 100) {
      setTitleError('Title must be 100 characters');
    } else {
      setTitleError('Title Must be Short');
    }
} 
const handleChangeDesp=(Data)=>{
      
    setReport({...report,'about':Data})
    if (report.about.length >= 800) {
      setAboutError('About must be 800 characters');
    } else {
      setAboutError('About Must be Short');
    }
}

const createReport=(event)=>{
    event.preventDefault();
    // console.log(report);

    if(report.title.trim()===""){
      toast.warning("Fill the Report Title")
      return;
    }

    if(report.about.trim()===""){
      toast.warning("Fill the Report Despcription")
      return;
    }

    

    //submit data on sever
    report['userId']=user.id
    createReportapi(report).then(data=>{
        
        



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
        <Container  style={{marginLeft:'100px',marginTop:'80px',marginBottom:'50px'}} >
                {/* <Col sm={{span: 8, offset: 2}} lg={{span: 8, offset: 3}} xl={{span: 8, offset: 4}} className=" offset-sm-2 offset-lg-3  offset-xl-4 text-center"> */}
              
                <form className=" rounded bg-white shadow p-5" onSubmit={createReport} style={{marginTop:'-80px',marginLeft:"180px",width:'800px'} }>
                <h3 className="text-dark fw-bolder fs-4 mb-4"> Reports </h3>

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
                {titleError && <p style={{ color: 'red' }}>{titleError}</p>}
    
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
                {aboutError && <p style={{ color: 'red' }}>{aboutError}</p>}
                    

                    




                   
                    {/* {JSON.stringify(report)} */}

                <Button type="submit" className="btn  submit_btn w-100 my-4">Submit Report</Button>
                  
                </form>
                {/* </Col> */}
                
                <div>
                   <h2 className='mt-3'>My Reports ({myReport.length})</h2>
                    {
                      myReport.map((reportDto,index)=>{
                        return(
                          <ReportPage report={reportDto} key={index} />
                        )
                      })
                    }
                </div>
            </Container>
      
    </div>
  );
};

export default ReportsAl;
