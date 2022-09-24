import React from "react";
import "./advance2.css";
import { Container, Row, Col } from "react-bootstrap-v5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {
  FaTencentWeibo,
  FaLayerGroup,
  FaIdCardAlt,
  FaFilePowerpoint,
  FaTv,
  FaGlobe,
} from "react-icons/fa";
import timelines from "../../assets/images/advance_features.png";

const Advance2 = () => {
  return (
    <div className="mxr__advance2 mxr__section">
      <Container>
        <h3 className="mxr__section-title">Advance Features</h3>
        <Row>
          <Col md={7} sm={12}>
            <img src={timelines} alt="" />
          </Col>
          <Col md={5} sm={12}>
            <VerticalTimeline>
              <VerticalTimelineElement className="vertical-timeline-element--work">
                <div className="icon_timeline">
                  <FaTencentWeibo />
                </div>
                <div className="advance_Features_heading">
                  <h4>FAST PRELOAD</h4>
                  <p>
                    Load panoramas images in background to avoid long waiting
                    times while navigating between scenes.
                  </p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement className="vertical-timeline-element--work">
                <div className="icon_timeline">
                  <FaLayerGroup />
                </div>
                <div className="advance_Features_heading">
                  <h4>MULTI MAPS</h4>
                  <p>
                    Load multiple maps layers by assigning them scenes and view
                    the angle of direction based on view.
                  </p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement className="vertical-timeline-element--work">
                <div className="icon_timeline">
                  <FaIdCardAlt />
                </div>
                <div className="advance_Features_heading">
                  <h4>LIVE SESSIONS</h4>
                  <p>
                    Invite people join your shared virtual tour with video call
                    and chat.
                  </p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement className="vertical-timeline-element--work">
                <div className="icon_timeline">
                  <FaFilePowerpoint />
                </div>
                <div className="advance_Features_heading">
                  <h4>PRESENTATION</h4>
                  <p>
                    A new way to present virtual tours, creating your own story
                    telling.
                  </p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement className="vertical-timeline-element--work">
                <div className="icon_timeline">
                  <FaTv className="icon" />
                </div>
                <div className="advance_Features_heading">
                  <h4>VIRTUAL STAGING</h4>
                  <p>
                    Show before and after version of a panorama in the same view
                    by splitting the screen.
                  </p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement className="vertical-timeline-element--work last">
                <div className="icon_timeline">
                  <FaGlobe />
                </div>
                <div className="advance_Features_heading">
                  <h4>WEBVR</h4>
                  <p>
                    Experience virtual tour in 3d virtual reality mode directly
                    inside the browser.
                  </p>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Advance2;
