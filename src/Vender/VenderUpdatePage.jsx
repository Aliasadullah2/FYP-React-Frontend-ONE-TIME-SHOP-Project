import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {  uploadImagePost } from '../Services/Product'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { getCurrentUserDetail } from '../Auth/AuthIndex'
import { Button, Container, Input, Label } from 'reactstrap'
import JoditEditor from 'jodit-react';
import { useRef } from 'react'
import { loadAllCategories } from '../Services/Cetagory'
import { BASE_URL } from '../Services/Helper'
import { loadVender, updateVender, uploadImageVender } from '../Services/Vender'
function VenderUpdatePage() {
    const [categories,setCategories] = useState([]);
    const {venId}=useParams()
    const editor = useRef(null);
    const [image,setImage]=useState(null);
    const [vender,setVender] = useState([
        {id:''}
    ])
    const [myUser,setMyUser] = useState([
        {
            id:''
        }
    ])
    const navigate=useNavigate();

    useEffect(() => {
      
      //loading all categories
      loadAllCategories().then((data)=>{
        // console.log(data)
        setCategories(data)
        
      }).catch(error=>{
        // console.log(error)
        toast.error("Error to Loading Categories")
      })
        
      //load all product
      loadVender(venId).then(data=>{
        setVender({...data,id:data.category.id})
        console.log(data)
      }).catch(error=>{
        console.log(error)
        toast.error("Error in Loading Product")
      })

    // loadAllProductsbyUser(getCurrentUserDetail().id).then(data=>{
    //     setProduct([...data])
    //     console.log(data)
    //   }).catch(error=>{
    //     console.log(error)
    //     toast.error("Error is Loading Product")
    //   })
      
    }, [])



    useEffect(()=>{
        setMyUser(getCurrentUserDetail())
        if(vender){
            if( vender.user &&  vender.user.id !== myUser.id){
                
                toast.error("This is not your Product")
                navigate('/mentor/seller ');
                
                
            }
        }
    },[vender])

    const handleChange=(event,props)=>{
        
      setVender({...vender,
                  [props]:event.target.value
      })
     
  } 

  const handleFileChange=(event)=>{
    console.log(event.target.files[0])
    setImage(event.target.files[0])
}


  const myUpdateVender=(event)=>{
    event.preventDefault()
    console.log(vender)
    updateVender({...vender,category:{id:vender.id}},vender.venId).then(response=>{
      console.log(response)
      uploadImageVender(  image,response.venId).then(data=>{
        toast.success("Vender Imaged Updated Successfully");
        
      }).catch(error=>{
        console.log(error)
        toast.error("Vender Imaged Error");
      })
      toast.success("Product Updated Successfully")
      navigate('/mentor/seller/myvender ');



    }).catch(error=>{
      console.log(error)
      toast.error("Update Sever Error")
    })
  }
    
    const updateHtml=()=>{
      return(
        <Container   >
            <Button tag={Link} color='success' to='/mentor/seller/myvender' className='m-3'> Back to Vender </Button><br></br>
        {/* <Col sm={{span: 8, offset: 2}} lg={{span: 8, offset: 3}} xl={{span: 8, offset: 4}} className=" offset-sm-2 offset-lg-3  offset-xl-4 text-center"> */}
      
        <form className=" rounded bg-white shadow p-5" onSubmit={myUpdateVender}>
        <h3 className="text-dark fw-bolder fs-4 mb-4">Update Vender </h3>

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
            <label for="prodDesc">Vender About</label><br></br>
            <br></br>
            <JoditEditor
                  ref={editor}
                  value={vender.about}
                  onChange={newContent=>setVender({...vender,content:newContent})}
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
                      <Label for='image' style={{paddingRight:"800px"}} >Product Image</Label>
                      <Input 
                      className='mb-3'
                      type='file'
                      onChange={handleFileChange}
                      multiple
                      accept="image/jpeg"


                      />
                      <img className='img-fluid m-3  ' style={{width:"20%"}}  src={BASE_URL+`/vender/vender/image/`+vender.venImg} alt={vender.name+`Product is Missing`} />
                    </div>




            <div class="form-floating">
                    <select class="form-select"
                     id="category"
                      name='id'
                        onChange={(event)=>handleChange(event,'id')} 
                        aria-label="Floating label select example"
                        value={vender.venId}
                        >
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

            <Button type="submit" color='warning' className="btn  submit_btn w-100 my-4">Update Vender</Button>
          
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
        // <Container  >
        //         <Button tag={Link} color='success' to='/mentor/seller/SellerFreelances' className='m-3'> Back to Product </Button><br></br>
        //         {/* <Col sm={{span: 8, offset: 2}} lg={{span: 8, offset: 3}} xl={{span: 8, offset: 4}} className=" offset-sm-2 offset-lg-3  offset-xl-4 text-center"> */}
        //         {/* {JSON.stringify(product)} */}
        //         <form className=" rounded bg-white shadow p-5" onSubmit={updateProduct}>
        //         <h3 className="text-dark fw-bolder fs-4 mb-4">Update Products </h3>

        //         <div className="form-floating mb-3">
        //              <input 
        //              type="text" 
        //              className="form-control name" 
        //              id="prodName" 
        //              name='prodName'
        //              placeholder="Product Name" 
        //              required
        //               onChange={(event)=>handleChange(event,'prodName')}
        //               value={product.prodName}
        //               //invalid={error.errors?.response?.data?.name ?true:false}
        //              />
        //             <label htmlFor="prodName">Product Name</label>
        //         </div>
        //             {/* {error.errors?.response?.data?.name} */}

        //             <div className="form-floating mb-3">
        //              {/* <input 
        //              type="text" 
        //              className="form-control name" 
        //              id="prodDesc" 
        //              placeholder="Product Description" 
        //              required
        //             //  onChange={(e)=>handleChange(e,'name')}
        //             //  value={data.name}
        //             //  invalid={error.errors?.response?.data?.name ?true:false}
        //              />
        //             <label htmlFor="prodDesc"> Description</label> */}

        //             <div class="form-floating">
        //             {/* <textarea class="form-control" placeholder="Product Description" id="prodDesc"
        //             style={{height:"300px"}}></textarea> */}
        //             <label for="prodDesc">Product Description</label><br></br>
        //             <br></br>
        //             <JoditEditor
		// 	              ref={editor}
		// 	              value={product.prodDesc}
		                // onChange={newContent=>setProduct({...product,content:newContent})}
		// />
        //             </div>
        //         </div>
        //             {/* {error.errors?.response?.data?.name} */}

        //             <div className="form-floating mb-3">
        //              <input 
        //              type="text" 
        //              className="form-control name" 
        //              id="prodPrice" 
        //              name='prodPrice'
        //              placeholder="Product Price" 
        //              required
        //               onChange={(event)=>handleChange(event,'prodPrice')}
        //               value={product.prodPrice}
        //               //invalid={error.errors?.response?.data?.name ?true:false}
        //              />
        //             <label htmlFor="prodPrice"> Price</label>
        //         </div>
        //             {/* {error.errors?.response?.data?.name} */}

        //             <div>
        //               <Label for='image' style={{paddingRight:"800px"}} >Product Image</Label>
        //               <Input 
        //               className='mb-3'
        //               type='file'
        //               onChange={handleFileChange}
        //               multiple
        //               accept="image/jpeg"


        //               />
        //               <img className='img-fluid m-3  ' style={{width:"30%"}} src={BASE_URL+`/product/image/`+product.prodImg} alt={product.prodName+`Product is Missing`} />
        //             </div>




                    // <div class="form-floating">
                    // <select class="form-select"
                    //  id="category"
                    //   name='id'
                    //     onChange={(event)=>handleChange(event,'id')} 
                    //     aria-label="Floating label select example"
                    //     value={product.id}
                    //     >
                    // <option disabled selected >Select the Category </option>
                    // {
                    //   categories.map(catagoryDto=>(
                    //     <option value={catagoryDto.id} key={catagoryDto.id}>
                    //     {catagoryDto.categorytitle}
                    //     </option>
                    //   ))
                    // }
                    // </select>
                    // <label for="category">Works with selects</label>
                    // </div>
        //             {/* {JSON.stringify(product)} */}

        //         <Button type="submit" color='warning' className="btn  submit_btn w-100 my-4">Update Product</Button>
                  
        //         </form>
        //         {/* </Col> */}
                
        //         {/* <div>
        //            <h2 className='mt-3'>My Products ({myProduct.length})</h2>
        //             {
        //               myProduct.map((productDto,index)=>{
        //                 return(
        //                   <MyProduct product={productDto} key={index} />
        //                 )
        //               })
        //             }
        //         </div> */}
        //     </Container>


      )
    }


  return (
    <>
    {vender && updateHtml()}
    </>
  )
}

export default VenderUpdatePage