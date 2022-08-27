import React from 'react'
import { Innerbanner, Process, Readytotalk } from '../../components'
import Benifits from '../vr360/Benifits';
import images from '../../assets/icons/benifits/mr.png'
import MixedReality from './MixedReality';
import ClientsDevelopment from './ClientsDevelopment';
import mr from '../../assets/icons/mixed/mr.jpg'
import TechnologyWork from '../vr/TechnologyWork';
import Project from '../project/Project';
import { Container } from 'react-bootstrap-v5';
import { Helmet } from 'react-helmet';


const bannerdata = {
  img: 'mr.jpg',
  title: "YOUR CLASSROOM WITH MR",
  text: "Expanding your classroom with MR is easier than ever. With simple tools, students can immerse themselves in learning, and dive deeper into each subject."
}

const dataList =[
  { id:"1",
   heading:"EXPLORE WITH MXR",
   images:<img src={images} alt='benifits of vr 360'/>,
   pharagraphs:[
    "360° Virtual Reality (VR) Tours became a perfect marketing tool in real estate and design. It is particularly useful for those projects that are still in the development stage or under construction. Regardless of the project location or its stage of completion, a client or an investor has an opportunity not only to see how the project will look like, but also is able to walk around and feel the space. Thousands of brands have created 360 Virtual Reality Tours, including agencies, hotels, destination marketers, corporate recruiters, real estate brokers, photographers, tour operators, and restaurant owners.",
    "MR delivers an unrivalled learning environment by fusing the real and virtual worlds. It has the ability to completely transform how modern businesses and sectors conduct training programmes. MR offers the way to the next level of learning experience, from industrial training like hands on learning to corporate training like soft skills.",
  ],
  },
];

const readytotalk = {
  img: 'MR.jpg',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const formdata=[
  {
   heading:<h6>Project Type *</h6>,
   labels:
   [
     'Safety Training',
     'Repair & Maintenance',
     'Healthcare',
     'Remote Operations',
   ],
  }
];

function MR() {
  return (
    <div>
      <Helmet>
        <title>Mixed Reality - MXR</title>
        </Helmet>
       <Innerbanner banner={bannerdata}/>
       <Benifits data={dataList}/>
       <MixedReality />
       <Process title="OUR SOFTWARE DEVELOPMENT PROCESS" />
       <ClientsDevelopment />
       <div className='mxr__classroom mxr__section'>
        <Container>
        <h3 className='mxr__section-title'>MR IN CLASSROOM</h3>
       <img src={mr}/>
       </Container>
       </div>
       <Readytotalk discuss={readytotalk} />
       <TechnologyWork />
       <Project form={formdata} />
    </div>
  )
}

export default MR
