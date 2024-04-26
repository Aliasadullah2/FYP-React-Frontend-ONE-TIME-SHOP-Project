import React from 'react'
import { Container, Row, Col,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import contactpic from "../../Assets/Contract_re_ves9.png"

function Sectionjs5() {
  return (
    <section >

      <div className="contact_wrapper" >
        <Container className="container">
            <Row className=" flex-lg-row flex-column-reverse ">
            <Col sm={12} className=" text-center mb-5 ">
                    <h3 className="text-black">Contact Us</h3>
                </Col>
            <Col lg={6} className=" text-center text-lg-start ">
            
                <form action="" className="mt-5">
                <div className="form-floating mb-5 mt-3">
                     <input type="text" className="form-control " id="floatingInputText" placeholder="Name"/>
                     <label htmlFor="floatingInputText">Name</label>
                </div>

                <div className="form-floating mb-5 mt-3">
                     <input type="text" className="form-control " id="floatingInputPhone" placeholder="92316338523"/>
                     <label htmlFor="floatingInputTextPhone">Phone Number</label>
                </div>

                <div className="form-floating mb-5 mt-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>


            
                <div className="form-floating mt-3">
                    <textarea className="form-control mt-3 mb-5" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} ></textarea>
                    <label htmlFor="floatingTextarea2">Message</label>
                </div>

                <Button className="order_now"><Link to="/">Send Message</Link></Button>

                </form>
                    
                </Col>
                <div className="col-lg-6 mb-4 mb-lg-0 ps-lg-4 text-center">
                    <img decoding="async" src={contactpic} className="img-fluid" alt="About Us"/>
                </div>

            </Row>



            <Button className="order_now"><Link to="/">Back to Home</Link></Button>
            </Container>
        </div>

    </section>
  )
}

export default Sectionjs5