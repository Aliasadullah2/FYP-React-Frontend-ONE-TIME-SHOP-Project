import React from 'react'
import { Container, Row, Col,Card,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import s1 from "../../Assets/delivery_truck.svg"
import s2 from "../../Assets/smart_home.svg"
import s3 from "../../Assets/freelancer.svg"
import s4 from "../../Assets/season_change.svg"
import s5 from "../../Assets/invest.svg"
import s6 from "../../Assets/automobile_repair.svg"
function Sectionjs4() {
  return (
    <section>

    <div className="services_wrapper ">
      <Container >
        <Row >
          <Col sm={12} className=" text-center mb-5">
            <h3 className="">Features</h3>
          </Col>
        </Row>

        <Row >
          <Col ms={4} sm={4} className="col-md-4  col-sm-4 mb-4 ">
            <Card>
              <div className="icon-box">
                <img src={s1} alt="icon-box" />
              </div>
              <div>
                <h4>Drop Shipping</h4>
                <p>
                      Enjoy a hassle-free shopping experience with our Drop Shipping service. Explore a wide range of products and have them delivered directly to your doorstep, eliminating inventory concerns.
                </p>
              </div>
            </Card>
          </Col>

          <Col md={4} sm={4} className=" mb-4 ">
            <Card className="card">
              <div className="icon-box">
                <img src={s2} alt="icon-box" />
              </div>
              <div>
                <h4>Home Service</h4>
                <p>
                Your home's upkeep and improvements are our priority. We've curated a network of skilled professionals ready to handle everything from minor repairs to major renovations.
                </p>
              </div>
            </Card>
          </Col>

          <Col md={4} sm={4} className=" mb-4 ">
            <Card className="card">
              <div className="icon-box">
                <img src={s3} alt="icon-box" />
              </div>
              <div>
                <h4>Freelances</h4>
                <p>
                Connect with skilled professionals for various tasks, from design to development, through our Freelancer service. Get the job done efficiently with the right talent.
                </p>
              </div>
            </Card>
          </Col>

          <Col md={4} sm={4} className=" mb-4 ">
            <Card className="card">
              <div className="icon-box">
                <img src={s4} alt="icon-box" />
              </div>
              <div>
                <h4>24/7</h4>
                <p>
                We're here for you round the clock. Our 24/7 availability ensures you have access to support and services whenever you need them, even during emergencies.
                </p>
              </div>
            </Card>
          </Col>

          <Col md={4} sm={4} className=" mb-4 ">
            <Card className="card">
              <div className="icon-box">
                <img src={s5} alt="icon-box" />
              </div>
              <div>
                <h4>Invest Time</h4>
                <p>
                We value your time. Our services are designed to save you time, allowing you to invest it where it matters most – in what you love and cherish.
                  </p>
              </div>
            </Card>
          </Col>

          <Col md={4} sm={4} className=" mb-4 ">
            <Card className="card">
              <div className="icon-box">
                <img src={s6} alt="icon-box" />
              </div>
              <div>
                <h4>Home Mechanic</h4>
                <p>
                DIY enthusiasts, meet your match. Our Home Mechanic service connects you with skilled, affordable freelancers ready to bring your home projects to life.
                  </p>
              </div>
            </Card>
          </Col>
        </Row>

        <Button className="order_nowb"><Link to="/">Back to Home</Link></Button>
        
      </Container>
    </div>  
      
      
    </section>
  )
}

export default Sectionjs4