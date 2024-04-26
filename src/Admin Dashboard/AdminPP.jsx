import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container,Col, Row, Card, CardBody, CardText, Button } from 'reactstrap'

import { useState } from 'react'
import {  toast } from 'react-toastify'
import { BASE_URL } from '../Services/Helper'
import { createCommentsByUser, loadAllComments, loadAllProductsById } from '../Services/Product'
import { getCurrentUserDetail, isLoggedIn } from '../Auth/AuthIndex'



const AdminPP = () => {
  const {prodId,id}=useParams()
  const [product,setProduct]=useState(
    {
      comments:'',
      user:{name:''},
      category:{categorytitle:''}
    })
  const [commment,setCommment]=useState({
    content:''
  })
  const [getAllComments,setGetAllComments]=useState(null)
  const [user,setUser]=useState(undefined)
    
//   const handleChange=(event,props)=>{
        
//     setCommment({...commment,[props]:event.target.value})
   
// }

 
  useEffect(()=>{

    // load All prodId
    loadAllProductsById(prodId).then(data=>{
      console.log(data)
      setProduct(data)
    }).catch(error=>{
      console.log(error)
      toast.error("Product Error Not loading")
      
    })
    
    setUser(getCurrentUserDetail())

    loadAllComments().then(data=>{
      console.log(data)
      setGetAllComments(data)
    }).catch(error=>{
      console.log(error)
      toast.error("Comments Error Not loading")
      
    })
    
  },[])
  
  const printDate=(numbers)=>{
    return new Date(numbers).toDateString()
  }
  
  const submitComment=()=>{
    createCommentsByUser(commment,product.prodId,user.id).then(data=>{
      if(!isLoggedIn()){
        toast.error("Need to Login")
        return
      }
      // if(commment.content.trim( )===''){
      //   return toast.warning("Please Fill the Field")
      // }
      console.log(data)
      toast.success("Comments Successfuly Added")
      // console.log(user)
      // setProduct({
      //   ...product,
      //   comments:[...product.comments,data.data]
        
      // })
      setCommment({
        content:''
      })
      // console.log(data)
    }).catch(error=>{
      console.log(error)
      toast.error("Comments Did't Add Sever Error")
      
    })
  }


  return (
    
    <Container className='bg-primary' >
      <Link  className='btn btn-secondary mb-2 mt-2' to="/user/admin/BuyerDropshipping">Back</Link> {product && (<Link to='' className='text-light'>/{product.prodName}</Link>)}
      <Row >
        <Col md={{size:12}}>
        <Card >
          {
            (product) && (
              <CardBody className=''>
            <CardText>
              Product By <b>{product.user.name}</b> from {product.user.shopName}  on <b>{printDate(product.addedDate)}</b>
            <div className="divder" style={{width:'100%',height:'2px',background:'#336AEA'}}></div>
            
            </CardText>
            <h3>Name:{product.prodName}</h3> 
            <h5>Price:{product.prodPrice}</h5>
            <CardText>
              <span className='text-muted'>Category: {product.category.categorytitle}</span>
            </CardText> 
            <CardBody dangerouslySetInnerHTML={{__html:product.prodDesc}}></CardBody>
            {/* <div className="divder" style={{width:'100%',height:'2px',background:'#000'}}></div> */}
            <div className='image-container mt-2 shadow text-center' style={{maxWidth:"90%"}}>
              <img className='img-fluid mt-3' style={{width:"500px"}} src={BASE_URL+`/product/image/`+product.prodImg} alt={product.prodName+`Product is Missing`} />
            </div>



          </CardBody>
            )
          }
        </Card>
        </Col>
      </Row>
      <Row className='color-white' >
        <Col md={{size:8,
        offset:2}}>
           <h1 className='text-light mt-2' >Comments({product ? product.comments.length : 0})</h1>
         
          {
            product.comments && product.comments.map((c,index)=>(
              
              <Card className='mt-3 border-0' key={index} >
                <CardBody className='text-primary'>
                <b className='text-dark'>
                  {
                    
                    c.user.name
                    
                  }
                  
                </b>
                <br></br>
                <span className='text-muted ' style={{fontSize:"12px"}} >{printDate(c.addedCommentDate)}</span>
                <br></br>
                {c.content}
                </CardBody>
              </Card>
              
              
            ))
          } 
              <Card className='mt-3 border-0'  >
                <CardBody className='text-primary'>
                <div className="form-floating mt-3">
                  
                    <textarea 
                    className="form-control mt-3 mb-5" 
                    placeholder="Leave a comment here" 
                    id="content" 
                    style={{height: "100px"}} 
                    value={commment.content}
                    onChange={(e)=>setCommment({ content:e.target.value})}
                    required
                    ></textarea>
                    <label htmlFor="content">Message</label>
                </div>
                    
                  <Button onClick={submitComment} type='submit' className='order_now'>Comment</Button>
                </CardBody>
              </Card>
        </Col>
      </Row>
    </Container>
    
  )
}

export default AdminPP