import React from 'react'
import { Container,Row,Col,Tabs,Tab } from 'react-bootstrap-v5'
import {FaPaintBrush,FaUser,FaSearchDollar,FaPenNib} from 'react-icons/fa';
import research from '../../assets/icons/research/research.jpg'
import proof from '../../assets/icons/research/proff.jpg'
import viable from '../../assets/icons/research/viable.jpg'

const Landscape = () => {
  return (
    <div className='mxr__landscape mxr__section'>
      <Container>
        <div>
        <h3 className='mxr__section-title'>SERVICE LANDSCAPE</h3>
        <Row>
          <Col>
            <FaPaintBrush size={30}/>
            <h5>TECHNOLOGY RESEARCH</h5>
            <p>We will design and engineer a unique and effective technological solution that will generate a competitive advantage and become a robust tool for your success, helping you stand out on the market.</p>
          </Col>
          <Col>
            <FaUser size={30} />
            <h5>POC AND PROTOTYPING</h5>
            <p>Our business analysts and market research specialists will help you develop a proof of oncept for your idea, and our team of R&D engineers will create a prototype that will impress any investor.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <FaSearchDollar size={30}/>
            <h5>FULL CYCLE R&D</h5>
            <p>Being always ahead of competitors requires a constant R&D process, and we can become a personal research and development team for you to equip your business with an unstoppable innovation that drives profit.</p>
          </Col>
          <Col>
            <FaPenNib size={30} />
            <h5>MVP DEVELOPMENT</h5>
            <p>We will create a minimum viable product for your software startup, so that you can get quick market feedback without a significant investment and keep polishing your product until it is a complete fit for its market and target audience.</p>
          </Col>
        </Row>
        </div>
        <div>
        <Tabs>
          <Tab eventKey='research' title="Research">
           <Row>
            <Col>
              <img src={research} alt="reseach"/>
              </Col>
              <Col>
              <p>Our R&D analysts and market research specialists conduct comprehensive, in depth research of your idea needed for its validation, defining the scope of work, framing the budget, and identifying all the technical constraints and risks. It is a fundamental part of the R&D process necessary for establishing technology excellence and the strong market potential of the future product</p>
            </Col>
           </Row>
          </Tab>
          <Tab eventKey='Proof Of Concept' title="Proof Of Concept">
            <Row>
              <Col>
               <img src={proof} alt="Proof Of Concept" />
              </Col>
              <Col>
              <p>Based on the previous research, we build an initial product prototype to establish the viability of the idea and solution, which is necessary for moving forward with the R&D process. We provide maximum flexibility during this process, where the client gets complete freedom of creativity accompanied with professional R&D consulting.</p>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey='Viable Product' title="Viable Product">
            <Row>
              <Col>
                <img src={viable} alt="Viable Product"/>
              </Col>
              <Col>
              <p>Meta Extended Reality (MXR) is the right way to deliver the product to the market on time before the competitors do. It is necessary for further solution validation and quick market feedback. Our R&D engineers will create a minimum viable product based on your idea and solution prototypes, so that your solution can pass a battle test and get ready for further improvements</p>
              </Col>
            </Row>
          </Tab>
        </Tabs>
        </div>
      </Container>
    </div>
  )
}

export default Landscape
