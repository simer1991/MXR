import React from "react";
import { Container, Row, Col } from "react-bootstrap-v5";
import styled from "styled-components";

const Outerdiv = styled.div`
  background-image: url("assets/images/Innerbanner/${(props) =>
    props.$banner}");
`;
const Blogbanner = (props) => {
  return (
    <div className="internal_page_banner blog_banner">
      <Outerdiv $banner={props.banner.img}>
        <Container>
          <Row>
            <Col lg={12} md={12}>
              <h1>{props.banner.title}</h1>
            </Col>
          </Row>
        </Container>
      </Outerdiv>
    </div>
  );
};

export default Blogbanner;
