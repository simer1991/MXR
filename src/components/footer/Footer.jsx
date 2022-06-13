import React from 'react'
import './footer.css'
import logo from '../../assets/icons/footer/logo.png'
import {Col,Row,Container, NavLink} from 'react-bootstrap-v5'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
function Footer() {
  return (
    <div className='mxr__footer'>
       <Container>
            <div className='mxr__footer-top'>
        <Row>
            <Col lg={3} xs={12}>
              <img src={logo} alt="logo"/>
              <p>We build software that inspires people. We use transformational tools, such as AI, XR and IoT to provide businesses with the most innovative solutions.</p>
            </Col>
            <Col lg={3} xs={12}>
              <h6>IMPORTANT LINKS</h6>
              <NavLink>Mixed Reality</NavLink>
              <NavLink>Virtual Reality</NavLink>
              <NavLink>Augmented Reality</NavLink>
              <NavLink>Mobile Development</NavLink>
              <NavLink>Web Design and Development</NavLink>
              <NavLink>Research and Innovation</NavLink>
            </Col>
            <Col lg={3} xs={12}>
              <h6>CONTACT US</h6>
              <FaFacebookF size={18}/>
              <FaTwitter size={18}/>    
              <FaInstagram size={18}/>    
              <FaLinkedinIn size={18}/>  
              <div className='col-6 mxr__header-align-left'>
              <span class="mxr__header-phone">Phone: (+44) 20 7193 5407</span>
              <span class="mxr__header-email">team@mxr.ai</span>
              </div>
            </Col>
            <Col lg={3} xs={12}>
              <h6>SUBSCRIBE TO OUR NEWSLETTER</h6>
              <input type="email"  placeholder="Email Address*"/>
              <button>SUBSCRIBE</button>
            </Col>
        </Row>
       </div>
       <div className='mxr__footer-copyright'>
        <Row>
            <Col>Copyright 2022 MXR | All Rights Reserved | Privacy Policy | Terms and Conditions</Col>
        </Row>
       </div>
      </Container>
    </div>
  )
}

export default Footer
