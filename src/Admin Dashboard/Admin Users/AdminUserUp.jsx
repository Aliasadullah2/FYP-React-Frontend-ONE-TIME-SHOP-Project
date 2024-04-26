import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Container, Input, Label } from 'reactstrap'
import { loadAllUsers, loadUserbyid, updateUserById, uploadImageProfile } from '../../Services/UserServices'
import { getCurrentUserDetail } from '../../Auth/AuthIndex'
import { BASE_URL } from '../../Services/Helper'

function AdminUserUp() {
    const {userId}=useParams()
    const [image,setImage]=useState(null);
    const [user,setUser]=useState({
        name:''

    });
    const [myUser,setMyUser] = useState({
        password:'null'
    })

    const navigate=useNavigate();
        
        useEffect(() => {
            setMyUser(getCurrentUserDetail())
            
            loadUserbyid(userId).then(data=>{
                setUser({...data,userId})
                console.log(data)
              }).catch(error=>{
                console.log(error)
                toast.error("Error in Loading User")
              })

        }, [])
        



    const handleChange=(event,props)=>{
        
        setUser({...user,
                    [props]:event.target.value,
                    
        })
       
    } 

    const updateProfile=(event)=>{
        event.preventDefault()
        console.log(user)

        updateUserById({...user },userId).then(response=>{
          console.log(response)
          toast.success("Profile Updated Successfully")
          
          uploadImageProfile(  image,user.id).then(data=>{
            toast.success("Profile Imaged Added Successfully");
            
          }).catch(error=>{
            console.log(error)
            toast.error("Profile Imaged Error");
          })
    
           navigate(`/user/admin/allUserList`);
            
    
        }).catch(error=>{
          console.log(error)
          toast.error("Update Sever Error")
        })
      }

      const handleFileChange=(event)=>{
        console.log(event.target.files[0])
        setImage(event.target.files[0])
    }

    const updateUserprofile=()=>{
        return(
            <Container  >
                <Button tag={Link} color='success' to={`/user/admin/allUserList`} className='m-3'> Back to Admin Panel</Button><br></br>
                <Link  className="btn btn-primary m-3" tag={Link} to={`/user/userpasswordchange/`+user.id}  > User Password Change</Link>
                <form className=" rounded bg-white shadow p-5" onSubmit={updateProfile}>
                <h3 className="text-dark fw-bolder fs-4 mb-4">Update User Profile {userId}</h3>
                <Container className='text-center'>
                <img src={BASE_URL+`/users/user/image/`+user.userPic} alt="Profile " className='img-fluid my-3 rounded-3' style={{maxWidth:'250px',maxHeight:'250px'}}/>
                </Container>
                <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="name" 
                     name='name'
                     placeholder="User Name" 
                     required
                      onChange={(event)=>handleChange(event,'name')}
                      value={user.name}
                      //invalid={error.errors?.response?.data?.name ?true:false}
                     />
                    <label htmlFor="name"> Name</label>
                </div>
                   

                    <div className="form-floating mb-3">
                     <input 
                     type="email" 
                     className="form-control name" 
                     id="email" 
                     name='email'
                     placeholder="User Email" 
                     required
                      onChange={(event)=>handleChange(event,'email')}
                      value={user.email}
                      
                     />
                    <label htmlFor="email"> Email</label>
                </div>

                    {/* <div className="form-floating mb-3">
                     <input 
                     type="password" 
                     className="form-control name" 
                     id="password" 
                     name='password'
                     placeholder="User password" 
                     required
                      onChange={(event)=>handleChange(event,'password')}
                      value={myUser.password}
                      
                     />
                    <label htmlFor="password"> Password</label>
                </div> */}

                    <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="cnic" 
                     name='cnic'
                     placeholder="User ID Card" 
                     required
                      onChange={(event)=>handleChange(event,'cnic')}
                      value={user.cnic}
                      
                     />
                    <label htmlFor="cnic"> ID Card</label>
                </div>

                <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="phonenumber" 
                     name='phonenumber'
                     placeholder="Phone Number " 
                     required
                      onChange={(event)=>handleChange(event,'phonenumber')}
                      value={user.phonenumber}
                      //invalid={error.errors?.response?.data?.name ?true:false}
                     />
                    <label htmlFor="phonenumber"> Phone Number</label>
                </div>

                <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="address" 
                     name='address'
                     placeholder="User Address" 
                     required
                      onChange={(event)=>handleChange(event,'address')}
                      value={user.address}
                      //invalid={error.errors?.response?.data?.name ?true:false}
                     />
                    <label htmlFor="address"> Address</label>
                </div>

                <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="city" 
                     name='city'
                     placeholder="User city" 
                     required
                      onChange={(event)=>handleChange(event,'city')}
                      value={user.city}
                      //invalid={error.errors?.response?.data?.name ?true:false}
                     />
                    <label htmlFor="city"> City</label>
                </div>
                <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="shopName" 
                     name='shopName'
                     placeholder="Shop Name" 
                     required
                      onChange={(event)=>handleChange(event,'shopName')}
                      value={user.shopName}
                      //invalid={error.errors?.response?.data?.name ?true:false}
                     />
                    <label htmlFor="shopName"> Shop Name</label>
                </div>
                <div>
                      <Label for='image' style={{paddingRight:"800px"}} >Profile Image</Label>
                      <Input 
                      className='mb-3'
                      type='file'
                      onChange={handleFileChange}
                      multiple
                      accept="image/jpeg"


                      />

                    </div>
                    



                   
                    {/* {JSON.stringify(myUser)}    */}

                <Button type="submit" color='warning' className="btn  submit_btn w-100 my-4">Update User Profile</Button>
                  
                </form>
                
            </Container>
            
        )
    }


  return (
    <>
        {myUser && updateUserprofile()}
    </>
  )
}

export default AdminUserUp