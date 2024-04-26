import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, Col, Container, Row, Table } from 'reactstrap'
import { getUserbyId } from '../Services/UserServices'
import { useState } from 'react'

import "../Styles/ProductStyle.css"
import MyProfileinfo from '../Components/Layouts/MyProfileinfo'

function ProfileInfo() {
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
               <MyProfileinfo userDtoo={userDtoo}/>
               
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

export default ProfileInfo