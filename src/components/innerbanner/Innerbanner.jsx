import React from 'react'
import { Container, Row, Col } from 'react-bootstrap-v5';
import './innerbanner.css';
import styled from "styled-components";


const Outerdiv = styled.div`background-image: url('${require(`../../assets/icons/innerbanner/about-banner.jpg`)}')`;

const Innerbanner = (props) => {
  return (
    <div >
      <Outerdiv banner={props.banner.img}  >
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <h2>{props.banner.title}</h2>
              <p>{props.banner.text}</p>
            </Col>
          </Row>
        </Container>
      </Outerdiv >
    </div >
  )
}

export default Innerbanner
