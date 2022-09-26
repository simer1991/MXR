import React from "react";
import { Container, Row, Col } from "react-bootstrap-v5";
import "./whychoose.css";
const WhyChoose = (props) => {
  return (
    <div className="mxr__whychoose mxr__section">
      <Container>
        <div>
          {props.benifit.map((list, index) => (
            <>
              <Row>
                <Col>
                  <h3 className="mxr__section-title">{list.heading}</h3>
                </Col>
              </Row>
              <Row>
                {list.lists.map((data, index) => (
                  <Col md={6} sm={12}>
                    <div className="icon_leftside">{data.icon}</div>
                    <div>
                      <h5>{data.title}</h5>
                      <p>{data.text}</p>
                    </div>
                  </Col>
                ))}

                <Col></Col>
              </Row>
            </>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhyChoose;
