import React from 'react'
import { Container, Row, Col } from 'react-bootstrap-v5';
import styled from "styled-components";


const Outerdiv = styled.div`
  background-image: url('assets/images/Innerbanner/${props => props.$banner}');  
  `;
const Blogbanner = (props) => {
  return (
    <div className='internal_page_banner' >
    <Outerdiv $banner={props.banner.img} >
    <Container>
          <Row>
            <Col lg={4} md={4} >
              <h2>{props.banner.title}</h2>
            </Col>
          </Row>
        </Container>
    </Outerdiv >
  </div >
  )
}

export default Blogbanner
