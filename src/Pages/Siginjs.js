import React, { useEffect } from 'react'
import { Container, Button, Col } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import logo from "../Assets/logo.png";
import "../Styles/SignStyle.css"
import { useState } from 'react';
import {  toast } from 'react-toastify';
import { login } from '../Services/UserServices';
import { doLogin, getCurrentUserDetail } from '../Auth/AuthIndex';
import { useReducer } from 'react';

function Siginjs() {

   


    const [ignore,forceupadate]=useReducer(x=>x+1,0)
    const [logindata,setLoginData]=useState({
        username:'',
        password:''
       

    })
    const [user,setUser]=useState(undefined)
    const navigate=useNavigate();
   

    const handleChange=(event,props)=>{
        
        setLoginData({...logindata,[props]:event.target.value})
       
    }

    useEffect(()=>{
        setUser(getCurrentUserDetail())
        
        
    },[ignore])
    
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log(logindata);
      
        
        
    
            
      

    }


  return (
    <>
      <section className="wrapper">
            <Container className="container">
                <Col sm={{span: 8, offset: 2}} lg={{span: 6, offset: 3}} xl={{span: 4, offset: 4}} className=" offset-sm-2 offset-lg-3  offset-xl-4 text-center">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <form className=" rounded bg-white shadow p-5" onSubmit={handleFormSubmit}>
                <h3 className="text-dark fw-bolder fs-4 mb-4">Login In to OTS</h3>
                <div className="fw-normal text-muted mb-4">
                    New Here? <Link to="/signup" className="text-primary fw-bold text-decoration-none">Create an Account</Link>
                </div>

                <div className="form-floating mb-3">
                     <input type="email" 
                     className="form-control" 
                     id="username" 
                     placeholder="name@example.com"
                     value={logindata.username}
                     onChange={(e)=>handleChange(e,'username')}
                     />
                        <label htmlFor="username">Email address</label>
                </div>

                <div className="form-floating">
                    <input type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Password"
                    value={logindata.password}
                    onChange={(e)=>handleChange(e,'password')}
                    />
                     <label htmlFor="password">Password</label>
                </div>

                {/* <div className="mt-2 text-end">
                    <Link to="/forgetpassword" className="text-primary fw-bold text-decoration-none" >Forget Password </Link>
                </div> */}
                <Button type="submit" className="btn  submit_btn w-100 my-4">Login</Button>
                {/* <div className="text-center text-muted text-uppercase mb-3">or</div>

                <a href="/" className="btn btn-light login_with w-100 mb-3">
                    <img src={g} alt="" className="img-fluid me-3"/>Continue with Google</a>

                <a href="/" className="btn btn-light login_with w-100 mb-3">
                    <img src={f} alt="" className="img-fluid me-3"/>Continue with Facebook</a>

                <a href="/" className="btn btn-light login_with w-100 mb-3">
                    <img src={l} alt="" className="img-fluid me-3"/>Continue with LinkedIn</a> */}

                </form>
                </Col>
            </Container>
        </section>
    </>
  )
}

export default Siginjs