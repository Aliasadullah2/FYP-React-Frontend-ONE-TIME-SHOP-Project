import React, { useRef } from 'react'
import { Container, Button} from "react-bootstrap";
import { loadAllCategories } from '../Services/Cetagory';
import { useEffect } from 'react';
import { useState } from 'react';
import JoditEditor from 'jodit-react';
import {  toast } from 'react-toastify';
import { createProductapi, loadAllProductsbyUser, uploadImagePost } from '../Services/Product';
import { getCurrentUserDetail, isLoggedIn } from '../Auth/AuthIndex';
import { Input, Label } from 'reactstrap';
// import Product from '../Buyer Pages/Product';
import MyProduct from '../Buyer Pages/MyProduct';
import { useNavigate } from 'react-router-dom';



function SellerDS() {
  const [categories,setCategories] = useState([]);
  const editor = useRef(null);
  const [user,setUser]=useState(undefined)
	// const [content, setContent] = useState('');
  
  const [product,setProduct]=useState({
    prodName:'',
    prodDesc:'',
    prodPrice:'',
    id:''
  })
  
  const [myProduct,setMyProduct] = useState([]);
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

        loadAllProductsbyUser(getCurrentUserDetail().id).then(data=>{
          setMyProduct([...data])
          console.log(data)
        }).catch(error=>{
          console.log(error)
          toast.error()
        })


    },[])

    

    const handleChange=(event)=>{
        
      setProduct({...product,[event.target.name]:event.target.value})
     
  } 
  const handleChangeDesp=(Data)=>{
        
    setProduct({...product,'prodDesc':Data})
   
}

const createProduct=(event)=>{
        event.preventDefault();
        // console.log(product);

        if(product.prodName.trim()===""){
          toast.warning("Fill the Product Name")
          return;
        }

        if(product.prodDesc.trim()===""){
          toast.warning("Fill the Product Despcription")
          return;
        }

        if(product.prodName.trim()===""){
          toast.warning("Fill the Product Price")
          return;
        }
        if(product.id.trim()===""){
          toast.warning("Select the Product Category")
          return;
        }

        //submit data on sever
        product['userId']=user.id
        createProductapi(product).then(data=>{

            uploadImagePost(  image,data.prodId).then(data=>{
              toast.success("Product Imaged Added Successfully");
              
            }).catch(error=>{
              console.log(error)
              toast.error("Product Imaged Error");
            })



          toast.success("Product Added Successfully");
          // console.log(product);
          setProduct({
            prodName:'',
            prodDesc:'',
            prodPrice:'',
            id:''
          })
         
          navigate('/mentor/seller/SellerFreelances ');
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
    <>
        <Container  style={{marginLeft:'80px',marginTop:'80px'}} >
                {/* <Col sm={{span: 8, offset: 2}} lg={{span: 8, offset: 3}} xl={{span: 8, offset: 4}} className=" offset-sm-2 offset-lg-3  offset-xl-4 text-center"> */}
              
                <form className=" rounded bg-white shadow p-5" onSubmit={createProduct} style={{marginTop:'-80px',marginLeft:"140px"} }>
                <h3 className="text-dark fw-bolder fs-4 mb-4">Add Products </h3>

                <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="prodName" 
                     name='prodName'
                     placeholder="Product Name" 
                     required
                      onChange={(e)=>handleChange(e,'prodName')}
                      value={product.prodName}
                      //invalid={error.errors?.response?.data?.name ?true:false}
                     />
                    <label htmlFor="prodName">Product Name</label>
                </div>
                    {/* {error.errors?.response?.data?.name} */}

                    <div className="form-floating mb-3">
                     {/* <input 
                     type="text" 
                     className="form-control name" 
                     id="prodDesc" 
                     placeholder="Product Description" 
                     required
                    //  onChange={(e)=>handleChange(e,'name')}
                    //  value={data.name}
                    //  invalid={error.errors?.response?.data?.name ?true:false}
                     />
                    <label htmlFor="prodDesc"> Description</label> */}

                    <div class="form-floating">
                    {/* <textarea class="form-control" placeholder="Product Description" id="prodDesc"
                    style={{height:"300px"}}></textarea> */}
                    <label for="prodDesc">Product Description</label><br></br>
                    <br></br>
                    <JoditEditor
			              ref={editor}
			              value={product.prodDesc}
		                onChange={handleChangeDesp}
		/>
                    </div>
                </div>
                    {/* {error.errors?.response?.data?.name} */}

                    <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="prodPrice" 
                     name='prodPrice'
                     placeholder="Product Price" 
                     required
                      onChange={(e)=>handleChange(e,'prodPrice')}
                      value={product.prodPrice}
                      //invalid={error.errors?.response?.data?.name ?true:false}
                     />
                    <label htmlFor="prodPrice"> Price</label>
                </div>
                    {/* {error.errors?.response?.data?.name} */}

                    <div>
                      <Label for='image' style={{paddingRight:"800px"}} >Product Image</Label>
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
                    {/* {JSON.stringify(product)} */}

                <Button type="submit" className="btn  submit_btn w-100 my-4">Add Product</Button>
                  
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
    </>
  )
}

export default SellerDS