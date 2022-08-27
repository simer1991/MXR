import React from 'react'
import { Col, Container, Row } from 'react-bootstrap-v5'
import {FaShieldAlt,FaThumbsUp,FaCheckCircle,FaCogs,FaCalendar,FaPiggyBank} from 'react-icons/fa'

const WhyChoooseMxr = () => {
  return (
    <div className='mxr__whychoosemxr mxr__section text_center_withicon'>
      <Container>
        <h3 className='mxr__section-title'>WHY CHOOSE MXR</h3>
        <Row>
            <Col lg={4} sm={12}>
            <div className='icon_textcnetersection'>
            <FaShieldAlt size={30} />
            </div>
            <h5>RELIABLE SERVICE</h5>
            <p>100% in-house team. No freelancers</p>
            </Col>
            <Col lg={4} sm={12}>
            <div className='icon_textcnetersection'>
            <FaThumbsUp size={30} />
            </div>
            <h5>TRUSTED BY PEOPLE LIKE YOU</h5>
            <p>Over 100+ real, 5 star reviews on Google.com</p>
            </Col>
            <Col lg={4} sm={12}>
            <div className='icon_textcnetersection'>
            <FaCheckCircle size={30} />
            </div>
            <h5>HIRE EXPERTS</h5>
            <p>We employ only top 1% developers.</p>
            </Col>
        </Row>
        <Row>
            <Col lg={4} sm={12}>
            <div className='icon_textcnetersection'>
            <FaCogs size={30} />
            </div>
            <h5>MODERN SETUP</h5>
            <p>We have the best workplace in the industry.</p>
            </Col>
            <Col lg={4} sm={12}>
            <div className='icon_textcnetersection'>
            <FaCalendar size={30} />
            </div>
            <h5>AI DRIVEN WORKFLOW</h5>
            <p>We try to address issues before they occur.</p>
            </Col>
            <Col lg={4} sm={12}>
            <div className='icon_textcnetersection'>
            <FaPiggyBank size={30} />
            </div>
            <h5>SAVE UP-TO 50%</h5>
            <p>We are better and yet cheaper than other solutions</p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WhyChoooseMxr
