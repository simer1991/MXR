import React from 'react'
import { Col, Container, Row,Tab,Tabs } from 'react-bootstrap-v5'
import ios from '../../assets/icons/mobiledevelopment/ios.png'
import broad from '../../assets/icons/mobiledevelopment/broad.jpg'
import fast from '../../assets/icons/mobiledevelopment/fast.png'
import support from '../../assets/icons/mobiledevelopment/support.jpg'

const MobileDevelopment = () => {
  return (
    <div className='mxr__mobiledevelopment mxr__section'>
      <Container>
        <h3 className='mxr__section-title'>WHY CHOOSE MXR FOR MOBILE DEVELOPMENT?</h3>
        <Tabs>
            <Tab eventKey="ios" title="IOS & Android">
                <Row>
                    <Col>
                    <img src={ios} alt="ios"/>
                    </Col>
                    <Col>
                    <p>We create top of the line mobile apps with innovative thinking and solid teamwork. This includes creating native apps with amazing performance, versatile cross platform apps, and even hybrid apps designed to take full advantage of browser capabilities. Besides fulfilling business goals, they are built with performance, reliability, and efficiency in mind.</p>
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="fast" title="Fast, Secure & Scalable Approach">
                <Row>
                    <Col>
                    <img src={fast} alt="fast"/>
                    </Col>
                    <Col>
                    <p>Working with us, you will surely be impressed at the speed and efficiency at which development progresses. That is not to say that the speed will cause any loss in quality. We will go above and beyond to provide the mobile experience you need and make it highly secure. It will also be crafted with future changes in mind, so you can scale and add new features at any time.</p>
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="support" title="Maintenance And Support">
                <Row>
                    <Col>
                    <img src={support} alt="support"/>
                    </Col>
                    <Col>
                    <p>One thing that differentiates our company from most others is our dedication to projects even past their release. We offer long term support for projects whenever needed, and do not hesitate to perform updates and perform maintenance. Some of our clients have been cooperating with us for over a decade on their app related projects. In fact, long term support is something that we routinely provide.</p>
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="broad" title="Broad Experience With Enterprises">
                <Row>
                    <Col>
                    <img src={broad} alt="broad"/>
                    </Col>
                    <Col>
                    <p>We work closely with businesses to understand their needs and create tailored app experiences for them, whether the users are employees or ordinary consumers/other groups. Our enterprise apps are built based on years of experience, input from business development experts, and of course, the company itself. They can be truly game changing in modifying and improving various business processes.</p>
                    </Col>
                </Row>
            </Tab>
        </Tabs>
      </Container>
    </div>
  )
}

export default MobileDevelopment
