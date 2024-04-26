import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { changepassworduser } from '../Services/UserServices'
import { getCurrentUserDetail } from '../Auth/AuthIndex'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Settings() {
    
    // const [password,setPassword]=useState([])
    const [user,setUser]=useState([])
    useEffect(()=>{
      setUser(getCurrentUserDetail)
      // changepassworduser(user.id).then(data=>{
      //   setPassword(data)
      //   console.log(data)
      //   console.log(user)
      // }).catch(error=>{
      //   console.log(error)
      // })
    },[])
  return (
    <>
    <Link  className="btn btn-primary" to={`/mentor/passwordchange/`+user.id} style={{marginLeft:'230px'}} >Password Change</Link>
    </>
  )
}

export default Settings