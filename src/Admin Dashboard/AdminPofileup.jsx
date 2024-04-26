import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Container, Input, Label } from 'reactstrap'
import { getCurrentUserDetail } from '../Auth/AuthIndex'
import { updateUserById, uploadImageProfile } from '../Services/UserServices'

function AdminPofileup() {
    const {id}=useParams()
    const [image,setImage]=useState(null);
    const [myUser,setMyUser] = useState({
        password:'null'
    })
    const navigate=useNavigate();
        
        useEffect(() => {
            setMyUser(getCurrentUserDetail())
        }, [])
        


      useEffect(()=>{
       
        if(myUser){
            if(  myUser.id !== myUser.id){
                
                toast.error("This is not your Profile")
                navigate(`/user/admin/profile-info/${id}`);
                
                
            }
        }
    },[myUser])

    const handleChange=(event,props)=>{
        
        setMyUser({...myUser,
                    [props]:event.target.value,
                    
        })
       
    } 

    const updateProfile=(event)=>{
        event.preventDefault()
        console.log(myUser)
        updateUserById({...myUser },id).then(response=>{
          console.log(response)
          toast.success("Profile Updated Successfully")
           
          uploadImageProfile(  image,myUser.id).then(data=>{
            toast.success("Profile Imaged Added Successfully");
            
          }).catch(error=>{
            console.log(error)
            toast.error("Profile Imaged Error");
          })

           navigate(`/user/admin/profile-info/${id}`);

    
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
                <Button tag={Link} color='success' to={`/user/admin/profile-info/${id}`} className='m-3'> Back to Profile </Button><br></br>
                
                <form className=" rounded bg-white shadow p-5" onSubmit={updateProfile}>
                <h3 className="text-dark fw-bolder fs-4 mb-4">Update Buyer Profile </h3>

                <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="name" 
                     name='name'
                     placeholder="User Name" 
                     required
                      onChange={(event)=>handleChange(event,'name')}
                      value={myUser.name}
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
                      value={myUser.email}
                      
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
                      value={myUser.cnic}
                      
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
                      value={myUser.phonenumber}
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
                      value={myUser.address}
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
                      value={myUser.city}
                      //invalid={error.errors?.response?.data?.name ?true:false}
                     />
                    <label htmlFor="city"> City</label>
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

                <Button type="submit" color='warning' className="btn  submit_btn w-100 my-4">Update Product</Button>
                  
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

export default AdminPofileup