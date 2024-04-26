import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container,Col, Row, Card, CardBody, CardText, Button } from 'reactstrap'
import {  createCommentsByUser, loadAllComments, loadAllProductsById } from '../Services/Product'
import { useState } from 'react'
import {  toast } from 'react-toastify'
import { BASE_URL } from '../Services/Helper'
import { getCurrentUserDetail, isLoggedIn } from '../Auth/AuthIndex'
import { loadVender } from '../Services/Vender'


const Reader = () => {
  const {venId}=useParams()
  const [vander,setVander]=useState(
    {
      comments:'',
      user:{name:''},
      category:{categorytitle:''}
    })
  
  const [user,setUser]=useState(undefined)
    

 
  useEffect(()=>{

    // load All prodId
    loadVender(venId).then(data=>{
      console.log(data)
      setVander(data)
    }).catch(error=>{
      console.log(error)
      toast.error("Vender Error Not loading")
      
    })
    
    setUser(getCurrentUserDetail())

   
    
  },[])
  
  const printDate=(numbers)=>{
    return new Date(numbers).toDateString()
  }
  
  


  return (
    
    <Container className='bg-primary' >
      <Link  className='btn btn-secondary mb-2 mt-2' to="/mentor/buyer/buyervender">Back</Link> {vander && (<Link to='' className='text-light'>/{vander.name}</Link>)}
      <Row >
        <Col md={{size:12}}>
        <Card >
          {
            (vander) && (
              <CardBody className=''>
            <CardText>
              Vender By <b>{vander.user.name}</b> from {vander.user.shopName}  on <b>{printDate(vander.addedDate)}</b>
            <div className="divder" style={{width:'100%',height:'2px',background:'#336AEA'}}></div>
            
            </CardText>
            <Card className='border-0 shadow-sm mt-3  ' style={{width:'1000px',textAlign:'center'}}>
    <CardBody style={{display:'flex',flexDirection:'column'}} >
    <img className="img-fluid shadow-md" style={{width:'250px',height:'250px',borderRadius:'50%'}}  src={BASE_URL+`/vender/vender/image/`+vander.venImg} alt={vander.name+`Vender Image is Missing`} />
    <div style={{display:'flex',flexDirection:'column',margin:'25px',marginLeft:'270px',marginTop:'-200px'}}>
    {/* <img src={profileImage} className="img-fluid" alt="profile" style={{width:'250px',height:'250px'}} /> */}
    <div style={{display:'flex',flexDirection:'row'}} > Name &nbsp;<h6>  { vander.name}</h6></div>
    <div style={{display:'flex',flexDirection:'row'}} > Per Hour/Price &nbsp;<h6>  { vander.price}$</h6></div>
    <div style={{display:'flex',flexDirection:'row'}} > Phone Number &nbsp;<h6>  { vander.phonenumber}</h6></div>
    <div style={{display:'flex',flexDirection:'row',marginTop:'120px',marginLeft:'-90px'}} > Title &nbsp;<h6> {vander.title}</h6></div>
    <div style={{display:'flex',flexDirection:'row'}} > Category &nbsp;<CardText dangerouslySetInnerHTML={{__html:vander.category.categorytitle}}></CardText>...</div>
    <div style={{display:'flex',flexDirection:'row',marginLeft:'-90px'}} > About &nbsp;<CardText dangerouslySetInnerHTML={{__html:vander.about}}></CardText></div>
       
       
    
        
        </div>
    

    </CardBody>

    </Card>
            {/* <h3>Name:{vander.name}</h3> 
            <h5>Price:{vander.price}</h5>
            <CardText>
              <span className='text-muted'>Category: {vander.category.categorytitle}</span>
            </CardText> 
            <CardBody dangerouslySetInnerHTML={{__html:vander.about}}></CardBody>
            <div className="divder" style={{width:'100%',height:'2px',background:'#000'}}></div>
            <div className='image-container mt-2 shadow text-center' style={{maxWidth:"90%"}}>
            <img className="img-fluid shadow-md" style={{width:'250px',height:'250px',borderRadius:'50%'}}  src={BASE_URL+`/vender/vender/image/`+vander.venImg} alt={vander.name+`Vender Image is Missing`} />
            </div> */}



          </CardBody>
            )
          }
        </Card>
        </Col>
      </Row>
     
    </Container>
    
  )
}

export default Reader