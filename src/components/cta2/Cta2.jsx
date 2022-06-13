import React from 'react'
import { Container,Row,Col } from 'react-bootstrap-v5'
import './cta2.css'
import cta2 from '../../assets/icons/cta2/cta2.png'
function Cta2() {
  return (
    <div className='mxr__cta2'>
      <Container>
        <Row>
          <Col>
          <h3 className='mxr__section-title'>LET YOUR CREATIVE JUICE FLOW WITH META EXTENDED REALITY (MXR)</h3>
          <p>LET YOUR CREATIVE JUICE FLOW WITH META EXTENDED REALITY (MXR)</p>
          <button>Contact Us</button>
        </Col>
        <Col>
        <img src={cta2} alt="cta2"/>
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cta2
