import React from 'react';
import './promise.css';
import promise from '../../assets/icons/promise/promise.png';
import { Row,Col, Container, NavLink } from 'react-bootstrap-v5';

function Promise() {
  return (
    <div className='mxr__promise mxr__section'>
      <Container>
          <Row>
          <Col md={6} sm={12}>
          <div className='mxr__promise-content'>
          <h3 className='mxr__section-title'>WE PROMISE, WE INNOVATE, WE CREATE, WE DELIVER.</h3>          
          <p>Here at <strong>MXR</strong> we are focused on delivering simple, reliable and affordable solutions to minimize downtime, maximize return, and satisfy customers’ requirements.</p>
          <p> Work with us and see how it goes. We promise to go the extra mile for every project that we take onboard.</p>
          <NavLink className='mxr__section-btn'> Contact Us</NavLink>
          </div>
          </Col>
          <Col md={6} sm={12}>
          <img src={promise} alt="promise" className='w-100'/>
          </Col>
          </Row>
      </Container>
    </div>
  )
}

export default Promise
