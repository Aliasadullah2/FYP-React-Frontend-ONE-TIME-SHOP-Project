import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Aboutpic from "../../Assets/software_engineer.svg"
import { Link } from 'react-router-dom';
// import Home from './Home';
// import Header from '../../Components/Layouts/Header';
function Sectionjs2() {
  return (
    <section className="about_wrapper" >
      
    <Container>
            
            <Row className=" flex-lg-row  ">
            <Col sm={12} className="text-center mb-4 ">
                    <h3 className="text-black">About Us</h3>
                </Col>
            <Col lg={6} className=" text-center text-lg-start ">
                    <h3>Welcome to OTS About</h3>
                    <p>
                        At our core, we're your home solutions destination. We've streamlined the way you live, shop, 
                        and maintain your space. Our drop shipping service puts a world of products at your fingertips,
                         seamlessly delivering them to your doorstep, leaving you with a hassle-free shopping 
                         experience, minus the inventory concerns. Need your home serviced? We've got you covered
                          with a network of trusted professionals ready to tackle repairs, renovations, and 
                          improvements. And for those DIY enthusiasts, our freelance home mechanics are here to
                           turn your home projects into reality. Whether it's a simple fix or a grand renovation, 
                           they bring skill and affordability to the table. We're your one-stop hub for home 
                           convenience, making your life simpler and more efficient, one service at a time.</p>
                    
                </Col>
                <Col lg={6}  className=" mb-4 mb-lg-0 ps-lg-4 text-center">
                    <img decoding="async" src={Aboutpic} className="img-fluid" alt="About Us"/>
                </Col>

            </Row>

            
            <Button className="order_nowb"><Link to="/">Back to Home</Link></Button>
            
            </Container>
    </section>
  )
}

export default Sectionjs2