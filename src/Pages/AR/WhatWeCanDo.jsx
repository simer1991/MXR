import React from 'react'
import { Container,Tab,Row,Col,Nav } from 'react-bootstrap-v5'
import training from '../../assets/icons/whatwecando/training.png'
import product from '../../assets/icons/whatwecando/product.png'
import virtual from '../../assets/icons/whatwecando/virtual.png'
import visiual from '../../assets/icons/whatwecando/visiual.jpg'
import interior from '../../assets/icons/whatwecando/interior.png'
import reality from '../../assets/icons/whatwecando/reality.png'
import web from '../../assets/icons/whatwecando/web.png'

const WhatWeCanDo = () => {
  return (
    <div className='mxr__whatwecando mxr__section vertical_tabs'>
      <Container>
        <h3 className='mxr__section-title'>WHAT WE CAN DO FOR YOU</h3>
        <Tab.Container id="left-tabs-example" defaultActiveKey="training">
  <Row>
    <Col sm={3} md={6}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="training">AUGMENTED TRAINING AND SIMULATIONS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="product">AUGMENTED PRODUCT CONFIGURATORS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="virtual">AUGMENTED VIRTUAL TOURS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="visiual">AUGMENTED VISUAL PRESENTATIONS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="design">AR FOR INTERIOR DESIGN AND REAL ESTATE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="reality">AUGMENTED REALITY GAMES</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="web">WEB AR</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9} md={6}>
      <Tab.Content>
      <Tab.Pane eventKey="training">
        <div>
        <img src={training} alt="AUGMENTED TRAINING AND SIMULATIONS"/>
        <p>AR education apps are becoming increasingly popular in visualizing complex information. We have developed several augmented reality training apps for education, including AR learning apps for auto repair, wheel replacement, and water skiing.</p>
        </div>
        </Tab.Pane>
        <Tab.Pane eventKey="product">
         <div>   
         <img src={product} alt="AUGMENTED PRODUCT CONFIGURATORS" />
         <p>Customization is one of the biggest selling points in e-commerce and lots of other industries. With AR configurators, businesses and consumers can visualize and modify a product, look at it in more detail, and test its functions. As one of the top augmented reality companies we have created AR configurators to suit different business needs, as we can do for you.</p>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="virtual">
        <div>   
         <img src={virtual} alt="AUGMENTED VIRTUAL TOURS" />
         <p>We use augmented reality to add some unique interactive elements to locations to enhance the exploration process and bring a new experience to the viewer. This can be very helpful in case you want to engage the audience in the exploration process and deliver an enhanced experience of interaction with objects.</p>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="visiual">
        <div>   
         <img src={visiual} alt="AUGMENTED VISUAL PRESENTATIONS" />
         <p>When you need to showcase a product, few things are more impressive than presenting it digitally via augmented reality. Our team will capture the structure, appearance, and other characteristics of your product with great accuracy, and make sure that the AR model is just as distinguished as the original, and accessible on different platforms, including mobile AR.</p>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="design">
        <div>   
         <img src={interior} alt="AR FOR INTERIOR DESIGN AND REAL ESTATE" />
         <p>We are a leading company in the development of markerless AR solutions such as interior design apps. Starting from high poly models creation and perfectly accurate surface detection to uniquely useful feature integration and app deployment to any platform that supports AR we are ready to create a fully immersive experience that will convince users of your quality and professional approach.</p>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="reality">
        <div>   
         <img src={reality} alt="reality" />
         <p>Over the past several years, the game industry has been reinvigorated with some of the best AR games ever developed, and the augmented reality games market is stronger than ever.</p>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="web">
        <div>   
         <img src={web} alt="web" />
         <p>Applying our longstanding experience with all forms of AR, we can create unparalleled experiences for the web. These applications will be accessible on all modern movie devices and take advantage of hardware without promoting downloads of standalone apps. Our WebAR apps can be a valuable addition to your website and a boon to your business.</p>
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

export default WhatWeCanDo
