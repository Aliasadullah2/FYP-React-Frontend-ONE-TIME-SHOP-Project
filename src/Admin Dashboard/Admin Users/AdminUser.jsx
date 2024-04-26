import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {   Card, CardBody, CardText,  Row, Col, Button, Table } from 'reactstrap'


import { useEffect } from 'react';
import { useState } from 'react';

import { toast } from 'react-toastify';
import { doLogin, doLogout, getCurrentUserDetail, isLoggedIn } from '../../Auth/AuthIndex';
import { deleteuser } from '../../Services/UserServices';



function AdminUser({user={ id:-1, name:"User Name",title:"User Title",about:"User About",price:"User Per hour/Price",phonenumber:"User Phone Number" } } ) {
 
    const [myuser,setMyUser]=useState(null);
    const [login,setLogin] = useState(null);
  //   const navigate=useNavigate();
  // const [myVender,setMyVender] = useState([]);
    useEffect(()=>{
        setMyUser(getCurrentUserDetail())
        setLogin(isLoggedIn())
       

    },[])

   


    function delteUserbyAdmin(user){
        deleteuser(user.id).then(resp=>{
          console.log(resp)
          
          toast.success("User Deleted Successfully")
        
          
            
        }).catch(error=>{
          console.log(error)
          toast.error("Server Error to Delete User")
        })
      }

  return (
    
    <>
    <Table className='table'>
        <thead>
            <tr>
                <th scope='col'>Name</th>
                <th scope='col' colSpan={2}>Email</th>
                <th scope='col'>Phone Number</th>
                <th scope='col'>Roles</th>
                <th scope='col' colSpan={2}>Action</th>
            </tr>
        </thead>
        <tbody>
                <tr>
                    
                    <td>{user.name}</td>

                <td colSpan={2}>{user.email}</td>
                <td>{user.phonenumber}</td>
                <td>{user.roles?.map((roles)=>{
                            return(
                                <span key={roles.id}>{roles.name}</span>
                            )
                        })}</td>
                    <td colSpan={2}>
                    {
                 (myuser && myuser.id === myuser.id ? <Button color='danger' className='ms-3'onClick={ ()=>delteUserbyAdmin(user) } >Delete</Button> : '')
            }
            {
                 (myuser && myuser.id === myuser.id ? <Button tag={Link} to={`/user/updateUser/${user.id}`} color='warning' className='ms-3'  >Update</Button> : '')
            }
                    </td>
                </tr>
        </tbody>
       
        
       
        
    </Table>
    

    </>
  )
}

export default AdminUser