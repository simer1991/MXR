import React from 'react'
import { Innerbanner, Process, Readytotalk } from '../../components';
import mad from '../../assets/icons/intro/mad.png'
import Design from '../vr/Design';
import MobileDevelopment from './MobileDevelopment';
import Project from '../project/Project';
import Technology2 from './Technology2';

const bannerdata = {
  img: 'mad.jpg',
  title: "MOBILE DEVELOPMENT SERVICES",
  text: "Custom MXR experiences to empower your business with a new dimension of virtual reality, effectively used in multiple industries"
}

const introduction=[
  {
    image:<img src={mad} alt="virtual reality"/>,
    title:<h3 className='mxr__section-title'>MOBILE APP DEVELOPMENT SERVICES</h3>,
    features:[
      'Mobile development services for intergrated software systems',
      'Augmented reality for business driven mobile development',
      'Integration with existing software and hardware',
      'Creation of complex solutions from scratch',
      'Architectural solutions for mobile application',
      'APIs and 3rd party integrations',
    ],
  }
]

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
     'Mobile App Developments',
     'Android App Development',
     'IOS App Development',
     'Cross- Platform',
     'Business App Development',
   ],
  }
];

function MAD() {
  return (
    <div>
     <Innerbanner banner={bannerdata} />
     <Design intro={introduction}/>
     <MobileDevelopment />
     <Process title="WE SIMPLIFY SOFTWARE DEVELOPMENT PROCESS" />
     <Readytotalk discuss={readytotalk} />
     <Technology2 />
     <Project form={formdata} />
    </div>
  )
}

export default MAD
