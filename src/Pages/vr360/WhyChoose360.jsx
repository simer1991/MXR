import React from 'react'
import { Container,Tab,Tabs,Row,Col } from 'react-bootstrap-v5'
import real from '../../assets/icons/whychoosevr360/real.png'
import Automotive from '../../assets/icons/whychoosevr360/Automotive.png'
import virtual2 from '../../assets/icons/whychoosevr360/virtual2.png'
import virtual from '../../assets/icons/whychoosevr360/Virtual.png'
import edu from '../../assets/icons/whychoosevr360/edu.png'

const WhyChoose360 = () => {
  return (
    <div>
      <Container>
         <Tabs>
         <Tab  eventKey="Real Estate" title="Real Estate">
            <Row>
                <Col>
                   <img src={real} alt="Real Estate"/>
                </Col>
                <Col>
                    <p>A perfect marketing tool in real estate and design.</p>
                    <p>Use 3D virtual tours to save your valuable time, increase your viewings, get ahead of your rivals, and drive your property lets and sales.</p>
                    <p>VR 360 allows to walk through a new building even if it is still under construction. By means of 360 3D Walkthrough real estate marketing and sales campaigns could be highly promoted among not only local, but international property buyers.</p>
                </Col>
            </Row>
            </Tab>
            <Tab eventKey='Automotive' title='Automotive'>
                <Row>
                    <Col>
                      <img src={Automotive} alt="automotive" />
                    </Col>
                    <Col>
                      <p>Lead the charge in automotive e-commerce sales with immersive VR 360 experiences.</p>
                      <p>What if your potential customers could walk your showroom remotely, enjoying a highly engaging experience with all the information they need to hand, but without having to leave their home or office?</p>
                      <p>With the help of VR anyone can make sure that a created model looks good enough, functions well, and is safe to use. Instead of spending a lot of money, time and efforts to build several different prototypes in real life, let VR 360 help you to save a lot of time and resources to study how a car or a boat can look and work.</p>
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey='Virtual Trade Shows' title='Virtual Trade Shows'>
                <Row>
                    <Col>
                      <img src={virtual} alt="virtual trade show" />
                    </Col>
                    <Col>
                      <p>Make your next event limitless with a customizable and interactive 3D experience</p>
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey='Education' title='Education'>
                <Row>
                    <Col>
                      <img src={edu} alt="" />
                    </Col>
                    <Col>
                      <p>With the MXR VR 360 platform you can create your own virtual tour of your school, nursery, college or sports facility easily, quickly and cost-effectively.</p>
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey='Virtual Staging' title='Virtual Staging'>
                <Row>
                    <Col>
                      <img src={virtual2} alt="virtual staging" />
                    </Col>
                    <Col>
                      <p>
It is one of the most important tasks for interior designers to present projects in an appealing and a comprehensible manner, in order to encourage imagination of their clients. Any property buyer only buys when he understands what exactly he is buying.</p>
                    </Col>
                </Row>
            </Tab>
         </Tabs>
      </Container>
    </div>
  )
}

export default WhyChoose360
