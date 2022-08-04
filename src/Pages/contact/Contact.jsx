import React,{useState,useRef} from 'react'
import { Container,Row,Col,Card,ListGroup,Form } from 'react-bootstrap-v5'
import {FaMapMarkerAlt,FaPhoneAlt,FaEnvelope,FaComment} from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios' 
import { Innerbanner } from '../../components';
import './contact.css'
import { Helmet } from 'react-helmet';

const bannerdata = {
  img: 'contact.png',
  title: "CONTACT MXR TODAY",
}


const Contact =() => {
  const [varified,setVarified]=useState(false)
  function onChange(value) {
    console.log("Captcha value:", value);
    setVarified(true);
  }

    const [msg,setMsg] = useState('');
    const [user, setUser] = useState({
      to: ""
    });
   
    const { to,name,number,address} = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
   
    const onSubmit = async e => {
      e.preventDefault();
      await axios.post("http://localhost:5000/users/",user)
     .then(response => setMsg(response.data.respMesg));
    };
  

  return (
   <div className='mxr__contact'> 
   <Helmet>
    <title>Contact Us | AR, VR and MR Technology | MXR</title>
    <meta name="description" content="MXR is UK based software development company delivering reliable and in-budget solutions for AR, VR, MR, Web and Mobile App development to clients globally." />
   </Helmet>
   <Innerbanner banner={bannerdata}/>  
    <Container>
      <h3 className='mxr__section-title'>CONTACT MXR TODAY</h3>
      <Row>
        <Col sm={12} md={4} className='left_instruction'>
        <Card >
          <ListGroup variant="flush">
          <ListGroup.Item>
            <div>
             <FaMapMarkerAlt size={30}/>
            </div>
            <div>
                <h3 className='mxr__section-title'>Our Location</h3>
                <p>20-22 Wenlock Road, <br/>London, N1 7GU, England</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
             <FaPhoneAlt size={30}/>
            </div>
            <div>
                <h3 className='mxr__section-title'>Call Us</h3>
                <p>(+44) 20 7193 5407</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
                <FaEnvelope size={30}/>
            </div>
            <div>
                <h3 className='mxr__section-title'>Email Address</h3>
                <p>team@mxr.ai</p>
            </div>
          </ListGroup.Item>
          </ListGroup>
        </Card> 
        </Col>
        <Col sm={12} md={8}>
        <Form>
           <Row>
                <Col md={6}>
                   <Form.Group as={Col} controlId="formGridEmail">
                    <div>
                   <Form.Label>Your Name *</Form.Label>
                   </div>
                   <input 
                   type="text" 
                   name="name" 
                   onChange={onInputChange}
                   value={name}
                   required
                    />
                   </Form.Group>
                   </Col>
                   <Col md={6}>
                   <Form.Group as={Col} controlId="formGridEmail">
                    <div>
                   <Form.Label>Your Email *</Form.Label>
                   </div>
                   <input 
                   type="email" 
                   name="to"
                   onChange={onInputChange}
                   value={to}
                   required
                    />
                   </Form.Group>
                </Col>
                <Row>
                <Col md={6}>
                   <Form.Group as={Col} controlId="formGridEmail">
                    <div>
                   <Form.Label>Phone number *</Form.Label>
                   </div>
                   <input 
                   type="number" 
                   name="number"  
                   onChange={onInputChange}
                   value={number}
                   required
                   />
                   </Form.Group> 
                   </Col>
                   <Col md={6}>
                   <Form.Group as={Col} controlId="formGridEmail">
                    <div>
                   <Form.Label>Your Address *</Form.Label>
                   </div>
                   <input 
                   type="text"  
                   name="address"
                   onChange={onInputChange}
                   value={address}
                   required
                   />
                   </Form.Group>
                </Col>
                </Row>
                <Row>
                   <div>
                  <label>Message</label> </div>
                  <div>
                  <textarea col={4} name="message"></textarea>
                 </div>
                  </Row>
                  <Row>
                  <ReCAPTCHA
                   sitekey="6LczRmYgAAAAAFc5pZRi9-opvqmOw9H1BEjp7nM6"
                   onChange={onChange}
                  /></Row>
                  <Row>
                   <div> 
                   <p className="mb-3 mt-2" style={{color:"green",marginLeft:"57px"}}><b>{msg}</b></p>
                  <button onClick={onSubmit}><FaComment/>Submit</button>
                  </div>
                  </Row>
            </Row>
        </Form>
        </Col>
      </Row>
    </Container>
    
    </div>
  )
}

export default Contact
