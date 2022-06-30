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
                  <h3 className='mxr__section-title'>{list.heading}</h3>
                </Col>
                </Row>
                <Row>
                {list.lists.map((data,index)=>
                <Col sm={6}>
                  {data.icon}
                 <h5>{data.title}</h5>
                  <p>{data.text}</p>
                 </Col>
                 )}
               
                <Col>
                
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
