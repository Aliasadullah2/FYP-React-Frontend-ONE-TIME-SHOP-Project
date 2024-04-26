import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {   Card, CardBody, CardText,  Row, Col, Button } from 'reactstrap'


import { useEffect } from 'react';
import { useState } from 'react';

import { toast } from 'react-toastify';
import { getCurrentUserDetail, isLoggedIn } from '../../Auth/AuthIndex';
import { deleteVendersuser, loadAllVendersbyUser } from '../../Services/Vender';
import { BASE_URL } from '../../Services/Helper';



function AdminVenPP({vender={ id:-1, name:"Vender Name",title:"Vender Title",about:"Vender About",price:"Vender Per hour/Price",phonenumber:"Vender Phone Number" } } ) {
 
    const [user,setUser]=useState(null);
    const [login,setLogin] = useState(null);
    const navigate=useNavigate();
  const [myVender,setMyVender] = useState([]);
    useEffect(()=>{
        setUser(getCurrentUserDetail())
        setLogin(isLoggedIn())
        loadVenderData()

    },[])

    function loadVenderData(){
        loadAllVendersbyUser(getCurrentUserDetail().id).then(data=>{
            setMyVender([...data])
            console.log(data)
          }).catch(error=>{
            console.log(error)
            toast.error()
          })
    }


    function delteVender(vender){
        deleteVendersuser(vender.venId).then(resp=>{
          console.log(resp)
          toast.success("Vender Deleted Successfully")
          navigate('/user/admin ');
          loadVenderData()
          
            
        }).catch(error=>{
          console.log(error)
          toast.error("Server Error to Delete Vender")
        })
      }

  return (
    
    <>
    
    <Row>
      <Col sm={6} md={8} lg={12}>
     
    <Card className='border-0 shadow-lg mt-3' style={{width:'850px',textAlign:'center',marginLeft:'150px'}}>
    <CardBody style={{display:'flex',flexDirection:'row'}}>
        {/* <img className='img-fluid mt-3 rounded-3 shadow-sm' style={{width:"200px"}} src={BASE_URL+`/vender/vender/image/`+vender.venImg} alt={vender.name+`Product is Missing`} /> */}
        <img className="img-fluid shadow-md" style={{width:'250px',height:'250px',borderRadius:'50%'}}  src={BASE_URL+`/vender/vender/image/`+vender.venImg} alt={vender.name+`Vender Image is Missing`} />
        <div style={{display:'flex',flexDirection:'column',margin:'25px'}}>
    {/* <img src={profileImage} className="img-fluid" alt="profile" style={{width:'250px',height:'250px'}} /> */}
    <div style={{display:'flex',flexDirection:'row'}} > Title &nbsp;<h6> {vender.title.substring(0,30)}</h6></div>
    <div style={{display:'flex',flexDirection:'row'}} > Name &nbsp;<h6>  { vender.name.substring(0,15)}</h6></div>
    <div style={{display:'flex',flexDirection:'row'}} > Per Hour/Price &nbsp;<h6>  { vender.price.substring(0,15)}$</h6></div>
    <div style={{display:'flex',flexDirection:'row'}} > About &nbsp;<CardText dangerouslySetInnerHTML={{__html:vender.about.substring(0,30)}}></CardText>...</div>
    <div style={{display:'flex',flexDirection:'row'}} > Phone Number &nbsp;<h6>  { vender.phonenumber.substring(0,13)}$</h6></div>
        
       
       
    
        
    <Link className="btn btn-primary" to={`/user/venderpage/`+vender.venId} >ReadMore</Link>
        </div>
        <div className='mt-3'>
            
            {/* <Link className="btn btn-primary" to={`/mentor/MyProductPage/`+product.prodId} >ReadMore</Link> */}
            {
                isLoggedIn && (user && user.id === vender.user.id ? <Button color='danger' className='ms-3'onClick={ ()=>delteVender(vender) } >Delete</Button> : '')
            }
            {
                isLoggedIn && (user && user.id === vender.user.id ? <Button tag={Link} to={`/user/venderuodatepage/${vender.venId}`} color='warning' className='ms-3'  >Update</Button> : '')
            }
        </div>

    </CardBody>

    </Card>

</Col>
    </Row>

    </>
  )
}

export default AdminVenPP