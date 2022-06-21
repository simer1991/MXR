import React from 'react'
import './solution.css'
import { Container,Card, Row, Col} from 'react-bootstrap-v5';
import store from '../../assets/icons/solutions/store.png'
import remote from '../../assets/icons/solutions/remote.png'
import employee from '../../assets/icons/solutions/employee.png'
import virtual2 from '../../assets/icons/solutions/virtual2.png'
import digital from '../../assets/icons/solutions/digital.png'
import immersive from '../../assets/icons/solutions/immersive.png'
const Solution = () => {
  return (
    <div className='mxr__solution mxr__section'>
        <Container>
        <h3 className='mxr__section-title'>VR SOLUTIONS WE PROVIDE</h3>
        <Row>
          <Col>
            <Card>
            <img variant="top" src={store} alt="store"/>
            <Card.Body>
              <Card.Title>IN STORE ENGAGEMENT</Card.Title>
              <Card.Text>
              Our In store engagement program basically includes virtual try-ons and showrooms, AR catalog based apps, in store navigation solutions for bricks mortar businesses.
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <img variant="top" src={remote} alt="remote"/>
              <Card.Body>
                <Card.Title>REMOTE ASSISTANCE</Card.Title>
                <Card.Text>
                Industrial Augmented Reality application development services for equipment maintenance, quality control, smooth production, warehouse operations, and remote customer service.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <img variant="top" src={employee} alt="employee"/>
              <Card.Body>
                <Card.Title>EMPLOYEE TRAINING</Card.Title>
                <Card.Text>
                On the job education through the interactive simulation of workflow operations (equipment assembly, software installation, medical treatment).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <img variant='top' src={virtual2} alt="virtual"/>
              <Card.Body>
                <Card.Title>VIRTUAL TOUR</Card.Title>
                <Card.Text>
                VR based property tours for the real estate industry and virtual travel experiences (hotel tours, travel information, holiday booking interfaces).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <img variant="top" src={digital} alt="digital"/>
              <Card.Body>
                <Card.Title>DIGITAL HEALTH</Card.Title>
                <Card.Text>
                AR  and VR based guidance solutions for the operating theater, enhanced medical imaging, immersion therapy, and AR interfaces for medical equipment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card>
              <img variant="top" src={immersive} alt="immersive"/>
              <Card.Body>
                <Card.Title>IMMERSIVE ENTERTAINMENT</Card.Title>
                <Card.Text>
                AR and VR games for mobile devices and headsets, WebRTC solutions for popular browsers, multi layer video streaming, and photo editing apps.
                </Card.Text>
              </Card.Body>
          </Card>
          </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Solution
