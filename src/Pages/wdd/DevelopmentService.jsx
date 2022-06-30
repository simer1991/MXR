import React from 'react'
import { Col, Container, Row } from 'react-bootstrap-v5'
import {FaPaintBrush,FaUsers,FaSearchDollar,FaPenNib} from 'react-icons/fa';

const DevelopmentService = () => {
  return (
    <div className='mxr__developmentservice mxr__section'>
      <Container>
      <h3 className='mxr__section-title'>WHY CHOOSE OUR WEB DEVELOPMENT SERVICES</h3>
      <Row>
          <Col>
          <div>
            <FaPaintBrush size={30}/>
            </div>
            <div>
            <h5>PROMPT CUSTOMIZATION</h5>
            <p>Our experienced web developers provide customization web solutions on the go. We save time and deliver a quality product everytime.</p>
             </div>
         </Col>
          <Col>
            <FaUsers size={30} />
            <h5>QUALIFIED TEAM</h5>
            <p>Our team is highly experienced and well updated on latest trends in web development services. We achieve client satisfaction by assisting them to achieve business goals.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <FaSearchDollar size={30}/>
            <h5>AFFORDABLE SOLUTION</h5>
            <p>Web application may look hefty, but Intelivita provides cost effective website development solutions which enhance the ROI of the business in a true sense</p>
          </Col>
          <Col>
            <FaPenNib size={30} />
            <h5>PERFECT DESIGN</h5>
            <p>Our creative UI UX designer team craft the web application that flaunts online. We develop smooth, stunning and feature rich user friendly solutions that increase user experience on the website.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DevelopmentService
