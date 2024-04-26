
import React, { useState } from 'react';
// import { Nav,Button ,Container,Navbar, } from 'react-bootstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
  } from 'reactstrap';
import { Link,  Outlet, useNavigate } from 'react-router-dom';
import "../Styles/AdminStyle.css"
import logo from "../Assets/logo4.png"
// import logo from "../../Assets/logo4.png"
import profileimage from "../Assets/profile.jpg"
import { useEffect } from 'react';
import { doLogout,getCurrentUserDetail,isLoggedIn } from '../Auth/AuthIndex';
// import { NavLink } from 'reactstrap';
// import { NavItem, NavLink } from 'reactstrap';

const Seller = () => {
    
    const [isSidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => {
      setSidebarActive(!isSidebarActive);
    };
  
    let navigate=useNavigate();

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  
      
    
  
  const [login, setLogin] = useState(false);
  const [userDto, setuserDto] = useState(undefined); // Provide a default value
  
  useEffect(() => {
    setLogin(isLoggedIn());
    setuserDto(getCurrentUserDetail())
  }, [login]);
  
  
    const logout=()=>{
      doLogout(()=>{
          //logout
          setLogin(false)
          navigate("/")
      })
      
    }
  
    return (
      <>
          <div className="wrappers" >
              
          
          <nav id="sidebar" className={`App ${isSidebarActive ? 'active' : ''}`}>
              
              
             
              
              <ul className="list-unstyled components" style={{marginTop:"120px"}}>
                  {/* <p>{
                    login && (
                       
                      <NavItem>
                        <NavLink >
                          { userDto.name}
                        </NavLink>
                      </NavItem>
                       
                    )
                  }</p> */}
                     
                 
                  
                  <li>
                      <Link to="SellerDropshipping"style={{fontSize:'16px'}} > <i class="bi bi-plus-circle" style={{fontSize:'14px'}}></i> Add Product</Link>
                  </li>
                  <li>
                      <Link to="SellerFreelances"style={{fontSize:'16px'}}> <i class="bi bi-shop" style={{fontSize:'14px'}}></i> My Product</Link>
                  </li>
                  <li>
                      <Link to="addvender"style={{fontSize:'16px'}}> <i class="bi bi-plus-circle" style={{fontSize:'14px'}}> </i>Add Vender</Link>
                  </li>
                  <li>
                      <Link to="myvender"style={{fontSize:'16px'}}><i class="bi bi-file-person"style={{fontSize:'14px'}}/> My Vender</Link>
                  </li>
                  {/* <li>
                      <Link to="adminuser">Admin User</Link>
                  </li>
                  <li>
                      <Link to="usermanage">User Managemant</Link>
                  </li>
                  <li>
                      <Link to="inventorymanage">Inventory Management</Link>
                  </li> */}
                 
                  
                  
  
                  
              
              </ul>
              
              {/* <ul className="list-unstyled CTAs"> 
                  <li>
                      <Link to="/" className="download" onClick={logout}>Logout</Link>
                  </li>
              </ul> */}
          </nav>
          
          <div className="content1 nav_wrapper ">
            <div className='nav_wrapperline'>
            <div ><img src={logo} style={{marginTop:'-80px',width:'350px',height:"150px"}} alt="Logo" /></div>

          <Navbar color='white' white expand='md' fixed='' className='px-5'>
        <NavbarBrand href="/mentor/buyer">Seller ONE TIME SHOP</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
            {/* <NavItem>
              <NavLink href="/components/">About</NavLink>
            </NavItem> */}
                  
                  {
                    login && (
                       <>
                       
                     
                      <UncontrolledDropdown nav inNavbar>
                        
              <DropdownToggle nav >
              <i class="bi bi-envelope-at"style={{fontSize:'14px'}}></i> &nbsp;
              { userDto.email } 
              <i class="bi bi-caret-down-fill"></i>
              </DropdownToggle>
              <DropdownMenu right >
              <DropdownItem>
                  <li>
                      <Link to="/mentor/buyer"> <i class="bi bi-currency-exchange"style={{fontSize:'14px'}}></i> Switch to Buyer</Link>
                  </li>
                  </DropdownItem>
                <DropdownItem>
                  <li>
                      <Link to={`sellerprofile-info/${userDto.id}`}><i class="bi bi-person-circle" style={{fontSize:'14px'}}></i> Profile</Link>
                  </li>
                  </DropdownItem>
               
                <DropdownItem>
                  <li>
                      <Link to="Settings"><i class="bi bi-gear" style={{fontSize:'14px'}}></i> Setting</Link>
                  </li>
                  </DropdownItem>
                
                <DropdownItem divider />
                <DropdownItem onClick={logout}> <i class="bi bi-box-arrow-left"style={{fontSize:'14px'}}></i> Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
                       </>
                    )
                  }

            {/* <NavItem className='px-5'>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Login
              </NavLink>
            </NavItem> */}
            
           

           
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
      </div>
               <div className="d-flex nav_btn mt-3 mb-3" style={{marginLeft:'250px'}}>
      <Button type="button" id="sidebarCollapse" className="white-btn my-btn" onClick={toggleSidebar}>
      <i class="bi bi-list"></i>
              </Button>
              </div>
         
              <div className="content-wrapper">
               <Outlet/>
            </div> 
         
          </div>
      
      </div>
      </>
    )
}

export default Seller