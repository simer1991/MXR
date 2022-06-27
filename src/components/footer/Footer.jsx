import React from 'react'
import './footer.css'
import logo from '../../assets/icons/footer/logo.png'
import { Col, Row, Container, Form, NavLink } from 'react-bootstrap-v5'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import emailjs from '@emailjs/browser'

const Footer = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send('service_gn1atii', 'template_cae5z8b', sendEmail, 'oamdoX8gpeRyb1_R6')
      .then(res => {
        console.log(res);
      }).catch(err => console.log(err));
    emailjs.send('service_gn1atii', 'template_g8n3ovx', sendEmail, 'oamdoX8gpeRyb1_R6')
      .then(res => {
        console.log(res);
      }).catch(err => console.log(err));
  }
  return (
    <div className='mxr__footer'>

      <div className='mxr__footer-top'>
        <Container>
          <Row>
            <Col lg={3} xs={12}>
              <img src={logo} alt="logo" />
              <p>We build software that inspires people. We use transformational tools, such as AI, XR and IoT to provide businesses with the most innovative solutions.</p>
            </Col>
            <Col lg={3} xs={12}>
              <h6>IMPORTANT LINKS</h6>

              <ul className='mxr__footer-links'>
                <li><Link to="/mr">Mixed Reality</Link></li>
                <li><Link to='/vr'>Virtual Reality</Link></li>
                <li><Link to="/AR">Augmented Reality</Link></li>
                <li><Link to="/mad">Mobile Development</Link></li>
                <li><Link to="/wdd">Web Design and Development</Link></li>
                <li><Link to="/ri">Research and Innovation</Link></li>
              </ul>

            </Col>
            <Col lg={3} xs={12}>
              <h6>CONTACT US</h6>
              <div class="mxr_footer-social-icons d-flex">
                <span><FaFacebookF size={17} /></span>
                <span><FaTwitter size={17} /></span>
                <span><FaInstagram size={17} /></span>
                <span><FaLinkedinIn size={17} /></span>
              </div>
              <div className='mxr__footer-contact'>
                <p class="mxr__header-phone">Phone: (+44) 20 7193 5407</p>
                <p class="mxr__header-email">Email: team@mxr.ai</p>
              </div>
            </Col>
            <Col lg={3} xs={12}>
              <h6>SUBSCRIBE TO OUR NEWSLETTER</h6>
              <div className='mxr__footer-subscribe'>
                <Form >
                  <input type="email" className="form-control" placeholder="Email Address*" />
                  <button className='mxr__section-btn' onSubscribe={sendEmail} >Subscribe</button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='mxr__footer-copyright'>
        <Container>
          <Row>
            <Col>
              <p>Copyright {new Date().getFullYear()} MXR | All Rights Reserved |<NavLink>Privacy Policy</NavLink>  | <NavLink>Terms and Conditions</NavLink></p></Col>
          </Row>
        </Container>
      </div>

    </div>
  )
}

export default Footer
