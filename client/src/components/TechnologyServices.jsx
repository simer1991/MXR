import React from 'react'
import { Container,Card,Row,Col } from 'react-bootstrap-v5'

const TechnologyServices = (props) => {
  return (
    <div className='mxr__technologyservices mxr__section mxr__solution internal_page_text_height'>
      <Container>
        <div>
        {props.service.map((list,index)=>(
                <>
                <Row>
                <Col>
                  <h3 className='mxr__section-title'>{list.heading}</h3>
                </Col>
                </Row>
                <Row>
              
                {list.data.map((lists,index)=>
                <Col lg={4}>
                <Card className='mxr__cards'>
                {lists.icon}
                <div className='card-body'>
                <Card.Title>{lists.title}</Card.Title>
                <Card.Text>{lists.text}</Card.Text>
                </div>
                </Card>
                </Col>
                 )}
                 
                 </Row>
                </>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default TechnologyServices
