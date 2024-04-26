import React from 'react'
import { Link } from 'react-router-dom'
import {   Card, CardBody, CardText,  Row, Col } from 'reactstrap'


import { BASE_URL } from '../../Services/Helper'

function AdminProduct({product={  prodName:"Product Name",prodDesc:"Product Despcription",prodPrice:"Product Price" }} ) {
  
  return (
    
    <>
    
    <Row>
    <Col sm={{size:'4'}} >
    <Card color="primary" outline className='border-0 shadow-lg mt-3 py-3 py-sm-0 m-2' style={{width:'340px',height:'450px',textAlign:'center'}}>
   
    
   <CardBody  >
     <div >
 
    <img className='img-fluid my-3 rounded-3' style={{maxWidth:'250px',maxHeight:'200px'}} src={BASE_URL+`/product/image/`+product.prodImg} alt={product.prodName+`Product is Missing`} />
     </div>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}} > Name &nbsp;<h6> {product.prodName.substring(0,30)}</h6>...</div>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}} > Description &nbsp;<h6> <CardText dangerouslySetInnerHTML={{__html:product.prodDesc.substring(0,15)}}></CardText></h6>...</div>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}} > Price &nbsp;<h6> {product.prodPrice.substring(0,30)}</h6></div>
     
     
     
    <Link className="btn btn-primary" to={`/user/ProductPage/`+product.prodId} >ReadMore</Link>
     
            
   
 
         
     </CardBody>
 
     </Card>
    
</Col>
    </Row>

    </>
  )
}

export default AdminProduct