import React from 'react'
import { Col, Container, Row } from 'react-bootstrap-v5';
import {FaUserAlt,FaFileAlt,FaHistory,FaThumbsUp} from 'react-icons/fa'

const ClientsDevelopment = () => {
  return (
    <div className='mxr__clientdevelopment mxr__section bg_3steps '>
      <Container>
        <h3 className='mxr__section-title'>CLIENT DEVELOPMENT PROCESS</h3>
        <Row>
            <Col md={6} sm={12}>
            <div className='bg_3steps_icon'>
              <FaUserAlt size={30} />
            </div>
              <h5>ENVISIONING SESSION</h5>
              <p>A workshop to understand existing pain points. We will brainstorm a range of ideas, filter and sort them to come up with 2-3 killer use.</p>
            </Col>
            <Col md={6} sm={12}>
            <div className='bg_3steps_icon'>
              <FaFileAlt size={30} />
            </div>
              <h5>PROOF OF CONCEPT</h5>
              <p>Build a functioning proof of concept application which would be trialled for 3 months and robustly evaluated to prove the ROL.</p>
            </Col>
            </Row>
            <Row>
            <Col md={6} sm={12}>
            <div className='bg_3steps_icon'>
              <FaHistory size={30} />
            </div>
              <h5>ROLL OUT</h5>
              <p>Build and test the enterprise solution ready for roll out across the organisation.</p>
            </Col>
            <Col md={6} sm={12}>
            <div className='bg_3steps_icon'>
              <FaThumbsUp size={30} />
            </div>
              <h5>SUPPORT</h5>
              <p>Support and maintenance to evolve your product ensuring it continues to deliver at the highest possible value cases.</p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ClientsDevelopment
