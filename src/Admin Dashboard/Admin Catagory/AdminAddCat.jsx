import React, { useRef } from 'react'
import { Container, Button} from "react-bootstrap";
import { useEffect } from 'react';
import { useState } from 'react';
import JoditEditor from 'jodit-react';
import {  toast } from 'react-toastify';
import { Input, Label } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { getCurrentUserDetail, isLoggedIn } from '../../Auth/AuthIndex';
import {  AddCategories, loadAllCategories, loadAllSimpleCategories } from '../../Services/Cetagory';
import { createProductapi, loadAllProductsbyUser, uploadImagePost } from '../../Services/Product';
import MyProduct from '../../Buyer Pages/MyProduct';
import CateShow from './CateShow';
import InfiniteScroll from 'react-infinite-scroll-component';



function AdminAddCat() {
  
  const editor = useRef(null);
  const [user,setUser]=useState(undefined)
	// const [content, setContent] = useState('');
  
  const [product,setProduct]=useState({
    categorytitle:'',
    
  })
  
  const [myProduct,setMyProduct] = useState([]);
  const [login,setLogin] = useState([]);
  const [image,setImage]=useState(null);
  const navigate=useNavigate();
  const [categoriess,setCategoriess] = useState({
    content:[],
pageNumber:'',
pageSize: '',
totalElement: '',
totalPages: '',
lastPage: false
});
    // const categories = loadAllCategories();

    // console.log(categories);
    useEffect(()=>{
        setUser(getCurrentUserDetail())
        setLogin(isLoggedIn())
       

        


    },[])

    

    const handleChange=(event)=>{
        
      setProduct({...product,[event.target.name]:event.target.value})
     
  } 
  

const createProduct=(event)=>{
        event.preventDefault();
        // console.log(product);

        if(product.categorytitle.trim()===""){
          toast.warning("Fill the Your Category")
          return;
        }
        

        //submit data on sever
        product['userId']=user.id
        AddCategories(product).then(data=>{

          toast.success("Category Added Successfully");
          console.log(categoriess);

          setProduct({
            categorytitle:'',
           
          })
         
        //   navigate('/mentor/seller/SellerFreelances ');
        }).catch((error)=>{
          toast.error("Internal Server Error");
          // console.log(error);
          
        })
        


}

const[currentPage,setCurrentPage]=useState(0)

  useEffect(()=>{


    changePage(currentPage)

  },[currentPage])

  const changePage=(pageNumber=0,pageSize=5)=>{
    if(pageNumber>categoriess.pageNumber && categoriess.lastPage)
    {
      return
    }
    if(pageNumber < categoriess.pageNumber && categoriess.pageNumber ===0)
    {
      return
    }
    loadAllSimpleCategories(pageNumber,pageSize).then(data=>{
        setCategoriess({
        content:[...categoriess.content,...data.content].reverse(),
        pageNumber:data.pageNumber,
        pageSize: data.pageSize,
        totalElement: data.totalElement,
        totalPages: data.totalElement,
        lastPage: data.lastPage
      })
      // window.scroll(0,0)
      console.log(data)
    }).catch(error=>{
      console.log(error)
      toast.error("Error is loading product")
      
    })
  }

  const chnageInfinitePage=()=>{
    console.log("Page Chnage")
    setCurrentPage((changePage)=>changePage+1)
}

   
  
   
  return (
    <>
        <Container  style={{marginLeft:'120px',marginTop:'80px'}} >
                {/* <Col sm={{span: 8, offset: 2}} lg={{span: 8, offset: 3}} xl={{span: 8, offset: 4}} className=" offset-sm-2 offset-lg-3  offset-xl-4 text-center"> */}
              
                <form className=" rounded bg-white shadow p-5" onSubmit={createProduct} style={{marginTop:'-80px',marginLeft:"140px",maxWidth:'1000px'} }>
                <h3 className="text-dark fw-bolder fs-4 mb-4">Add Category </h3>

                <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="categorytitle" 
                     name='categorytitle'
                     placeholder="Category Name" 
                     required
                      onChange={(e)=>handleChange(e,'prodName')}
                      value={product.categorytitle}
                      //invalid={error.errors?.response?.data?.name ?true:false}
                     />
                    <label htmlFor="categorytitle">Category Name</label>
                </div>
                    {/* {error.errors?.response?.data?.name} */}

                  




                   
                    {/* {JSON.stringify(product)} */}

                <Button type="submit" className="btn  submit_btn w-100 my-4">Add Category</Button>
                  
                </form>
                {/* </Col> */}
                
                <div>
                   
                    {
                      myProduct.map((CategoryDto,index)=>{
                        return(
                          <CateShow categories={CategoryDto} key={index} />
                        )
                      })
                    }
                </div>
                <InfiniteScroll style={{marginLeft:'120px',marginTop:'80px'}}
                dataLength={categoriess.content.length} 
                next={chnageInfinitePage}
                hasMore={!categoriess.lastPage}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }
                
                >                 
                <div style={{display:'flex',flexWrap:'wrap',margin:'0px',justifyContent:'center'}}>
                
                                {
                                    categoriess.content.map(CategoryDto=>(
                                    <CateShow categoriess={CategoryDto} key={categoriess.id}/>
                                    ))
                                }
                
                                    </div>
                </InfiniteScroll>
            </Container>
    </>
  )
}

export default AdminAddCat