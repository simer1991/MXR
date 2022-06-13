import React from 'react'
import './industries.css'
import technology from '../../assets/icons/industries/technology.png'
import telecommutions from '../../assets/icons/industries/telecommutions.png'
import oil from '../../assets/icons/industries/oil.png'
import travel from '../../assets/icons/industries/travel.png'
import digital from '../../assets/icons/industries/digital.png'
import nonprofit from '../../assets/icons/industries/nonprofit.png'
import elearning from '../../assets/icons/industries/e-learning.png';
import marketing from '../../assets/icons/industries/marketing.png'
import ecommerce from '../../assets/icons/industries/e-commerce.png'
import lifestyle from '../../assets/icons/industries/lifestyle.png'
import {Row,Col,Container} from 'react-bootstrap-v5';
const Industries = () => {
  return (
    <div className='mxr__industries'>
  <Container>
    <h3 className='mxr__section-title'>INDUSTRIES</h3>
  <Row>
    <Col lg={2}>
    <img src={technology} alt="technology"/>
    <h4>Technology</h4>
    </Col>
    <Col >
    <img src={telecommutions} alt="telecommunication"/>
    <h4>Telecommunication</h4>
    </Col>
    <Col>
    <img src={oil} alt="oil&gas"/>
    <h4>Oil & Gas</h4>
    </Col>
    <Col>
    <img src={travel} alt="travel"/>
    <h4>Travel & Tourism</h4>
    </Col>
    <Col>
    <img src={digital} alt="digital marketing"/>
    <h4>Digital Marketing</h4></Col>
  </Row>
  <Row>
  <Col lg={2}>
    <img src={nonprofit} alt="nonprofit"/>
    <h4>Non-Profits</h4>
    </Col>
    <Col >
    <img src={elearning} alt="elearning"/>
    <h4>E-Learning</h4>
    </Col>
    <Col>
    <img src={marketing} alt="marketing"/>
    <h4>Marketing</h4>
    </Col>
    <Col>
    <img src={ecommerce} alt="ecommerce"/>
    <h4>E-Commerce</h4>
    </Col>
    <Col>
    <img src={lifestyle} alt="lifestyle"/>
    <h4>Lifestyle</h4></Col>
  </Row>
</Container>
</div>
  )
}

export default Industries
