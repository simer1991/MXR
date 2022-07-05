import React from 'react'
import { Innerbanner, Readytotalk } from '../../components'
import images from '../../assets/icons/benifits/projects.jpg'
import Benifits from '../vr360/Benifits'
import { Container, Row,Col } from 'react-bootstrap-v5'
import virtual from '../../assets/images/projects/virtual.jpg'
import { Link } from 'react-router-dom';

const bannerdata = {
  img: 'projects.jpg',
  title: "PROJECTS",
}

const dataList =[
  { id:"1",
   heading:"VIRTUAL REALITY MAINTENANCE SIMULATOR",
   images:<img src={images} alt='benifits of vr 360'/>,
   pharagraphs:[
   "Any new and innovative ideas are welcomed in our organization and we will provide you the right kind of R&D service which will act as a fuel to kick start your new business objective. Meta Extended Reality (MXR) is an organization which not only creates technological solutions but also helps & guides people who want to develop something of their own. We support and guide you throughout your innovative journey by providing tech support, R&D engineers and a team of experienced people.",
  ],
  link:<input type="button" value="READ MORE" />
  },
];

const readytotalk = {
  img: 'python.webp',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const Projects = () => {
  return (
    <div>
     <Innerbanner banner={bannerdata} />
     <Benifits data={dataList}/>
     <div>
      <Container>
        <Row>
        <Col>
        <h3>VIRTUAL REALITY WAREHOUSE SAFETY TRAINING</h3>
        <p>Compliance with warehouse safety regulations is critical for the protection of people’s lives and property. The use of virtual reality technology enables learners to quickly acquire proper behaviour and safety skills in a warehouse environment that is as close to reality as possible without putting themselves in danger.</p>
        <Link to="/project2" className="mxr__section-btn" >READ MORE</Link>
        </Col>
        <Col>
        <img src={virtual} />
        </Col>
        </Row>
      </Container>
     </div>
     <Readytotalk discuss={readytotalk} />
    </div>
  )
}

export default Projects
