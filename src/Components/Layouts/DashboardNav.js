import React from 'react'
import "../../Styles/AdminStyle.css"
import { Nav ,Container,Navbar} from 'react-bootstrap';

function DashboardNav() {
  return (
    <>

        <div className="wrappers" >

            
		<div className="content nav_wrapper ">
	
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
     <Container>
   <Navbar.Brand href="#home">OTS</Navbar.Brand>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="ms-auto">
   <Nav.Link href="#features">Features</Nav.Link>
   <Nav.Link href="#pricing">Pricing</Nav.Link>
   
 </Nav>
 
</Navbar.Collapse>
</Container>
</Navbar>
    



   
</div>
        </div>
        
    </>
  )
}

export default DashboardNav