import React from 'react'
import { Col, Container, Row } from 'react-bootstrap-v5'
import {FaExclamationTriangle,FaRedo,FaDice,FaLightbulb,FaEye,FaThumbsUp} from 'react-icons/fa'

const KeyBenifits = () => {
  return (
    <div className='mxr__keybenifits mxr__section'>
      <Container>
        <h3 className='mxr__section-title'>KEY BENEFITS</h3>
        <Row>
            <Col>
            <FaExclamationTriangle size={30} />
            <h5>HAZARD SIMULATION</h5>
            <p>The ability to simulate hazardous environments or complex procedures</p>
            </Col>
            <Col>
             <FaRedo size={30} />
             <h5>REPEATABILITY</h5>
             <p>Safe repeatable and controlled environments</p>
            </Col>
            <Col>
             <FaDice size={30} />
             <h5>3D INTERACTION</h5>
             <p>Learn by doing in room scale environments isolated from distractions</p>
            </Col>
        </Row>
        <Row>
            <Col>
            <FaLightbulb size={30} />
            <h5>HIGHLY ENGAGING</h5>
            <p>Fun immersive user engagement leading to increased knowledge retention</p>
            </Col>
            <Col>
            <FaEye size={30} />
            <h5>VISUAL</h5>
            <p>Highly visual, easy to interpret and understand</p>
            </Col>
            <Col>
            <FaThumbsUp size={30} />
            <h5>REALTIME ANALYTICS</h5>
            <p>Real time user monitoring and analysis providing quantifiable metrics</p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default KeyBenifits
