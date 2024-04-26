import React, { useRef } from 'react'
import { Container, Button} from "react-bootstrap";
import { loadAllCategories } from '../../Services/Cetagory';
import { useEffect } from 'react';
import { useState } from 'react';
import JoditEditor from 'jodit-react';
import {  toast } from 'react-toastify';


import { Input, Label } from 'reactstrap';
// import Product from '../Buyer Pages/Product';
import MyProduct from '../../Buyer Pages/MyProduct';
import { useNavigate } from 'react-router-dom';
import { getCurrentUserDetail, isLoggedIn } from '../../Auth/AuthIndex';
import { createVenderapi, loadAllVendersbyUser, uploadImageVender } from '../../Services/Vender';




function AdminAddVen() {
  const [categories,setCategories] = useState([]);
  const editor = useRef(null);
  const [user,setUser]=useState(undefined)
	// const [content, setContent] = useState('');
  
  const [vender,setVender]=useState({
    name:" ",
    title:" ",
    about:"",
    price:"",
    phonenumber:"",
    id:''
  })
  
  const [myVender,setMyVender] = useState([]);
  const [login,setLogin] = useState([]);
  const [image,setImage]=useState(null);
  const navigate=useNavigate();
    // const categories = loadAllCategories();

    // console.log(categories);
    useEffect(()=>{
        setUser(getCurrentUserDetail())
        setLogin(isLoggedIn())
        loadAllCategories().then((data)=>{
          // console.log(data)
          setCategories(data)
          
        }).catch(error=>{
          // console.log(error)
          toast.error("Error to Loading Categories")
        })

        loadAllVendersbyUser(getCurrentUserDetail().id).then(data=>{
          setMyVender([...data])
          console.log(data)
        }).catch(error=>{
          console.log(error)
          toast.error()
        })


    },[])

    

    const handleChange=(event)=>{
        
      setVender({...vender,[event.target.name]:event.target.value})
     
  } 
  const handleChangeDesp=(Data)=>{
        
    setVender({...vender,'about':Data})
   
}

const createProduct=(event)=>{
        event.preventDefault();
        // console.log(product);

        if(vender.name.trim()===""){
          toast.warning("Fill the Vender Name")
          return;
        }

        if(vender.title.trim()===""){
          toast.warning("Fill the Vender Tilte")
          return;
        }

        if(vender.about.trim()===""){
          toast.warning("Fill the Vender About")
          return;
        }

        if(vender.price.trim()===""){
          toast.warning("Fill the Vender Per Hour/Price")
          return;
        }
        if(vender.phonenumber.trim()===""){
          toast.warning("Select the Vender Phone Number")
          return;
        }

        if(vender.id.trim()===""){
          toast.warning("Select the Product Category")
          return;
        }

        //submit data on sever
        vender['userId']=user.id
        createVenderapi(vender).then(data=>{

            uploadImageVender(  image,data.venId).then(data=>{
              toast.success("Vender Imaged Added Successfully");
              
            }).catch(error=>{
              console.log(error)
              toast.error("Vender Imaged Error");
            })



          toast.success("Vender Added Successfully");
          // console.log(product);
          setVender({
            name:" ",
            title:" ",
            about:"",
            
            price:"",
            phonenumber:"",
            id:''
          })
         
          navigate('/user/admin/myvender ');
        }).catch((error)=>{
          toast.error("Internal Server Error");
          // console.log(error);
          
        })
        


}

    const handleFileChange=(event)=>{
        console.log(event.target.files[0])
        setImage(event.target.files[0])
    }
  
   
  return (
    <div>
    
        <Container style={{marginLeft:'80px',marginTop:'80px'}}  >
                {/* <Col sm={{span: 8, offset: 2}} lg={{span: 8, offset: 3}} xl={{span: 8, offset: 4}} className=" offset-sm-2 offset-lg-3  offset-xl-4 text-center"> */}
                
                <form className=" rounded bg-white shadow p-5" onSubmit={createProduct} style={{marginTop:'-80px',marginLeft:"140px"} }>
                <h3 className="text-dark fw-bolder fs-4 mb-4">Add Vender </h3>

                <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="name" 
                     name='name'
                     placeholder="Vender Name" 
                     required
                      onChange={(e)=>handleChange(e,'name')}
                      value={vender.name}
                      //invalid={error.errors?.response?.data?.name ?true:false}
                     />
                    <label htmlFor="name">Name</label>
                </div>
                    {/* {error.errors?.response?.data?.name} */}

                    <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="title" 
                     placeholder="Vender Title" 
                     name='title'
                     required
                     onChange={(e)=>handleChange(e,'title')}
                     value={vender.title}
                    //  invalid={error.errors?.response?.data?.name ?true:false}
                     />
                    <label htmlFor="title"> Title</label>

                    <div class="form-floating">
                    {/* <textarea class="form-control" placeholder="Product Description" id="prodDesc"
                    style={{height:"300px"}}></textarea> */}
                    <label for="about">Vender About</label><br></br>
                    <br></br>
                    <JoditEditor
			              ref={editor}
			              value={vender.about}
		                onChange={handleChangeDesp}
		/>
                    </div>
                </div>
                    {/* {error.errors?.response?.data?.name} */}

                    <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="price" 
                     name='price'
                     placeholder="Vender Per Hour/Price" 
                     required
                      onChange={(e)=>handleChange(e,'price')}
                      value={vender.price}
                      //invalid={error.errors?.response?.data?.name ?true:false}
                     />
                    <label htmlFor="price"> Per Hour/Price</label>
                </div>
                    {/* {error.errors?.response?.data?.name} */}

                    <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="phonenumber" 
                     name='phonenumber'
                     placeholder="Vender Phone Number" 
                     required
                      onChange={(e)=>handleChange(e,'phonenumber')}
                      value={vender.phonenumber}
                      //invalid={error.errors?.response?.data?.name ?true:false}
                     />
                    <label htmlFor="phonenumber"> Phone Number</label>
                </div>
                    {/* {error.errors?.response?.data?.name} */}

                    <div>
                      <Label for='image' style={{paddingRight:"800px"}} >Vender Image</Label>
                      <Input 
                      className='mb-3'
                      type='file'
                      onChange={handleFileChange}
                      multiple
                      accept="image/jpeg"


                      />
                    </div>




                    <div class="form-floating">
                    <select class="form-select" id="category" name='id'  onChange={handleChange} aria-label="Floating label select example">
                    <option disabled selected >Select the Category </option>
                    {
                      categories.map(catagoryDto=>(
                        <option value={catagoryDto.id} key={catagoryDto.id}>
                        {catagoryDto.categorytitle}
                        </option>
                      ))
                    }
                    </select>
                    <label for="category">Works with selects</label>
                    </div>
                    {/* {JSON.stringify(vender)} */}

                <Button type="submit" className="btn  submit_btn w-100 my-4">Add Vender</Button>
                  
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

    </div>
  )
}

export default AdminAddVen