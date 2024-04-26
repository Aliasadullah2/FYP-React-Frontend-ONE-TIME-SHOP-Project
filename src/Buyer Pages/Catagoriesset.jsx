import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import CategorySide from './CategorySide'
import { loadAllProductByCategory } from '../Services/Product'
import { toast } from 'react-toastify'
import Product from './Product'


function Catagoriesset() {
    
    const [products,setProducts]=useState([])

    const {id}=useParams()

    useEffect(()=>{
        console.log(id)
        loadAllProductByCategory(id).then(data=>{
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
    <CategorySide/>
    </div>
    </Col>
    <Col md={8}>
        <div style={{marginTop:'50px'}}>
        <h3 > Product Count ({products.length})</h3>
        <div style={{display:'flex',flexWrap:'wrap',margin:'0px',justifyContent:'center'}}>

        {
            products && products.map((product,index)=>{
                return(
                    <Product key={index} product={product}/>
                    )
                })
            }
        {
            products.length<=0 ? <h1>Not Product in this Category</h1> :""
        }
        </div>
        </div>
    </Col>
   
    
  </Row>
  </div>
  )
}

export default Catagoriesset