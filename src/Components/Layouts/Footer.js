import React, {useState,useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Assets/logo-removebg-preview.png"
import { Link } from 'react-router-dom';
function Footer() {
  
  // Scroll State
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };
    
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  

  
  return (
    <>
    <footer className="footer-section"> 
        
    <Container >

    <div className="footer-cta py-5 ">
        <Row className="row">
            <Col sm={6} xl={4} className=" mb-30 ps-3">
                <div className="single-cta">
                <i className="bi bi-geo-alt-fill"></i>
                <div className="cta-text">
                <h4>Find Us</h4>
                <span>Ward No 3 Golarchi District Badin</span>
                </div>
                </div>
            </Col>

            <Col sm={6} xl={4} className=" mb-30">
                <div className="single-cta">
                <i className="bi bi-telephone-fill"></i>
                <div className="cta-text">
                <h4>Phone</h4>
                <span>+92316-3385523</span>
                </div>
                </div>
            </Col>

            <Col sm={6} xl={4} className=" mb-30">
                <div className="single-cta">
                <i className="bi bi-envelope-at-fill"></i>
                <div className="cta-text">
                <h4>Email</h4>
                <span>aliasadullah2@gmail.com</span>
                </div>
                </div>
            </Col>

        </Row>


    </div>

    <div className="footer-content py-5">
        <Row className="row">
            <Col lg={6} >
                <div className="footer-widget ">
                    <div className="footer-logo">
                        <a href="/"><img src={logo} className="img-fluid" alt="logo" /></a>
                    </div>
                    <div className="footer-text">
                        <p>
                        Explore the future of home solutions with us. Discover convenient drop shipping, reliable home services, and skilled freelancer home mechanics – all under one roof. Simplify your home journey with our platform.
                        </p>
                    </div>
                    <div className="footer-social-icon">
                        <span>FollowUs</span>
                        <Link to="/"><i className="bi bi-facebook fb-bg"></i></Link>
                        <Link to="/"><i className="bi bi-instagram insta-bg "></i></Link>
                        <Link to="/"><i className="bi bi-twitter-x x-bg "></i></Link>
                    </div>
                </div>
            </Col>

            <Col lg={6} >
                <div className="footer-widget ">
                   <div className="footer-widget-heading">
                    <h3>Quick Links</h3>
                   </div>
                   <ul>
                   <li><Link to="/">home</Link></li>
                   <li><Link to="/">home</Link></li>
                   <li><Link to="/">home</Link></li>
                   <li><Link to="/">home</Link></li>
                   <li><Link to="/">home</Link></li>
                   <li><Link to="/">home</Link></li>
                   <li><Link to="/">home</Link></li>
                   <li><Link to="/">home</Link></li>
                   <li><Link to="/">home</Link></li>
                   <li><Link to="/">home</Link></li>
                   </ul>
                </div>
            </Col>

           


        </Row>
    </div>

    </Container>

    <div className="copyright-area">
        <Container className="container">
            <Row className="row">
                <Col xl={12} lg={12}  className="text-center text-lg-center">
                    <div className="copyright-text">
                        <p>Copyright &copy; 2023, All Right Reserved <Link to="/">ONETIMESHOP</Link></p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </footer>


   {/* Sroll To Top */}
   {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i class="bi bi-arrow-up"></i>
        </div>
      )}

    
    </>
  )
}

export default Footer