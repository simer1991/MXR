import React from 'react'
import './readytotalk.css'
import { Container, Row, Col } from 'react-bootstrap-v5';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Outerdiv = styled.div`background-image: url('${require(`../../assets/icons/readytotalk/ready.jpg`)}')`;

const Readytotalk = (props) => {
  return (
    <div className='mxr__readytotalk mxr__section'>
      <Outerdiv banner={props.discuss.img}  >
        <Container>
          <Row>
            <Col lg={12} md={12} className="ready">
              <h2>{props.discuss.title}</h2>
              <p>{props.discuss.text}</p>
              <Link to="/contact"  className="mxr__section-btn" >{props.discuss.button}</Link>
            </Col>
          </Row>
        </Container>
      </Outerdiv >
    </div>
  )
}

export default Readytotalk
