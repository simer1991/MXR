import React from 'react'
import './promise.css'
import promise from '../../assets/icons/promise/promise.png'
import { Row,Col, Container } from 'react-bootstrap-v5'
function Promise() {
  return (
    <Container>
        <Row>
        <Col>
         <h3>WE PROMISE, WE INNOVATE, WE CREATE, WE DELIVER.</h3>
         <p>Here at MXR we are focused on delivering simple, reliable and affordable solutions to minimize downtime, maximize return, and satisfy customers’ requirements.
         Work with us and see how it goes. We promise to go the extra mile for every project that we take onboard.</p>
         <button>Contact Us</button>
         </Col>
         <Col>
         <img src={promise}/>
         </Col>
         </Row>
    </Container>
  )
}

export default Promise
