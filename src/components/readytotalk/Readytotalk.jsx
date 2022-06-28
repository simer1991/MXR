import React from 'react'
import './readytotalk.css'
import { Container, Row, Col } from 'react-bootstrap-v5';
import styled from "styled-components";

const Outerdiv = styled.div`background-image: url('${require(`../../assets/icons/readytotalk/ready.jpg`)}')`;

const Readytotalk = (props) => {
  return (
    <div className='mxr__readytotalk mxr__section'>
      <Outerdiv banner={props.discuss.img}  >
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <h2>{props.discuss.title}</h2>
              <p>{props.discuss.text}</p>
              <button>{props.discuss.button}</button>
            </Col>
          </Row>
        </Container>
      </Outerdiv >
    </div>
  )
}

export default Readytotalk
