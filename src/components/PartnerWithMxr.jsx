import React from 'react'
import { Col, Container, Row } from 'react-bootstrap-v5'
import {FaThumbtack,FaCity,FaUserCog,FaBuilding} from 'react-icons/fa'

const PartnerWithMxr = () => {
  return (
    <div className='mxr__partnerwithmxr mxr__section '>
      <Container>
        <h3 className='mxr__section-title'>PARTNER WITH MXR</h3>
        <Row>
            <Col>
            <FaThumbtack size={30} />
            <h5>STARTUPS</h5>
            <p>We are a one-stop shop for your project, helping you at every stage of the entrepreneurial adventure – from crafting your idea, through design and development, up to product launch and scaling your business.</p>
            </Col>
            <Col>
            <FaCity size={30} />
            <h5>SMALL BUSINESSES</h5>
            <p>Small and Mid-Sized businesses need top development skills for scaling their products. We set up dedicated teams that handle new features, maintenance, and scaling for you.</p>
            </Col>
        </Row>
        <Row>
            <Col>
             <FaUserCog size={30} />
             <h5>ENTERPRISE</h5>
             <p>We help enterprise clients achieve better results, automate processes, and cut costs with solutions that bring actionable business insight and pave the way to scaling any business.</p>
            </Col>
            <Col>
            <FaBuilding size={30} />
            <h5>SOFTWARE COMPANIES</h5>
            <p>We know how difficult it is to source talent. We provide developer teams to support in-house resources or create interdisciplinary, self-reliant tech units to address your needs.</p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PartnerWithMxr
