import React from 'react'
import  {FaHourglassHalf,FaUserShield}     from 'react-icons/fa';
import {Row,Container,Col,Card} from 'react-bootstrap-v5';
const SecretSauce = () => {
  return (
    <div className='mxr__secretsauce mxr__section'>
      <Container>
        <h3 className='mxr__section-title'>OUR “SECRET SAUCE”</h3>
      <Row>
          <Col sm={4} md={4} lg={4}>
            <Card>
            <FaHourglassHalf size={50} />
            <Card.Body>
              <Card.Title>SKILLS</Card.Title>
              <Card.Text>
              Our team consist of engineers well versed in different skills e.g. C++, Java, C#, PHP, Objective C, JavaScript and other languages with experience in multitude of underlying platforms, databases, frameworks, APIs and IDEs.
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} md={4} lg={4}>
            <Card>
             <FaHourglassHalf size={50} />
              <Card.Body>
                <Card.Title>SPEED</Card.Title>
                <Card.Text>
                We firmly believe in time limits. We do not over promise we over deliver our promise. We are able to quickly scale up or downsize according to client’s needs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} md={4} lg={4}>
            <Card>
                <FaUserShield size={50}/>
              <Card.Body>
                <Card.Title>RELIABILITY</Card.Title>
                <Card.Text>
                Our reliability is the yardstick on which our performance is evaluated. Our commitment on timely deliveries helps ensure that we remain the best possible choice for our clients.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SecretSauce
