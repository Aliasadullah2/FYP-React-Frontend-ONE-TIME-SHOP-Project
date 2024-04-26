import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {   Card, CardBody, CardText,  Row, Col, Button } from 'reactstrap'

import { getCurrentUserDetail, isLoggedIn } from '../Auth/AuthIndex';
import { useEffect } from 'react';
import { useState } from 'react';

import { toast } from 'react-toastify';
import { deleteReportsuser } from '../Services/Reports';




function ReportPage({report={ id:-1, name:"Vender Name",title:"Vender Title",about:"Vender About",price:"Vender Per hour/Price",phonenumber:"Vender Phone Number" } } ) {
 
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
         navigate('/mentor/buyer/BuyerDropshipping ');
        
          
            
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
                isLoggedIn && (user && user.id === report.user.id ? <Button color='danger' className='ms-3'onClick={ ()=>delteReport(report) } >Delete</Button> : '')
            }
           
        </div>
       <div style={{display:'flex',flexDirection:'column',margin:'25px'}}>
    <div style={{display:'flex',flexDirection:'row'}} > Title &nbsp;<h6> {report.title}</h6></div>
    <div style={{display:'flex',flexDirection:'row'}} > About &nbsp;<CardText dangerouslySetInnerHTML={{__html:report.about}}></CardText></div>
        
       
    
    
        

        </div>
       

    </CardBody>

    </Card>

   
</Col>
    </Row>

    </>
  )
}

export default ReportPage