import React from 'react'


import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';



import AdminVenPP from './AdminVenPP';
import { getCurrentUserDetail, isLoggedIn } from '../../Auth/AuthIndex';
import { loadAllVendersbyUser } from '../../Services/Vender';

function AdminVenP() {
  const [user,setUser]=useState(undefined)
  const [myVender,setMyVender] = useState([]);
  const [login,setLogin] = useState([]);
  useEffect(() => {
    setUser(getCurrentUserDetail())
    setLogin(isLoggedIn())
  
    loadAllVendersbyUser(getCurrentUserDetail().id).then(data=>{
      setMyVender([...data])
      console.log(data)
    }).catch(error=>{
      console.log(error)
      toast.error()
    })

  }, [])
  
  return (
    <div style={{marginLeft:'160px'}}>
    <h2 className='mt-3'>My Vender ({myVender.length})</h2>
     {
       myVender.map((venderDto,index)=>{
         return(
           <AdminVenPP vender={venderDto} key={index} />
         )
       })
     }
 </div>
  )
}

export default AdminVenP