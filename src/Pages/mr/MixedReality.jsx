import React from 'react'
import { Container, Nav,Tab,Row,Col} from 'react-bootstrap-v5'
import increase from '../../assets/icons/mixed/increase.png';
import contextual from '../../assets/icons/mixed/contextual.png';
import explore from '../../assets/icons/mixed/explore.png';
import guided from '../../assets/icons/mixed/guided.png';
import microsoft from '../../assets/icons/mixed/microsoft.png';
import remote from '../../assets/icons/mixed/remote.png';
import social from '../../assets/icons/mixed/social.png';
import visiualisation from '../../assets/icons/mixed/visiualisation.png';

const MixedReality = () => {
  return (
    <div className='mxr__mixedreality mxr__section'>
    <Container>
    <h3 className='mxr__section-title'>MIXED REALITY APPLICATIONS</h3>
   <Tab.Container id="left-tabs-example" defaultActiveKey="training">
  <Row>
    <Col sm={4} >
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="training">INCREASE STUDENT ENGAGEMENT IN CLASSROOM WITH MR</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="product">VISUALISATION & COLLABORATION</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="virtual">SOCIAL AND EMOTIONAL LEARNING</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="visiual">EXPLORE EVEN MORE MR DEVICES</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="design">MICROSOFT HOLOLENS2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="reality">REMOTE ASSISTANCE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="web">GUIDED LEARNING</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="data">CONTEXTUAL DATA DELIVERY</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={8} >
      <Tab.Content>
      <Tab.Pane eventKey="training">
        <div>
        <img src={increase} alt="INCREASE STUDENT ENGAGEMENT IN CLASSROOM WITH MR"/>
        <p>Increase overall success and improve learning outcomes when students learn with 3D technologies.</p>
        </div>
        </Tab.Pane>
        <Tab.Pane eventKey="product">
         <div>   
         <img src={visiualisation} alt="VISUALISATION & COLLABORATION" />
         <p>The ability to visualise new designs, layouts and equipment in 3D at 1:1 scale on location. Identify and check for clashes or take measurements.</p>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="virtual">
        <div>   
         <img src={social} alt="SOCIAL AND EMOTIONAL LEARNING" />
         <p>Fostering social and emotional learning Mixed Reality breaks through emotional barriers so students can experience life from new perspectives. With this immersive technology, you’ll create a setting for learners to collaborate and give them access to once out of reach experiences.</p>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="visiual">
        <div>   
         <img src={explore} alt="EXPLORE EVEN MORE MR DEVICES" />
         <p>The best way to experience mixed reality is on the industry’s most innovative devices, designed with MR in mind.</p>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="design">
        <div>   
         <img src={microsoft} alt="MICROSOFT HOLOLENS2" />
         <p>Hololens2 offers the most comfortable and immersive MR experience available all with the reliability, security, and scalability of Microsoft</p>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="reality">
        <div>   
         <img src={remote} alt="REMOTE ASSISTANCE" />
         <p>Empowering employees to work together by allowing technicians hands free access to remote experts. Providing technical guidance, remote auditing, screen sharing and annotating.</p>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="web">
        <div>   
         <img src={guided} alt="GUIDED LEARNING" />
         <p>Augmenting holographic instructions on to equipment to allow step by step guidance, training and fault finding.</p>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="data">
        <div>   
         <img src={contextual} alt="web" />
         <p>Access to real time data and information at the point of need to improve operational efficiency. This could be anything from equipment performance metrics temperature, operating speed to logistic, safety or retail information.</p>
         </div>
        </Tab.Pane>
      </Tab.Content>
      </Col>
    </Row>
    </Tab.Container>
      </Container>
    </div>
  )
}

export default MixedReality
