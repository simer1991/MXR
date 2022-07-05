import React from 'react'
import { Col, Container, Row } from 'react-bootstrap-v5'
import {FaCheckCircle} from 'react-icons/fa'

const Design = (props) => {
  return (
    <div className='mxr__design mxr__section mxr__developmentservice'>
      <Container>
      <Row>
      {props.intro.map((data,index)=>(
        <>
        <Col>
        {data.image}
        </Col>
         <Col>
         {data.title}
         <div>
        {data.features.map((list,index)=>(
            <p> <FaCheckCircle />{list}</p>
        ))}
        </div>
      </Col>
      </>
       ))}
      </Row>
      </Container>
    </div>
  )
}

export default Design
