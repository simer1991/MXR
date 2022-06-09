import React from 'react';
import './header.css';
import { Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap-v5';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import Logo from '../../assets/images/mxr_logo.png';
import { NavLink } from 'react-router-dom';
import { menuItems } from "../menuItems";

const Header = () => {
  return (
      <>
      <div id="wrapper" className="page-wrapper">
        <div class="mxr__header">
            <div className='mxr__header-top'>
                <Container>           
                <Row>
                   <div className='col-6 mxr__header-align-left'>
                        <span class="mxr__header-phone">Call Us Today! (+44) 20 7193 5407</span>
                        <span class="mxr__header-separator">|</span>
                        <span class="mxr__header-email">team@mxr.ai</span>
                    </div>
                   <div className='col-6 mxr__header-align-right'>
                       <FaFacebookF size={18}/>
                       <FaTwitter size={18}/>    
                       <FaInstagram size={18}/>    
                       <FaLinkedinIn size={18}/>    
                    </div>
                </Row>            
                </Container>
            </div>
            <div className='mxr__header-navbar'>                        
                {/* <div className='mxr__header-logo'>
                    <img src={Logo} alt='Meta Extended Reality' />
                </div> */}
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"><img src={Logo} className="mxr__header-logo" alt='Meta Extended Reality' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        {menuItems.map((menu, index) => {
                            return <NavLink className="nav-link" to="/">{menu}</NavLink>;
                            })}
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
            </div>
            </div>
        </div>
      </>
      
  )
}

export default Header
