import React from 'react';
import './process.css';
import process from '../../assets/icons/process/process.jpg';
import process2 from '../../assets/icons/process/process2.jpg';
import { Container } from 'react-bootstrap-v5';
function Process(props) {
  return (
    <div className='mxr__process'>
    <Container>
      <h3 className='mxr__section-title'>{props.title}</h3>
      <img src={process} alt="process"/>
      <img src={process2} alt="process sm"/>
    </Container>
    </div>
  )
}

export default Process
