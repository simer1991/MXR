import React from 'react';
import './process.css';
import process from '../../assets/icons/process/process.jpg';
import process2 from '../../assets/icons/process/process2.jpg';
import { Container, Row, Col } from 'react-bootstrap-v5';
function Process(props) {
  return (
    <div className='mxr__process mxr__section'>
    <Container>
      <h3 className='mxr__section-title'>{props.title}</h3>
      <Row>
          <Col>
            <img className="mxr__process-desktop d-none d-sm-block w-100" src={process} alt="process"/>
            <img className="mxr__process-mobile d-block d-sm-none w-100" src={process2} alt="process sm"/>
          </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Process
