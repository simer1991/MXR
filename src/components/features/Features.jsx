import React from 'react';
import './features.css';
import { Container,Card,CardGroup,Col,Row} from 'react-bootstrap-v5';
import webdesingn from '../../assets/icons/features/webdesingn.png';
import mobile from '../../assets/icons/features/mobile.png';
import vr from '../../assets/icons/features/vr.png';
import augumented from '../../assets/icons/features/augumented.png';
import virtual from '../../assets/icons/features/virtual.png'
import mixed from '../../assets/icons/features/mixed.png'
const Features = () => {
  return (
    <div className="mxr__features mxr__section">
    <Container>
      <h3 className="mxr__section-title">WHAT WE CAN HELP YOU WITH</h3>
    <Row>
      <Col>
        <Card>          
          <img src={webdesingn} alt="WEB DESIGN AND DEVELOPMENT" />
          <Card.Title>WEB DESIGN AND DEVELOPMENT</Card.Title>
          <Card.Body>
            <Card.Text>
            Our immersive web development ideas are all what a user would want in his website. When it comes to design a website should look attractive, theme based and should be easy to use.
            </Card.Text>
          </Card.Body>
          <Card.Link href="#">Explore </Card.Link>
        </Card>
      </Col>
      <Col>
        <Card>
          <img src={mobile} alt="MOBILE APP DEVELOPMENT" />
          <Card.Title>MOBILE APP DEVELOPMENT</Card.Title>          
          <Card.Body>
            <Card.Text>
            MXR team thrives to create best software applications in the form of mobile apps which cover all the requirements of client side.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Link href="#">Explore</Card.Link>
        </Card>
      </Col>
      <Col>
        <Card>
          <img src={vr} alt="VR 360" />
          <Card.Title>VR 360</Card.Title>
          <Card.Body>
            <Card.Text>
            Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world. Applications of virtual reality include entertainment and education
            </Card.Text>
          </Card.Body>
          <Card.Link href="#">Explore</Card.Link>
        </Card>
      </Col>
    </Row>
    <Row> 
      <Col>
        <Card>            
            <img src={augumented} alt="Augumented Reality" />  
            <Card.Title>AUGUMENTED REALITY</Card.Title>         
            <Card.Body>
            <Card.Text>
              Meta Extended Reality (MXR) believes and promises to deliver the best services in regards to auditory effects, visual effects, sensory requirements and all that comes under AR.      </Card.Text>
            </Card.Body>
            <Card.Link href="#">Explore</Card.Link>
        </Card>
      </Col>
      <Col>
      <Card>
          <Card.Img variant="top" src={virtual} />
          <Card.Title>VIRTUAL REALITY</Card.Title>
            <Card.Body>
              <Card.Text>
              MXR provides its users a whole new world and experience to the actual VR technology and application. Turning your dream environment and imaginations into virtual reality is what we do at MXR.      </Card.Text>
            </Card.Body>
            <Card.Link href="#">Explore</Card.Link>
          </Card>
      </Col>
      <Col>
          <Card>            
            <Card.Img variant="top" src={mixed} />
            <Card.Title>MIXED REALITY</Card.Title>
            <Card.Body>
              <Card.Text>
              As the name suggests, MR is the blending of physical and virtual environments to create new digitized environment and visualizations.
              </Card.Text>
            </Card.Body>
            <Card.Link href="#">Explore</Card.Link>
          </Card>
      </Col>
    </Row>
</Container>
  </div>
  )
}

export default Features
