import React from 'react';
import './process.css';
import process from '../../assets/icons/process/process.jpg';
import process2 from '../../assets/icons/process/process2.jpg';
import { Container } from 'react-bootstrap-v5';
function Process(props) {
  return (
    <Container>
      <h3>{props.title}</h3>
      <img src={process}/>
      <img src={process2}/>
    </Container>
  )
}

export default Process
