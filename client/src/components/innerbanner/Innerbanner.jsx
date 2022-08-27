import React from 'react'
import { Container, Row, Col } from 'react-bootstrap-v5';
import './innerbanner.css';
import styled from "styled-components";


const Outerdiv = styled.div`
  background-image: url('assets/images/Innerbanner/${props => props.$banner}');  
  `;

const Innerbanner = (props) => {
  return (
    <div className='internal_page_banner' >
      <Outerdiv $banner={props.banner.img} >
        <Container>
          <Row>
            <Col lg={5} md={5} className="left_internal_page">
              <h1>{props.banner.title}</h1>
              <p>{props.banner.text}</p>
            </Col>
          </Row>
        </Container>
      </Outerdiv >
    </div >
  )
}

export default Innerbanner
