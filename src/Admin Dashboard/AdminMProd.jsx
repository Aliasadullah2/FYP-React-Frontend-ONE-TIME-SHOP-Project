import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {   Card, CardBody, CardText,  Row, Col, Button, CardTitle, CardSubtitle } from 'reactstrap'
import { BASE_URL } from '../Services/Helper'

import { useEffect } from 'react';
import { useState } from 'react';

import { toast } from 'react-toastify';
import { getCurrentUserDetail, isLoggedIn } from '../Auth/AuthIndex';
import { deleteProductsuser, loadAllProductsbyUser } from '../Services/Product';


function AdminMProd({product={ id:-1, prodName:"Product Name",prodDesc:"Product Despcription",prodPrice:"Product Price" } } ) {
 
    const [user,setUser]=useState(null);
    const [login,setLogin] = useState(null);
    const navigate=useNavigate();
  const [myProduct,setMyProduct] = useState([]);
    useEffect(()=>{
        setUser(getCurrentUserDetail())
        setLogin(isLoggedIn())
        loadProductData()

    },[])

    function loadProductData(){
        loadAllProductsbyUser(getCurrentUserDetail().id).then(data=>{
            setMyProduct([...data])
            console.log(data)
          }).catch(error=>{
            console.log(error)
            toast.error()
          })
    }


    function delteProduct(product){
        deleteProductsuser(product.prodId).then(resp=>{
          console.log(resp)
          toast.success("Product Deleted Successfully")
          navigate('/user/admin ');
          loadProductData()
          
            
        }).catch(error=>{
          console.log(error)
          toast.error("Server Error to Delete Product")
        })
      }

  return (
    
    <>
    
    <Row>
      <Col sm={{size:'4'}} >
     
    <Card color="primary" outline className='border-0 shadow-lg mt-3 py-3 py-sm-0 m-2' style={{width:'340px',height:'450px',textAlign:'center'}}>
   
    
  <CardBody  >
    <div >

   <img className='img-fluid my-3 rounded-3'  style={{maxWidth:'250px',maxHeight:'250px'}} src={BASE_URL+`/product/image/`+product.prodImg} alt={product.prodName+`Product is Missing`} />
    </div>
   <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}} > Name &nbsp;<h6> {product.prodName.substring(0,30)}</h6>...</div>
   <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}} > Description &nbsp;<h6> <CardText dangerouslySetInnerHTML={{__html:product.prodDesc.substring(0,15)}}></CardText></h6>...</div>
   <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}} > Price &nbsp;<h6> {product.prodPrice.substring(0,30)}</h6></div>
    
    
    
    <Link className="btn btn-primary" to={`/user/ProductPage/`+product.prodId} >ReadMore</Link>
    
            {
                isLoggedIn && (user && user.id === product.user.id ? <Button color='danger' className='ms-3'onClick={ ()=>delteProduct(product) } >Delete</Button> : '')
            }
            {
                isLoggedIn && (user && user.id === product.user.id ? <Button tag={Link} to={`/user/updatepage/${product.prodId}`} color='warning' className='ms-3'  >Update</Button> : '')
            }
  

       

    </CardBody>

    </Card>
    

  
</Col>
    </Row>

    </>
  )
}

export default AdminMProd