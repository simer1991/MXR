import React from 'react'
import { Container,Tab,Tabs,Row,Col } from 'react-bootstrap-v5'
import rendering from '../assets/icons/technologyservices/whyshould/rendering.jpg'
import cost from '../assets/icons/technologyservices/whyshould/cost.png'
import multiple from '../assets/icons/technologyservices/whyshould/multiple.png'
import sound from '../assets/icons/technologyservices/whyshould/sound.jpg'


const WhyShouldUnity = () => {
  return (
    <div className='mxr__whyshouldunity mxr__section'>
      <Container>
        <h3 className='mxr__section-title'>WHY SHOULD YOU OPT FOR UNITY?</h3>
         <Tabs className="mb-3 mxr__tabs">
         <Tab  eventKey="Cross-platform Development" title="Cross-platform Development">
            <Row>
                <Col md={6} sm={12}>
                   <img src={rendering} alt="Real Estate"/>
                </Col>
                <Col md={6} sm={12}>
                    <p>Unity software runs on a variety of platforms, including Windows, Mac OS X, and Linux. What’s more impressive is the ability to create Unity apps for up to 25 different platforms. Smaller platforms like FireOS, Magic Leap, and Tizen join industry behemoths like iOS, Android, Mac, Windows, PlayStation, and Xbox. As a result, by using Unity to create games for several platforms, you may reach a far larger audience.</p>
                </Col>
            </Row>
            </Tab>
            <Tab eventKey='Full Support Of C# Libraries' title='Full Support Of C# Libraries'>
                <Row>
                    <Col md={6} sm={12}>
                      <img src={multiple} alt="automotive" />
                    </Col>
                    <Col md={6} sm={12}>
                      <p>The C# programming language is utilised in the modern Unity engine, and it can also be used in Unity development. Because C# is widely regarded as one of the most straightforward C-family languages to learn, Unity development becomes extremely simple and accessible to anyone who knows C#, and there are hundreds of them. With this kind of appeal, you may attract developers from all walks of life to work on your project.</p>
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey='Animation System' title='Animation System'>
                <Row>
                    <Col md={6} sm={12}>
                      <img src={sound} alt="virtual trade show" />
                    </Col>
                    <Col md={6} sm={12}>
                      <p>Unity’s complex animation system is known as Mecanim informally. With a streamlined interface for collecting animation clips and previewing them, the technology makes it incredibly easy to produce animation. Mecanim provides excellent functionality for humanoid characters, such as the ability to retarget different animations and even change the muscle definitions of the characters. This will significantly improve the realism of the moving characters in your project.</p>
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey='User Interfaces' title='User Interfaces'>
                <Row>
                    <Col md={6} sm={12}>
                      <img src={cost} alt="" />
                    </Col>
                    <Col md={6} sm={12}>
                      <p>Unity includes the ability to customise user interfaces. As a result, developers may design desktop and mobile apps solely using the engine’s capabilities, reducing development time and simplifying application support. Unity allows you to optimise content for different screen resolutions and devices, and you may combine both 2D and 3D material into such apps.</p>
                    </Col>
                </Row>
            </Tab>
         </Tabs>
      </Container> 
    </div>
  )
}

export default WhyShouldUnity
