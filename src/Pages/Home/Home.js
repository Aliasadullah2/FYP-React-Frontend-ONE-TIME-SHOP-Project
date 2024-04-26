import React from 'react'
import Layoutjs from '../../Components/Layouts/Layoutjs'
import { Container, Row, Col,Button } from "react-bootstrap";
import team1 from "../../Assets/team.jpg"
import team2 from "../../Assets/342709678_1884596825250213_7098063931518210070_n.jpg"
import Sectionjs1 from './Sectionjs1'
import "../../Styles/HomeStyle.css"
import Sectionjs2 from './Sectionjs2'
import Sectionjs3 from './Sectionjs3'
import Sectionjs4 from './Sectionjs4'
import Sectionjs5 from './Sectionjs5'
import Aboutpic from "../../Assets/software_engineer.svg"
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';
import s1 from "../../Assets/delivery_truck.svg"
import s2 from "../../Assets/smart_home.svg"
import s3 from "../../Assets/freelancer.svg"
import s4 from "../../Assets/season_change.svg"
import s5 from "../../Assets/invest.svg"
import s6 from "../../Assets/automobile_repair.svg"
import contactpic from "../../Assets/Contract_re_ves9.png"


function Home() {
  return (
    <>
    
    <Layoutjs>
    {/* Home Section */}
    {/* <Sectionjs1/> */}
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
    {/* About Section */}
    {/* <Sectionjs2/> */}
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

            
            
            
            </Container>
    </section>

    {/* Team Section */}
    {/* <Sectionjs3/> */}
    <section>
    <div className="team_wrapper  ">

    
<Container >
    <Row >
        <Col sm={12} className="text-center mb-5 ">
            <h3 >Our Team</h3>
        </Col>
    </Row>
    <Row >
    
        <Col md={4} sm={4} className=" mb-4 ">
            <Card className="rounded-3">
                <div className="team-img">
                    <img decoding="async" src={team1} className="img-fluid" alt="Team"/>
                </div>
                <div className="team-info pt-4 text-center">
                    <h5>Ali Asadullah</h5>
                    <p></p>
                    <ul className="social-network">
                    <li><a href="/"><i className="bi bi-facebook"></i></a></li>
                    <li><a href="/"><i className="bi bi-twitter-x"></i></a></li>
                    <li><a href="/"><i className="bi bi-google"></i></a></li>
                    </ul>
                </div>

            </Card>
        </Col>
        
        <Col md={4} sm={4} className=" mb-4 ">
            <Card className="rounded-3">
                <div className="team-img">
                    <img decoding="async" src={team2} className="img-fluid" alt="Team"/>
                </div>
                <div className="team-info pt-4 text-center">
                    <h5>Abdullah Nuhrio</h5>
                    <p></p>
                    <ul className="social-network">
                    <li><a href="/"><i className="bi bi-facebook"></i></a></li>
                    <li><a href="/"><i className="bi bi-twitter-x"></i></a></li>
                    <li><a href="/"><i className="bi bi-google"></i></a></li>
                    </ul>
                </div>

            </Card>
        </Col>
       

        
        
    </Row>

    
</Container>





</div>

    
    </section>

    {/* Features Section */}
    {/* <Sectionjs4/> */}
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

        
        
      </Container>
    </div>  
      
      
    </section>

    {/* Contact Section */}
    {/* <Sectionjs5/> */}
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



            
            </Container>
        </div>

    </section>

    </Layoutjs>
    
      
    </>
  )
}

export default Home