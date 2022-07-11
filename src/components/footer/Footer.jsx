import React,{useState} from 'react'
import './footer.css'
import logo from '../../assets/icons/footer/logo.png'
import { Col, Row, Container, Form, } from 'react-bootstrap-v5'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Footer = () => {

  const [msg,setMsg] = useState('');
  const [user, setUser] = useState({
    to: ""
  });
 
  const { to} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/users/",user)
   .then(response => setMsg(response.data.respMesg));
  };

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
              <p className="mb-3 mt-2" style={{color:"green",marginLeft:"57px"}}><b>{msg}</b></p>
                <Form >
                  <input type="email"
                   className="form-control" 
                   placeholder="Email Address*" 
                   name="to" 
                   onChange={onInputChange}
                   value={to}
                   require />
                   <button onClick={onSubmit} className="mxr__section-btn" >SUBSCRIBE</button>
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
