import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, Col, Container, Row, Table } from 'reactstrap'

import { useState } from 'react'
import { getUserbyId } from '../Services/UserServices'
import AdminProfile from './AdminProfile'



function AdminProInfo() {
    const {id}=useParams()
    const [userDtoo,setUserDto]=useState([])
    useEffect(()=>{
        getUserbyId(id).then(data=>{
            console.log(data)
            setUserDto(data)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const userViewProfile=()=>{
        return(
            <Row style={{marginLeft:'90px',marginTop:'80px',marginBottom:'50px'}}>
            <Col >
               <AdminProfile userDtoo={userDtoo}/>
               
            </Col>
        </Row>
        )
    }

  return (
    <>
        {
            userDtoo ? userViewProfile():'Loading User Data...'
        }
       
    
    </>
  )
}

export default AdminProInfo