import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {  Col, Row } from 'reactstrap'

import { useState } from 'react'

import "../Styles/ProductStyle.css"

import { getUserbyId } from '../Services/UserServices'
import MySellerProfileInfo from './MySellerProfileInfo'

function SellerProfileInfo() {
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
            <Row style={{marginLeft:'190px',marginTop:'80px'}}>
            <Col >
               <MySellerProfileInfo userDtoo={userDtoo}/>
               
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

export default SellerProfileInfo