import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { loadAllProductsSimple, loadAllProductsbyUser, loadproduct,updateProduct as doUpdateProduct, uploadImagePost } from '../Services/Product'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { getCurrentUserDetail } from '../Auth/AuthIndex'
import { Button, Container, Input, Label } from 'reactstrap'
import JoditEditor from 'jodit-react';
import { useRef } from 'react'
import { loadAllCategories } from '../Services/Cetagory'
import { BASE_URL } from '../Services/Helper'
function UpdatePage() {
    const [categories,setCategories] = useState([]);
    const {prodId}=useParams()
    const editor = useRef(null);
    const [image,setImage]=useState(null);
    const [product,setProduct] = useState([
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
      loadproduct(prodId).then(data=>{
        setProduct({...data,id:data.category.id})
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
        if(product){
            if( product.user &&  product.user.id !== myUser.id){
                
                toast.error("This is not your Product")
                navigate('/mentor/seller ');
                
                
            }
        }
    },[product])

    const handleChange=(event,props)=>{
        
      setProduct({...product,
                  [props]:event.target.value
      })
     
  } 

  const handleFileChange=(event)=>{
    console.log(event.target.files[0])
    setImage(event.target.files[0])
}


  const updateProduct=(event)=>{
    event.preventDefault()
    console.log(product)
    
    doUpdateProduct({...product,category:{id:product.id}},product.prodId).then(response=>{
      console.log(response)

      uploadImagePost(  image,response.prodId).then(data=>{
        toast.success("Product Imaged Added Successfully");
        
      }).catch(error=>{
        console.log(error)
        toast.error("Product Imaged Error");
      })


      toast.success("Product Updated Successfully")
      navigate('/mentor/seller/SellerFreelances ');

    }).catch(error=>{
      console.log(error)
      toast.error("Update Sever Error")
    })
  }
    
    const updateHtml=()=>{
      return(
        <Container  >
                <Button tag={Link} color='success' to='/mentor/seller/SellerFreelances' className='m-3'> Back to Product </Button><br></br>
                {/* <Col sm={{span: 8, offset: 2}} lg={{span: 8, offset: 3}} xl={{span: 8, offset: 4}} className=" offset-sm-2 offset-lg-3  offset-xl-4 text-center"> */}
                {/* {JSON.stringify(product)} */}
                <form className=" rounded bg-white shadow p-5" onSubmit={updateProduct}>
                <h3 className="text-dark fw-bolder fs-4 mb-4">Update Products </h3>

                <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="prodName" 
                     name='prodName'
                     placeholder="Product Name" 
                     required
                      onChange={(event)=>handleChange(event,'prodName')}
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
		                onChange={newContent=>setProduct({...product,content:newContent})}
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
                      onChange={(event)=>handleChange(event,'prodPrice')}
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
                      <img className='img-fluid m-3  ' style={{width:"30%"}} src={BASE_URL+`/product/image/`+product.prodImg} alt={product.prodName+`Product is Missing`} />
                    </div>




                    <div class="form-floating">
                    <select class="form-select"
                     id="category"
                      name='id'
                        onChange={(event)=>handleChange(event,'id')} 
                        aria-label="Floating label select example"
                        value={product.id}
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
                    {/* {JSON.stringify(product)} */}

                <Button type="submit" color='warning' className="btn  submit_btn w-100 my-4">Update Product</Button>
                  
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
      )
    }


  return (
    <>
    {product && updateHtml()}
    </>
  )
}

export default UpdatePage