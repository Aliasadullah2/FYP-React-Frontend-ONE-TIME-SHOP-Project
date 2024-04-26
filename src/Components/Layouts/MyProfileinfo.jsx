import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardFooter, Container, Input, Label, Table } from 'reactstrap'
import profileImage from "../../Assets/profile.jpg"
import { getCurrentUserDetail, isLoggedIn } from '../../Auth/AuthIndex'
import { Link, useParams } from 'react-router-dom'
import { BASE_URL } from '../../Services/Helper'
import { uploadImageProfile } from '../../Services/UserServices'
import { toast } from 'react-toastify'
const MyProfileinfo = ({userDtoo}) => {

    const [currentUser,setCurrentUser]=useState(null)
    const [login,setlogin]=useState(null)
    
    const {id}=useParams()
    useEffect(()=>{
        setCurrentUser(getCurrentUserDetail())
        setlogin(isLoggedIn())
    },[])
    

  return (
    
    <Card style={{marginLeft:'220px',marginTop:'-90px'}} >
                <CardBody>
                <h4 className='text-uppercase '>Welcome to Your Profile {userDtoo.name} </h4>
                <Container className='text-center'>
                    <img src={BASE_URL+`/users/user/image/`+userDtoo.userPic} alt="Profile " className='img-fluid my-3 rounded-3' style={{maxWidth:'250px',maxHeight:'250px'}}/>
                    
                </Container>
                <Table  responsive
                        striped>
                    <thead>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            { userDtoo.name}
                        </td>
                         <td>

                        </td>
                        <td>
                            
                        </td>
                        <td>
                            Email
                        </td>
                        <td>
                            { userDtoo.email}
                        </td>
                        <td>
                            
                            </td>

                        </tr>
                        
                        
                    <tr>
                        <td>
                            Phone Number
                        </td>
                        <td>
                            { userDtoo.phonenumber}
                        </td>
                        <td>
                            
                            </td>
                        <td>
                            
                        </td>
                        
                        <td>
                            Identity Card
                        </td>
                        <td>
                            { userDtoo.cnic}
                        </td>
                        <td>
                            
                            </td>
                        </tr>
                        
                        
                    <tr>
                        <td>
                            City Name
                        </td>
                        <td>
                            { userDtoo.city}
                        </td>
                        <td>
                            
                        </td>
                        </tr>
                    <tr >
                        <td>
                        Address
                        </td>
                        <td colSpan={4} >
                            { userDtoo.address}
                        </td>
                        
                        
                        </tr>
                        <tr>
                            <td>Role</td>
                            <td></td>
                            
                            <td >{userDtoo.roles?.map((roles)=>{
                            return(
                                <span key={roles.id}>{roles.name}</span>
                            )
                        })}</td>
                            <td></td>
                            </tr>
                        
                    
                    </thead>
                </Table>
                {
                    currentUser ? (currentUser.id===userDtoo.id)?(<CardFooter>
                        <Button tag={Link} to={`/mentor/myprofile-update/${userDtoo.id}`} color='warning'>Update Profile</Button>
                    </CardFooter> ):'':''
                }
                </CardBody>
               </Card>  
    
  )
}

export default MyProfileinfo