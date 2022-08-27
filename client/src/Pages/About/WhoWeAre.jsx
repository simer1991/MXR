import React from 'react';
import { Container,Row,Col } from 'react-bootstrap-v5';
import who from '../../assets/icons/whoweare/who.png';
import './whoweare.css'
const WhoWeAre = () => {
  return (
    <div className='mxr__whoweare mxr__section'>
      <Container>
        <Row>
          <Col sm={12} lg={7}>
              <h3 className='mxr__section-title'>WHO WE ARE</h3>
              <p>We craft apps and digital experiences for enterprises, mid size companies, and startups.</p>
              <p>We started in 2014, building native and cross platform mobile and web applications. Now we also build IoT apps, create AR, VR and Mixed reality applications services.</p>
          </Col>
          <Col sm={12} lg={5}>
              <img src={who} alt="Who we are"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WhoWeAre
