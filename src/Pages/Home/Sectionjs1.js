import React from 'react'
import { Container, Row, Col,Button } from "react-bootstrap";

import { Link } from "react-router-dom";
// import Header from '../../Components/Layouts/Header';

function Sectionjs1() {
  return (
    <section className="home_section">
      
        <div className="container-fluid px-0 top-banner mt-3 ">
      <Container>
        <Row> 
        <Col lg={5} md={6} >
        <h1>Good Time choices are good investments.</h1>
            <p>
            Experience a one-stop solution for your home needs. Our platform offers convenient drop shipping for a vast product selection, connects you with trusted home service professionals for repairs and improvements, and provides access to skilled freelancer home mechanics who can bring your DIY projects to life. Simplify your home life with us.
            </p>
            <div className="mt-4">
              <Button className="order_now"><Link to="/signup">SignUp</Link></Button>
              <Button   className="order_now ms-lg-4 mt-lg-0 mt-4"><Link to="/sigin">SigIn</Link></Button>
            </div>
        </Col>

        </Row>
      </Container>

      </div>
      
    </section>
  )
}


export default Sectionjs1
