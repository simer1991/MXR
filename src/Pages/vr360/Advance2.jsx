import React from 'react'
import './advance2.css';
import { Container } from 'react-bootstrap-v5';
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import {FaTencentWeibo,FaLayerGroup,FaIdCardAlt,FaFilePowerpoint,FaTv,FaGlobe} from 'react-icons/fa';

const Advance2 = () => {
  return (
    <div>
      <Container>
        <h3>Advance Features</h3>
        <VerticalTimeline >
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#2b7975", color: "#fff" }}
          icon={<FaTencentWeibo />}
          >
            <h4>FAST PRELOAD</h4>
            <p>Load panoramas images in background to avoid long waiting times while navigating between scenes.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#2b7975", color: "#fff" }}
          icon={<FaLayerGroup />}
          >
            <h4>MULTI MAPS</h4>
            <p>Load multiple maps layers by assigning them scenes and view the angle of direction based on view.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#2b7975", color: "#fff" }}
          icon={<FaIdCardAlt />}
          >
            <h4>LIVE SESSIONS</h4>
            <p>Invite people join your shared virtual tour with video call and chat.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#2b7975", color: "#fff" }}
          icon={<FaFilePowerpoint />}
          >
            <h4>PRESENTATION</h4>
            <p>A new way to present virtual tours, creating your own story telling.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#2b7975", color: "#fff" }}
          icon={<FaTv />}
          >
            <h4>VIRTUAL STAGING</h4>
            <p>Show before and after version of a panorama in the same view by splitting the screen.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#2b7975", color: "#fff" }}
          icon={<FaGlobe />}
          >
            <h4>WEBVR</h4>
            <p>Experience virtual tour in 3d virtual reality mode directly inside the browser.</p>
          </VerticalTimelineElement>
          </VerticalTimeline>
      </Container>
    </div>
  )
}

export default Advance2
