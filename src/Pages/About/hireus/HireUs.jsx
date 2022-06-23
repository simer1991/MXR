import React from 'react'
import './hireus.css'
import hireus from '../../../assets/icons/hireus/hireus.png'
import { Container,Row,Col } from 'react-bootstrap-v5'
import   {FaCheckCircle}     from 'react-icons/fa';

const HireUs = () => {
  return (
    <div>
      <Container>
        <Row>
            <Col>
               <img src={hireus} alt="hire us" />
            </Col>
            <Col>
               <h3>WHY SHOULD YOU HIRE US</h3>
               <p>We believe in people and technology, the never ending self improvement that pushes us to strive for excellence.After all those years on the market, we have learned that life is too short for building software no one needs and no one will use. Before starting a new partnership, we don’t ask if the project is feasible. We want to know if it’s desirable, will it make a difference.</p>
               <p><FaCheckCircle /> Our team get involved and care about our client’s success</p>
               <p><FaCheckCircle /> We deliver excellence</p>
               <p><FaCheckCircle /> We’re open to your ideas</p>
               <p><FaCheckCircle /> We are innovative</p>
               <p><FaCheckCircle /> We have deep industry expertise</p>
               <p><FaCheckCircle /> We are on time and on budget</p>
         </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HireUs
