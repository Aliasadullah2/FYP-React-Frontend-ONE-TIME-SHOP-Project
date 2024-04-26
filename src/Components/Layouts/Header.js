import React, { useState } from "react";
import {Container , Navbar , Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo4.png"
import "../../Styles/HeaderStyle.css"
// import { useEffect } from "react";
// import { getCurrentUserDetail, isLoggedIn } from "../../Auth/AuthIndex";


  

function Header() {

  const [nav, setNav] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  
  return (
    <header>
    <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
      <Container>
        <Navbar.Brand href="#home">

        {/* style={{width: "27%"}} */}

          <Link to="/" className="logo"> <img src={logo} className="img-fluid"  alt="Logo"></img> </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/about" >About</Nav.Link>
            <Nav.Link as={Link} to="/team" >Team</Nav.Link>
            <Nav.Link as={Link} to="/features" >Features</Nav.Link>
            <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header