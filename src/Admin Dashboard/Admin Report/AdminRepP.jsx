import React from 'react'
import {  useNavigate } from 'react-router-dom'
import {   Card, CardBody, CardText,  Row, Col, Button } from 'reactstrap'
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { getCurrentUserDetail, isLoggedIn } from '../../Auth/AuthIndex';
import { deleteReportsuser } from '../../Services/Reports';






function AdminRepP({report={ id:-1, name:"Vender Name",title:"Vender Title",about:"Vender About",price:"Vender Per hour/Price",phonenumber:"Vender Phone Number" } } ) {
 
    const [user,setUser]=useState(null);
    const [login,setLogin] = useState(null);
    const navigate=useNavigate();
 
    useEffect(()=>{
        setUser(getCurrentUserDetail())
        setLogin(isLoggedIn())
       

    },[])

   


    function delteReport(report){
        deleteReportsuser(report.repId).then(resp=>{
          console.log(resp)
          toast.success("Report Deleted Successfully")
         navigate('/user/admin/ReportsAlAdmin ');
        
          
            
        }).catch(error=>{
          console.log(error)
          toast.error("Server Error to Delete Report")
        })
      }

  return (
    
    <>
    
    <Row >
      <Col sm={6} md={8} lg={12}>
     
    <Card className='border-0 shadow-lg mt-3' color="primary" outline style={{width:'850px',textAlign:'center',marginLeft:'180px'}}>
    <CardBody style={{display:'flex',flexDirection:'row'}}>
    <div className='mt-3'>
            {
                isLoggedIn && (user ? <Button color='danger' className='ms-3'onClick={ ()=>delteReport(report) } >Delete</Button> : '')
            }
           
        </div>
       <div style={{display:'flex',flexDirection:'column',margin:'25px'}}>
    <div style={{display:'flex',flexDirection:'row'}} > Title &nbsp;<h6> {report.title}</h6></div>
    <div style={{display:'flex',flexDirection:'row'}} > Name &nbsp;<h6> {report.user.name}</h6></div>
    <div style={{display:'flex',flexDirection:'row'}} > Email &nbsp;<h6> {report.user.email}</h6></div>
    <div style={{display:'flex',flexDirection:'row'}} > Contact &nbsp;<h6> {report.user.phonenumber}</h6></div>
    <div style={{display:'flex',flexDirection:'row'}} > About &nbsp;<CardText dangerouslySetInnerHTML={{__html:report.about}}></CardText></div>
        
       
    
    
        

        </div>
       

    </CardBody>

    </Card>

   
</Col>
    </Row>

    </>
  )
}

export default AdminRepP