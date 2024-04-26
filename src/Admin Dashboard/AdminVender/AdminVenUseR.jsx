import React from 'react'
// import { Link } from 'react-router-dom'
import {   Card, CardBody, CardText,  Row, Col } from 'reactstrap'

import { Link } from 'react-router-dom'
import { BASE_URL } from '../../Services/Helper'
// import profileImage from "../Assets/profile.jpg"

function AdminVenUseR({vander={ id:-1, name:"Vender Name",title:"Vender Title",about:"Vender About",price:"Vender Per hour/Price",phonenumber:"Vender Phone Number" } }) {
  
  return (
    
    <>
    
    <Row>
      <Col sm={6} md={8} lg={12}>
     
    <Card className='border-0 shadow-lg mt-5  ' style={{width:'1000px',textAlign:'center'}}>
    <CardBody style={{display:'flex',flexDirection:'row'}} >
    <img className="img-fluid shadow-md" style={{width:'250px',height:'250px',borderRadius:'50%'}}  src={BASE_URL+`/vender/vender/image/`+vander.venImg} alt={vander.name+`Vender Image is Missing`} />
    <div style={{display:'flex',flexDirection:'column',margin:'25px'}}>
    {/* <img src={profileImage} className="img-fluid" alt="profile" style={{width:'250px',height:'250px'}} /> */}
    <div style={{display:'flex',flexDirection:'row'}} > Title &nbsp;<h6> {vander.title.substring(0,30)}</h6></div>
    <div style={{display:'flex',flexDirection:'row'}} > Name &nbsp;<h6>  { vander.name.substring(0,15)}</h6></div>
    <div style={{display:'flex',flexDirection:'row'}} > Per Hour/Price &nbsp;<h6>  { vander.price.substring(0,15)}$</h6></div>
    <div style={{display:'flex',flexDirection:'row'}} > About &nbsp;<CardText dangerouslySetInnerHTML={{__html:vander.about.substring(0,30)}}></CardText>...</div>
    <div style={{display:'flex',flexDirection:'row'}} > Phone Number &nbsp;<h6>  { vander.phonenumber.substring(0,13)}</h6></div>
        
       
       
    
        
    <Link className="btn btn-primary" to={`/user/readerven/`+vander.venId} >ReadMore</Link>
        </div>

    </CardBody>

    </Card>

    
</Col>
    </Row>

    </>
  )
}

export default AdminVenUseR
