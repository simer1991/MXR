import React from 'react'
import { Col, Container, Row } from 'react-bootstrap-v5'
import {FaExclamationTriangle,FaRedo,FaDice,FaLightbulb,FaEye,FaThumbsUp} from 'react-icons/fa'

const KeyBenifits = () => {
  return (
    <div className='mxr__keybenifits mxr__section text_center_withicon'>
      <Container>
        <h3 className='mxr__section-title'>KEY BENEFITS</h3>
        <Row>
            <Col sm={12} lg={4}>
            <div className='icon_textcnetersection' >
            <FaExclamationTriangle size={30} />
            </div>
            <h5>HAZARD SIMULATION</h5>
            <p>The ability to simulate hazardous environments or complex procedures</p>
            </Col>
            <Col sm={12} lg={4}>
            <div className='icon_textcnetersection'>
             <FaRedo size={30} />
             </div>
             <h5>REPEATABILITY</h5>
             <p>Safe repeatable and controlled environments</p>
            </Col>
            <Col sm={12} lg={4}>
              <div className='icon_textcnetersection'>
             <FaDice size={30} />
             </div>
             <h5>3D INTERACTION</h5>
             <p>Learn by doing in room scale environments isolated from distractions</p>
            </Col>
        </Row>
        <Row>
            <Col sm={12} lg={4}>
            <div className='icon_textcnetersection'>
            <FaLightbulb size={30} />
            </div>
            <h5>HIGHLY ENGAGING</h5>
            <p>Fun immersive user engagement leading to increased knowledge retention</p>
            </Col>
            <Col sm={12} lg={4}>
            <div className='icon_textcnetersection'>
            <FaEye size={30} />
            </div>
            <h5>VISUAL</h5>
            <p>Highly visual, easy to interpret and understand</p>
            </Col>
            <Col sm={12} lg={4}>
            <div className='icon_textcnetersection'>
            <FaThumbsUp size={30} />
            </div>
            <h5>REALTIME ANALYTICS</h5>
            <p>Real time user monitoring and analysis providing quantifiable metrics</p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default KeyBenifits
