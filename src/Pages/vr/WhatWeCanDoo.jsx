import React from 'react'
import { Container,Tab,Row,Col,Nav } from 'react-bootstrap-v5';
import engage from '../../assets/icons/whatwecando2/engage.png'
import trusted from '../../assets/icons/whatwecando2/trusted.png'
import our from '../../assets/icons/whatwecando2/our.png'
import maximise from '../../assets/icons/whatwecando2/maximise.png'
import scalable from '../../assets/icons/whatwecando2/scalable.png'
import reduce from '../../assets/icons/whatwecando2/reduce.png'
import hardware from '../../assets/icons/whatwecando2/hardware.png'

const WhatWeCanDoo = () => {
  return (
    <div className='mxr__whatwecandoo mxr__section vertical_tabs'>
      <Container>
      <h3 className='mxr__section-title'>WHAT WE CAN DO FOR YOU</h3>
       <Tab.Container id="left-tabs-example" defaultActiveKey="training" className="">
  <Row>
    <Col md={6} sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="training">ENGAGE AND EDUCATE YOUR WORKFORCE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="product">TRUSTED BY THE WORLD’S LEADING ORGANISATIONS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="virtual">OUR SOLUTIONS COMPRISES OF 3 DISTINCT MODULES</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="visiual">MAXIMISE AND MONITOR TRAINING EFFECTIVENESS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="design">SCALABLE SECURE SOLUTIONS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="reality">REDUCE DEVELOPMENT COSTS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="web">HARDWARE</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col md={6} sm={9}>
      <Tab.Content>
      <Tab.Pane eventKey="training">
        <div>
        <img src={engage} alt="AUGMENTED TRAINING AND SIMULATIONS"/>
        <p>Immersive Technologies are transforming how enterprises train their workforce, with enhanced delivery, richer engagement, and quantifiable results.</p>
        </div>
        </Tab.Pane>
        <Tab.Pane eventKey="product">
         <div>   
         <img src={trusted} alt="AUGMENTED PRODUCT CONFIGURATORS" />
         <p>Working with some of the world’s leading companies MXR have developed a platform for optimised development and deployment of immersive training solutions.</p>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="virtual">
        <div>   
         <img src={our} alt="AUGMENTED VIRTUAL TOURS" />
         <p>Guided learning – Step by step guided learning similar to one on one mentoring.</p>
          <p>Practice Mode – The Ability to practice and learn at the students own pace.</p>
          <p>Assessment Mode – Trainer lead assessment with data driven metrics and results</p>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="visiual">
        <div>   
         <img src={maximise} alt="AUGMENTED VISUAL PRESENTATIONS" />
         <p>Web based dashboard provides easy trainer class and course setup and tracks every user action providing measurable analytics.</p>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="design">
        <div>   
         <img src={scalable} alt="AR FOR INTERIOR DESIGN AND REAL ESTATE" />
         <p>Our solution can be deployed on premise for security sensitive applications or via Azure and the cloud for remote multiple site configuration and management backed by institutional grade security.</p>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="reality">
        <div>   
         <img src={reduce} alt="reality" />
         <p>We’ve created an optimised pipeline and development method to create reusable assets and code to drastically reduce the cost and time of development</p>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="web">
        <div>   
         <img src={hardware} alt="web" />
         <p>We’ve focused on creating reusable solutions that are hardware agnostic. This allows us to deploy training using the best hardware for your specific training requirements whether it is virtual reality, AR or MR.</p>
         </div>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</Container>
    </div>
  )
}

export default WhatWeCanDoo
