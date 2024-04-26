import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'reactstrap'


import { toast } from 'react-toastify'

import {  loadAllVenderByCategory, loadAllVendersByCategory } from '../Services/Vender'
import VanderPage from '../Buyer Pages/VanderPage'
import VanderSideCat from './VanderSideCat'


function VenderCat() {
    
    const [products,setProducts]=useState([])

    const {id}=useParams()

    useEffect(()=>{
        console.log(id)
        loadAllVenderByCategory(id).then(data=>{
        setProducts([...data])
        console.log(data)
        }).catch(error=>{
            console.log(error)
            toast.error("error in Loading")
        })
    },[id])
  return (
    <div className='p-5  ' >
    <Row>
    <Col md={3} >
    <div style={{marginTop:'50px'}}>
    <VanderSideCat/>
    </div>
    </Col>
    <Col md={8}>
        <div style={{marginTop:'50px'}}>
        <h3 > Vender Count ({products.length})</h3>
        <div style={{display:'flex',flexWrap:'wrap',margin:'0px',justifyContent:'center'}}>

        {
            products && products.map((vander,index)=>{
                return(
                    <VanderPage key={index} vander={vander}/>
                    )
                })
            }
        {
            products.length<=0 ? <h1>Not Vender in this Category</h1> :""
        }
        </div>
        </div>
    </Col>
   
    
  </Row>
  </div>
  )
}

export default VenderCat