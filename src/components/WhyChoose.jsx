import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap-v5'

const WhyChoose = (props) => {
  return (
    <div className='mxr__whychoose mxr__section'>
      <Container>
        <div>
            {props.benifit.map((list,index)=>(
                <>
                <Row>
                <Col>
                 <p>{list.icon}</p>
                <h3>{list.heading}</h3>
                <h5>{list.title}</h5>
                </Col>
                </Row>
                </>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default WhyChoose
