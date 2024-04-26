import React from 'react'
import { Container, Button, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from "../Assets/logo.png";
import "../Styles/SignStyle.css"

function SetupPassjs() {
  return (
    <>
        <section className="wrapper">
            <Container >
                <Col sm={{span: 8, offset: 2}} lg={{span: 6, offset: 3}} xl={{span: 4, offset: 4}} className="text-center">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <form className=" rounded bg-white shadow p-5">

                <h3 className="text-dark fw-bolder fs-4 mb-4">Create New Password</h3>
                <div className="fw-normal text-muted mb-4">
                    Already have reset password <Link to="/sigin" className="text-primary fw-bold text-decoration-none">Login</Link>
                </div>



                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                     <label for="floatingPassword">Password</label>
                </div>
                <span className="password-info mt-2">Use 8 or more Characters with a  mix of Letter, number & Symbols.</span>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" required/>
                     <label for="floatingConfirmPassword">Password</label>
                </div>
                
      
                

                <div class="form-check d-flex align-items-center">
                     <input class="form-check-input" type="checkbox" id="gridCheck" required/>
                    <label class="form-check-label ms-2" for="gridCheck" >
                    I Agree <Link to="/">Terms and Conditions</Link>.
                     </label>
                    </div>
                
                <Button type="submit" className="btn  submit_btn w-100 my-4">Submit</Button>
                
                </form>
                </Col>
            </Container>
        </section>
        
    </>
  )
}

export default SetupPassjs