import React from "react";
import { Container, Tab, Tabs, Row, Col } from "react-bootstrap-v5";
import rendering from "../assets/icons/technologyservices/whyshould/rendering.jpg";
import cost from "../assets/icons/technologyservices/whyshould/cost.png";
import multiple from "../assets/icons/technologyservices/whyshould/multiple.png";
import sound from "../assets/icons/technologyservices/whyshould/sound.jpg";
import security from "../assets/icons/technologyservices/whyshould/security.jpg";

const WhyShould = () => {
  return (
    <div className="mxr__whyshould mxr__section">
      <Container>
        <h3 className="mxr__section-title">WHY CHOOSE UNREAL ENGINE 4?</h3>
        <Tabs className="mb-3 mxr__tabs">
          <Tab
            eventKey="Photorealistic renderings"
            title="Photorealistic renderings"
          >
            <Row>
              <Col md={6} sm={12}>
                <img src={rendering} alt="Real Estate" />
              </Col>
              <Col md={6} sm={12}>
                <p>
                  Unreal Engine’s greatest strength is its remarkable graphics,
                  which include real-time HD rendering, ray tracing,
                  cinema-level lighting, and a variety of other capabilities.
                  Together, they add an extraordinary level of realism and
                  detail to enterprise-grade systems.
                </p>
              </Col>
            </Row>
          </Tab>
          <Tab
            eventKey="Multiple platform options"
            title="Multiple platform options"
          >
            <Row>
              <Col md={6} sm={12}>
                <img src={multiple} alt="automotive" />
              </Col>
              <Col md={6} sm={12}>
                <p>
                  With Unreal Engine, you can deliver software to a broad number
                  of platforms, including PC, mobile, web, and augmented and
                  virtual reality. If you decide to add other platforms or port
                  from one to another later, this is typically achievable.
                </p>
              </Col>
            </Row>
          </Tab>
          <Tab
            eventKey="A sound that is realistic"
            title="A sound that is realistic"
          >
            <Row>
              <Col md={6} sm={12}>
                <img src={sound} alt="virtual trade show" />
              </Col>
              <Col>
                <p>
                  The engine’s sound system aids in the integration of numerous
                  layers and types of sound, ranging from ambience to music,
                  dialogue, and sound effects. Additionally, it supports
                  node-based assets. These effects sound natural and integrate
                  seamlessly into your application, adding ambiance and
                  immersion.
                </p>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="Cost savings" title="Cost savings">
            <Row>
              <Col md={6} sm={12}>
                <img src={cost} alt="" />
              </Col>
              <Col md={6} sm={12}>
                <p>
                  With Blueprints, large elements of a UE application can be
                  produced rapidly and economically. This is a no-code visual
                  scripting system that is frequently used for prototyping and
                  constructing enterprise simulations.
                </p>
              </Col>
            </Row>
          </Tab>
          <Tab
            eventKey="Virtual StagingSecurity features"
            title="Security features"
          >
            <Row>
              <Col md={6} sm={12}>
                <img src={security} alt="virtual staging" />
              </Col>
              <Col md={6} sm={12}>
                <p>
                  Unreal Engine receives continuous support and updates,
                  enhancing the engine’s security and stability. The current
                  iteration represents the conclusion of years of vulnerability
                  elimination. By developing your programme in UE4, you can be
                  certain that it will not act as a bottleneck in your security
                  system.
                </p>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default WhyShould;
