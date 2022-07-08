import React from 'react'
import './advance.css';
import { Container,Row,Col } from 'react-bootstrap-v5';
import {FaSearch,FaChartLine,FaIdCardAlt} from 'react-icons/fa';

const Advance = () => {
  return (
    <div className='mxr__advance mxr__section bg_3steps'>
      <Container>
        <h3 className='mxr__section-title'>ADVANCE FEATURES</h3>
        <Row>
            <Col md={4} sm={12}>
              <div className='bg_3steps_icon'>
               <FaSearch size={40}/>
               </div>
               <h5>CREATE</h5>
               <p>Add interactive hotspots to your videos and build immersive virtual experiences for your users to explore.</p>
            </Col>
            <Col md={4} sm={12}>
               <div className='bg_3steps_icon'>
               <FaChartLine size={40}/>
               </div>
               <h5>ANALYTICS</h5>
               <p>See, understand and optimise user behaviours across the enterprise with our unique and patented analytics layer.</p>
            </Col>
            <Col md={4} sm={12}>
              <div className='bg_3steps_icon'>
               <FaIdCardAlt size={40}/>
               </div>
               <h5>DEMO</h5>
               <p>Bring your customers to life by allowing them to explore your location and services in tactile enviroment.</p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Advance
