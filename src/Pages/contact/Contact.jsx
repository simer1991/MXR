import React,{useState,useRef} from 'react'
import { Container,Row,Col,Card,ListGroup,Form } from 'react-bootstrap-v5'
import {FaMapMarkerAlt,FaPhoneAlt,FaEnvelope,FaComment} from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser' 

const Contact =() => {
  const [varified,setVarified]=useState(false)
  function onChange(value) {
    console.log("Captcha value:", value);
    setVarified(true);
  }
  function sendEmail(e){
    e.preventDefault();
    emailjs.send('service_gn1atii','template_cae5z8b',sendEmail,'oamdoX8gpeRyb1_R6')
   .then(res=>{
        console.log(res);
    }).catch(err=>console.log(err));
    emailjs.send('service_gn1atii','template_g8n3ovx',sendEmail,'oamdoX8gpeRyb1_R6')
   .then(res=>{
        console.log(res);
    }).catch(err=>console.log(err));
}
  
  return (
  <Container>
    <div className='mxr__contact mxr__section'>
      <h3 className='mxr__section-title'>CONTACT MXR TODAY</h3>
      <Row>
        <Col lg={4}>
        <Card style={{ width: '18rem' }}>
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
        <Col>
        <Form onSubmit={sendEmail}>
           <Row>
                <Col>
                   <Form.Group as={Col} controlId="formGridEmail">
                   <Form.Label>Your Name *</Form.Label>
                   <input type="text" name="name" />
                   </Form.Group>
                   </Col>
                   <Col>
                   <Form.Group as={Col} controlId="formGridEmail">
                   <Form.Label>Your Email *</Form.Label>
                   <input type="email" name="email" />
                   </Form.Group>
                </Col>
                <Row>
                <Col>
                   <Form.Group as={Col} controlId="formGridEmail">
                   <Form.Label>Phone number *</Form.Label>
                   <input type="number" name="number" />
                   </Form.Group>
                   </Col>
                   <Col>
                   <Form.Group as={Col} controlId="formGridEmail">
                   <Form.Label>Your Address *</Form.Label>
                   <input type="text"  name="address"/>
                   </Form.Group>
                </Col>
                </Row>
                
                  <label>Message</label>
                  <textarea col={4} name="message"></textarea>
                  <ReCAPTCHA
                   sitekey="6LczRmYgAAAAAFc5pZRi9-opvqmOw9H1BEjp7nM6"
                   onChange={onChange}
                  />
                  <button  ><FaComment/>Submit</button>
            </Row>
        </Form>
        </Col>
      </Row>
      </div>
    </Container>
  )
}

export default Contact
