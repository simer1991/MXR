import React from 'react'
import './footer.css'
import logo from '../../assets/icons/footer/logo.png'
import { Col, Row, Container, Form, } from 'react-bootstrap-v5'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom';

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
    <div className='mxr__footer mxr__section'>

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
                <li><Link to="/mixed-reality">Mixed Reality</Link></li>
                <li><Link to='/virtual-reality'>Virtual Reality</Link></li>
                <li><Link to='/augmented-reality'>Augmented Reality</Link></li>
                <li><Link to='/mobile-app-development'>Mobile Development</Link></li>
                <li><Link to='/web-design-and-development'>Web Design and Development</Link></li>
                <li><Link to='/research-and-innovation'>Research and Innovation</Link></li>
              </ul>

            </Col>
            <Col lg={3} xs={12}>
              <h6>CONTACT US</h6>
              <div class="mxr_footer-social-icons d-flex">
                <span><a href="https://www.facebook.com/metaextendedreality.official"><FaFacebookF size={17} /></a></span>
                <span><a href="https://twitter.com/MXR_Global"><FaTwitter size={17} /></a></span>
                <span><a href="https://www.instagram.com/metaextendedreality.official/"><FaInstagram size={17} /></a></span>
                <span><a href="https://www.linkedin.com/company/75859327/admin/"><FaLinkedinIn size={17} /></a></span>
              </div>
              <div className='mxr__footer-contact'>
                <p class="mxr__header-phone">Phone: (+44) 20 7193 5407</p>
                <p class="mxr__header-email">Email: team@mxr.ai</p>
              </div>
            </Col>
            <Col lg={3} xs={12}>
              <h6>SUBSCRIBE TO OUR NEWSLETTER</h6>
              <div className='mxr__footer-subscribe'>
                <Form onSubmit={sendEmail}>
                  <input type="email" className="form-control" placeholder="Email Address*" required />
                  <input type="submit" value="Submit" />
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
              <p>Copyright {new Date().getFullYear()} MXR | All Rights Reserved |<Link to='/privacy-policy'>Privacy Policy</Link>  | <Link to='/term-and-condition'>Terms and Conditions</Link></p></Col>
          </Row>
        </Container>
      </div>

    </div>
  )
}

export default Footer
