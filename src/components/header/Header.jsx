import React from 'react';
import './header.css';
import { Container, Nav, Navbar, Row } from 'react-bootstrap-v5';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import Logo from '../../assets/images/mxr_logo.png';
import { menuItems } from "../../menuItems"; 
import MenuItems from "./MenuItems";

const Header = () => {
  return (
      <>
      <div id="wrapper" className="page-wrapper">
        <div className="mxr__header">
            <div className='mxr__header-top'>
                <Container>           
                <Row>
                   <div className='col-md-6 col-sm-12 mxr__header-align-left'>
                        <span class="mxr__header-phone">Call Us Today! (+44) 20 7193 5407</span>
                        <span class="mxr__header-separator">|</span>
                        <span class="mxr__header-email">team@mxr.ai</span>
                    </div>
                   <div className='col-md-6 col-sm-12 mxr__header-align-right'>
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
                            const depthLevel = 0;
                                return <MenuItems items={menu} key={index} depthLevel={depthLevel} />; 
                            })}
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
