import React from 'react'
 import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
 import {FaUserCheck, FaUserShield,FaTrophy,FaUser} from 'react-icons/fa';
 import './timeline.css'
import { Container,Row,Col } from 'react-bootstrap-v5';

const TimeLine = () => {
  return (
    <div className='mxr__timeline mxr__section'>
      <Container>
      <h3 className='mxr__section-title'>WHY WE STAND OUT</h3>
      <Row>
        <Col lg={6} sm={12}>
      <VerticalTimeline >
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{background:"#fff"}}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#fff", color: "#2b7975" }}
          icon={<FaUserCheck />}
          >
            <h4>DEDICATION TO CLIENT SUCCESS</h4>
            <p>Our team and works and revolves around a user-centric approach, which certainly means 100% client success rate.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          contentStyle={{background:"#fff"}}
          iconStyle={{ background: "#fff", color: "#2b7975" }}
          icon={<FaUserShield />}
          >
            <h4>TRANSPARENCY</h4>
            <p>Timely disclosure of information, insights for collaboration and discussion are a daily routine at MXR.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{background:"#fff"}}
          iconStyle={{ background: "#fff", color: "#2b7975" }}
          icon={<FaTrophy />}
          >
           <h4>AWARD-WINNING TEAM</h4>
           <p>We have been recognized and appreciated not only by our clients but also by many professionally reputed organizations for excellence in our business.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{background:"#fff"}}
          iconStyle={{ background: "#fff", color: "#2b7975" }}
          icon={<FaUser />}
          >
          <h4>USER FRIENDLY INTERFACE</h4>
          <p>We consult our clients on what business model and methodology to choose depending on project needs, scope, and capacity.</p>
          </VerticalTimelineElement>
      </VerticalTimeline>
      </Col>
      <Col sm={12} lg={6} className="timeline-right-image">
      
      </Col>
      </Row>
      </Container>
    </div>
  )
}

export default TimeLine
