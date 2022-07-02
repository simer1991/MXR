import React from 'react'
import { Container,Row,Col } from 'react-bootstrap-v5'
import './cta2.css'
import cta2 from '../../assets/icons/cta2/cta2.png'
import { Link } from 'react-router-dom'
function Cta2() {
  return (
    <div className='mxr__cta2 mxr__section'>
      <Container>
        <Row>
          <Col lg={6}>
            <div className='mxr__cta2-content'>
              <h3 className='mxr__section-title'>LET YOUR CREATIVE JUICE FLOW WITH META EXTENDED REALITY (MXR)</h3>
              <p>We specialize in cutting edge software solutions, using top modern technologies, such as augmented, virtual and mixed reality, blockchain, IoT, state of the art web and mobile technologies, and many more.</p>
              <Link to="/contact" className='mxr__section-btn'> Contact Us</Link>
          </div>
           </Col>
          <Col lg={6}>
            <img className="w-100" src={cta2} alt="MXR"/>
         </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cta2
