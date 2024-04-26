import React from 'react'
import { Container, Row, Col,Card,Button } from "react-bootstrap";
import team1 from "../../Assets/team.jpg"
import team2 from "../../Assets/342709678_1884596825250213_7098063931518210070_n.jpg"
import { Link } from 'react-router-dom';
// import { Button } from 'bootstrap';
function Sectionjs3() {
  return (
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
                    <h5>Abdullah Nuhrio </h5>
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

    <Button className="order_now"><Link to="/">Back to Home</Link></Button>
</Container>





</div>

    
    </section>
  )
}

export default Sectionjs3