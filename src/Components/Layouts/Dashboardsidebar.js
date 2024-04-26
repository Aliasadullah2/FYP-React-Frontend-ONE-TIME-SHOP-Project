import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo-removebg-preview.png"

import { Button } from 'react-bootstrap';
function Dashboardsidebar() {
    const [isSidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  return (
    <>
    <div className="wrappers" >

    <nav id="sidebar" className={`App ${isSidebarActive ? 'active' : ''}`}>
			<div className="sidebar-header">
			<Link to="/" className="logo"> <img src={logo} className="img-fluid"  alt="Logo"></img> </Link>
			</div>
			
			
			<ul className="list-unstyled components">
				<p>ONE TIME SHOP <i class="bi bi-cart-fill"></i></p>
				
				
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/">About</Link>
				</li>
				
				<li>
					<Link to="/">Services</Link>
				</li>
				<li>
					<Link to="/">Contact Us</Link>
				</li>
			</ul>
			
			<ul className="list-unstyled CTAs"> 
				<li>
					<Link to="/" className="download">Logout</Link>
				</li>
			</ul>
		</nav>


        <Button type="button" id="sidebarCollapse" className="white-btn my-btn" onClick={toggleSidebar}>
	<i class="bi bi-list"></i>
			</Button>
    </div>


    </>
  )
}

export default Dashboardsidebar