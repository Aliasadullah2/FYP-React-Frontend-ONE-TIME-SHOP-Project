import React from 'react'
import { Container, Button, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from "../Assets/logo.png";
import "../Styles/ForgetStyle.css"

function ForgetPassjs() {
  return (
    <>
    <section className="wrapper">
            <Container className="container">
                <Col sm={{span: 8, offset: 2}} lg={{span: 6, offset: 3}} xl={{span: 4, offset: 4}} className=" text-center">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <form className=" rounded bg-white shadow p-5">
                    
                <h3 className="text-dark fw-bolder fs-4 mb-4">Forget Password</h3>
                <div className="fw-normal text-muted mb-4">
                    Enter your Email to reset Password.
                    {/* <a href="/" className="text-primary fw-bold text-decoration-none">Login</a> */}
                </div>

                

                <div className="form-floating mb-3">
                     <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                        <label for="floatingInput">Email address</label>
                </div>


                

                
                
                <Button type="submit" className="btn  submit_btn  my-4">Submit</Button>
                <Button type="submit" className="btn   submit_btn2   my-4 ms-3"><Link to="/sigin" >Cancel</Link></Button>
                
                </form>
                </Col>
            </Container>
        </section>
    </>
  )  
}

export default ForgetPassjs