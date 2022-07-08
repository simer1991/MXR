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

<<<<<<< HEAD
const dataList =[
  { id:"1",
   heading:"VIRTUAL REALITY MAINTENANCE SIMULATOR",
   images:<img src={images} alt='benifits of vr 360'/>,
   pharagraphs:[
   "Training in the maintenance of large-scale facilities such as wind turbines is prohibitively expensive. Delivering personnel to the workplace and training them on an actual installation is not only a time investment, but also a substantial costly one, especially if the installation is in a remote region.",
  ],
  link:<input type="button" value="READ MORE" />
  },
];

=======
>>>>>>> ca461ec2a76abf96eb210e2962ceb826ffad8854
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
     <div className='main_project mxr__section'>
      <Container>
        <Row>
          <Col md={6} sm={12}>
           <img src={images}/>
          </Col>
          <Col md={6} sm={12}>
          <h3>VIRTUAL REALITY MAINTENANCE SIMULATOR</h3>
          <p>Training in the maintenance of large-scale facilities such as wind turbines is prohibitively expensive. Delivering personnel to the workplace and training them on an actual installation is not only a time investment, but also a substantial costly one, especially if the installation is in a remote region.</p>
          <Link to="/project1" className="mxr__section-btn" >READ MORE</Link>
          </Col>
        </Row>
         </Container>
         </div>
         <div  className=' main_project mxr__section 2nd_sec'>
          <Container>
          <Row>
        
        <Col md={6} sm={12} className='text_project'>
        <h3>VIRTUAL REALITY WAREHOUSE SAFETY TRAINING</h3>
        <p>Compliance with warehouse safety regulations is critical for the protection of people’s lives and property. The use of virtual reality technology enables learners to quickly acquire proper behaviour and safety skills in a warehouse environment that is as close to reality as possible without putting themselves in danger.</p>
        <Link to="/project2" className="mxr__section-btn" >READ MORE</Link>
        </Col>
        <Col md={6} sm={12} className='project_image'>
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
