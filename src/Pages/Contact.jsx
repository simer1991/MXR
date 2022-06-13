import React from 'react'
import { Container,Row,Col,Card,ListGroup,Form } from 'react-bootstrap-v5'
import {FaMapMarkerAlt,FaPhoneAlt,FaEnvelope} from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';
 
function Contact() {
    
  return (
  <Container>
      <h2>CONTACT MXR TODAY</h2>
      <Row>
        <Col lg={4}>
        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
          <ListGroup.Item>
            <div>
             <FaMapMarkerAlt size={30}/>
            </div>
            <div>
                <h3>Our Location</h3>
                <p>20-22 Wenlock Road, <br/>London, N1 7GU, England</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
             <FaPhoneAlt size={30}/>
            </div>
            <div>
                <h3>Call Us</h3>
                <p>(+44) 20 7193 5407</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
                <FaEnvelope size={30}/>
            </div>
            <div>
                <h3>Email Address</h3>
                <p>team@mxr.ai</p>
            </div>
          </ListGroup.Item>
          </ListGroup>
        </Card> 
        </Col>
        <Col>
        <Form>
           <Row>
                <Col>
                   <Form.Group as={Col} controlId="formGridEmail">
                   <Form.Label>Your Name *</Form.Label>
                   <Form.Control type="text"  />
                   </Form.Group>
                   </Col>
                   <Col>
                   <Form.Group as={Col} controlId="formGridEmail">
                   <Form.Label>Your Email *</Form.Label>
                   <Form.Control type="email"  />
                   </Form.Group>
                </Col>
                <Row>
                <Col>
                   <Form.Group as={Col} controlId="formGridEmail">
                   <Form.Label>Phone number *</Form.Label>
                   <Form.Control type="number"  />
                   </Form.Group>
                   </Col>
                   <Col>
                   <Form.Group as={Col} controlId="formGridEmail">
                   <Form.Label>Your Address *</Form.Label>
                   <Form.Control type="text"  />
                   </Form.Group>
                </Col>
                </Row>
                Message
                <textarea></textarea>
            </Row>
        </Form>
        </Col>
      </Row>
    
   </Container>
  )
}

export default Contact
