import React from 'react'
import userContext from './UserContext'
import { useState } from 'react'
import { useEffect } from 'react'
import { getCurrentUserDetail, isLoggedIn } from '../Auth/AuthIndex'
function UserProdvider({childern}) {
    
    const[user,setUser]=useState({
        data:{},
        login:false
    })

    useEffect(()=>{
        setUser({
            data:getCurrentUserDetail(),
            login:isLoggedIn()
        })
    },[])

    return (
    <>
     <userContext.Provider value={{user,setUser}}> 
        {
            childern
        }
    </userContext.Provider>
    </>
  )
}

export default UserProdvider