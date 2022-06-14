import React, {useEffect,useRef,useState} from 'react'
import { Container,Row,Col,Carousel } from 'react-bootstrap-v5'
import './clients.css'
import clutch from '../../assets/icons/clients/clutch.jpg';
import google from '../../assets/icons/clients/google.jpg';
import good from '../../assets/icons/clients/good.jpg';
import top from '../../assets/icons/clients/top.jpg';
import george from '../../assets/icons/clients/george.png';
import elijah from '../../assets/icons/clients/elijah.png';
import elmer from '../../assets/icons/clients/elmer.png';
import { testmonials } from '../../testmonials';
const Clients = () => {
  return (
     <div className='mxr__clients'>
     <Container>
      <Row>
        <Col>
        <h3 className='mxr__section-title'>OVER 900+ SATISFIED CLIENTS</h3>
        <Row>
          <Col>
           <img src={clutch} alt="clutch"/>
          </Col>
          <Col>
          <img src={google} alt="google"/>
          </Col>
        </Row>
        <Row>
        <Col>
           <img src={good} alt="clutch"/>
          </Col>
          <Col>
          <img src={top} alt="google"/>
          </Col>
        </Row>
        </Col>
        <Col>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={george}
      alt="clutch"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={elijah}
      alt="elijah"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={elmer}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </Col>
     </Row>
     </Container>
    </div>
  )
}

export default Clients
