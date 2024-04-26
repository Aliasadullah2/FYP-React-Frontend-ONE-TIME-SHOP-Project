import React from 'react'
import MyProduct from '../Buyer Pages/MyProduct'
import { getCurrentUserDetail, isLoggedIn } from '../Auth/AuthIndex';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { loadAllProductsbyUser } from '../Services/Product';

function SellerFree() {
  const [user,setUser]=useState(undefined)
  const [myProduct,setMyProduct] = useState([]);
  const [login,setLogin] = useState([]);
  useEffect(() => {
    setUser(getCurrentUserDetail())
    setLogin(isLoggedIn())
  
    loadAllProductsbyUser(getCurrentUserDetail().id).then(data=>{
      setMyProduct([...data])
      console.log(data)
    }).catch(error=>{
      console.log(error)
      toast.error()
    })

  }, [])
  
  return (
    <section style={{marginLeft:'160px',marginTop:'80px'}} >
    <h2 className='mt-3'>My Products ({myProduct.length})</h2>
     <div style={{display:'flex',flexWrap:'wrap',margin:'0px',justifyContent:'center'}}>
     {
       myProduct.map((productDto,index)=>{
         return(
           <MyProduct product={productDto} key={index} />
         )
       })
     }
</div>
 </section>
  )
}

export default SellerFree