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
import reviewpphn from '../../assets/icons/clients/review-pphn.jpg';
const Clients = () => {
  return (
     <div className='mxr__clients'>
     <Container>
      <Row>
        <Col sm={12} lg={6} md={6}>
        <h3 className='mxr__section-title'>OVER 900+ SATISFIED CLIENTS</h3>
      <div className='mxr__clients-desktop d-none d-sm-block w-100'>
      <Row>
          <Col sm={12} lg={6} md={6}>
           <img src={clutch} alt="clutch"/>
          </Col>
          <Col sm={12} lg={6} md={6}>
          <img src={google} alt="google"/>
          </Col>
        </Row>
        <Row>
        <Col sm={12} lg={6} md={6}>
           <img src={good} alt="good"/>
          </Col>
          <Col sm={12} lg={6} md={6}>
          <img src={top} alt="top"/>
          </Col>
        </Row>
        </div>
        <div className='mxr__clients-mobile d-block d-sm-none w-100'>
        <img src={reviewpphn} alt="review"/>
        </div>
        </Col>
        <Col sm={12} lg={6} md={6}>
  <Carousel variant='dark'>
  <Carousel.Item>
    <img
      className="d-block "
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
      className="d-block"
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
      className="d-block"
      src={elmer}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>hello slide label</h3>
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
