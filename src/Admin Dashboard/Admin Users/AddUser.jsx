import React from 'react'
import { Container, Button} from "react-bootstrap";

import { useEffect } from 'react';
import { useState } from 'react';

import {  toast } from 'react-toastify';


// import Product from '../Buyer Pages/Product';

import { useNavigate } from 'react-router-dom';
import { register, registeradmin } from '../../Services/UserServices';



function AddUser() {
    const navigate=useNavigate();
    const [data,setData]=useState({
        name:'',
        email:'',
        password:'',
        phonenumber:'',
       
    })

    const[error,setError]=useState({
        errors:{},
        isError:false
    })

   
    
    const handleChange=(event,props)=>{
        
        setData({...data,[props]:event.target.value})
       
    }

    // useEffect(()=>{
    //     console.log(data);
    // },[data])

    // const submitFrom=(event)=>{
    //     event.preventDefault()
    //     onSubmit={submitFrom}
        
    // }

    //submit the from
    const submitFrom=(event)=>{
        event.preventDefault();

        if(error.isError){
            toast.error("User is Already is Registered");
            setError({ ...error,isError:false})
            return;
        }
        
        
        if(data.name.trim()===""){
            toast.warning("Fill the User Name")
            return;
          }
  
          if(data.email.trim()===""){
            toast.warning("Fill the User Eamil")
            return;
          }
  
          if(data.password.trim()===""){
            toast.warning("Fill the User Password")
            return;
          }
          if(data.phonenumber.trim()===""){
            toast.warning("Fill the User Phone Number")
            return;
          }

        //data validate
        
        //api call server  for sending data
        // BASE_URL/api/v1/auth/register
        register(data).then((resp)=>{
            console.log(resp);
            console.log("Success Log");
            toast.success("Normal User Add Successfully User Id!!"+resp.id);
            setData({
                name:'',
                email:'',
                password:'',
                
            })
            // navigate('/Sigin')
        }).catch((error)=>{
            
            console.log(error)
            console.log("error log")
            setError({
                errors:error,
                isError:true
            })
          

        });

    };

    const adminSubmitFrom=(event)=>{
        event.preventDefault();

        if(error.isError){
            toast.error("User is Already is Registered");
            setError({ ...error,isError:false})
            return;
        }
        
        
        if(data.name.trim()===""){
            toast.warning("Fill the User Name")
            return;
          }
  
          if(data.email.trim()===""){
            toast.warning("Fill the User Email")
            return;
          }
  
          if(data.password.trim()===""){
            toast.warning("Fill the User Password")
            return;
          }
          if(data.phonenumber.trim()===""){
            toast.warning("Fill the User Phone Number")
            return;
          }

        //data validate
        
        //api call server  for sending data
        // BASE_URL/api/v1/auth/register
        registeradmin(data).then((resp)=>{
            console.log(resp);
            console.log("Success Log");
            toast.success("Admin User Add Successfully User Id!!"+resp.id);
            setData({
                name:'',
                email:'',
                password:'',
                phonenumber:'',
                
            })
            // navigate('/Sigin')
        }).catch((error)=>{
            
            console.log(error)
            console.log("error log")
            setError({
                errors:error,
                isError:true
            })
          

        });

    };

  
   
  return (
    <>
        <Container  style={{marginLeft:'150px',marginTop:'80px',width:'1000px'}} >
                
                <form className=" rounded bg-white shadow p-5" onSubmit={submitFrom} style={{marginTop:'-80px',marginLeft:"140px"} }>
                <h3 className="text-dark fw-bolder fs-4 mb-4">Add Normal User </h3>

                <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="name" 
                     name='name'
                     placeholder="User Name" 
                     required
                      onChange={(e)=>handleChange(e,'name')}
                      value={data.name}
                      
                     />
                    <label htmlFor="name">User Name</label>
                </div>
                    

                    <div className="form-floating mb-3">
                     <input 
                     type="email" 
                     className="form-control name" 
                     id="email" 
                     name='email'
                     placeholder="User Email" 
                     required
                      onChange={(e)=>handleChange(e,'email')}
                      value={data.email}
                     
                     />
                    <label htmlFor="email">User email</label>
                </div>
                    <div className="form-floating mb-3">
                     <input 
                     type="password" 
                     className="form-control name" 
                     id="password" 
                     name='password'
                     placeholder="User Password " 
                     required
                      onChange={(e)=>handleChange(e,'password')}
                      value={data.password}
                     
                     />
                    <label htmlFor="password"> User Password</label>
                </div>
                    <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="phonenumber" 
                     name='phonenumber'
                     placeholder="User Phone Number " 
                     required
                      onChange={(e)=>handleChange(e,'phonenumber')}
                      value={data.phonenumber}
                     
                     />
                    <label htmlFor="phonenumber"> User Phone Number</label>
                </div>
                    




                  
                    {/* {JSON.stringify(data)} */}

                <Button type="submit" className="btn  submit_btn w-100 my-4">Add Normal User</Button>
                  
                </form>

                <form className=" rounded bg-white shadow p-5" onSubmit={adminSubmitFrom} style={{marginTop:'-80px',marginLeft:"140px"} }>
                <h3 className="text-dark fw-bolder fs-4 mb-4">Add Admin User </h3>

                <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="name" 
                     name='name'
                     placeholder="User Name" 
                     required
                      onChange={(e)=>handleChange(e,'name')}
                      value={data.name}
                      
                     />
                    <label htmlFor="name">User Name</label>
                </div>
                    

                    <div className="form-floating mb-3">
                     <input 
                     type="email" 
                     className="form-control name" 
                     id="email" 
                     name='email'
                     placeholder="User Email" 
                     required
                      onChange={(e)=>handleChange(e,'email')}
                      value={data.email}
                     
                     />
                    <label htmlFor="email">User email</label>
                </div>
                    <div className="form-floating mb-3">
                     <input 
                     type="password" 
                     className="form-control name" 
                     id="password" 
                     name='password'
                     placeholder="User Password " 
                     required
                      onChange={(e)=>handleChange(e,'password')}
                      value={data.password}
                     
                     />
                    <label htmlFor="password"> User Password</label>
                </div>
                    <div className="form-floating mb-3">
                     <input 
                     type="text" 
                     className="form-control name" 
                     id="phonenumber" 
                     name='phonenumber'
                     placeholder="User Phone Number " 
                     required
                      onChange={(e)=>handleChange(e,'phonenumber')}
                      value={data.phonenumber}
                     
                     />
                    <label htmlFor="phonenumber"> User Phone Number</label>
                </div>
                    




                  
                    {/* {JSON.stringify(data)} */}

                <Button type="submit" className="btn  submit_btn w-100 my-4">Add Admin User</Button>
                  
                </form>
              
                
                
            </Container>
    </>
  )
}

export default AddUser