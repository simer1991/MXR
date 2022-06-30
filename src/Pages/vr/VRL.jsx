import React from 'react'
import Platform from './Platform'
import WhatWeCanDoo from './WhatWeCanDoo'
import Process from '../../components/process/Process'
import TechnologyWork from './TechnologyWork'
import { Innerbanner } from '../../components'
import Project from '../project/Project'
import vr from '../../assets/icons/intro/vr.png'
import Design from './Design'
import KeyBenifits from './KeyBenifits'

const bannerdata = {
  img: 'vr.jpg',
  title: "VIRTUAL REALITY TRAINING",
  text: "Immersive learning evolve your staff’s skills more effectively through virtual reality training."
}

const formdata=[
  {
   heading:<h6>Project Type *</h6>,
   labels:
   [
     'VR for Corporate Training',
     'VR for Health & Safety',
     'Retail VR Lab for trade marketing',
     'VR for marketing exhibitions',
     'VR for sales presentations',
     'VR quest',
     'VR showroom',
     'VR welcome tour 360 panoramic',
     'VR tour',
     'Interactive VR set',
   ],
  }
];

const introduction=[
  {
    image:<img src={vr} alt="virtual reality"/>,
    title:<h3 className='mxr__section-title'>DESIGNED TO DELIVER RESULTS AND INCREASE KNOWLEDGE RETENTION</h3>,
    features:[
      'Process driven training',
      'Perception based training',
      'Exploration based training',
    ],
  }
]
 
function VRL() {
  return (
    <div>
      <Innerbanner banner={bannerdata}/>
      <Design intro={introduction}/>
      <WhatWeCanDoo />
      <KeyBenifits />
      <Platform />
      <Process title="OUR SOFTWARE DEVELOPMENT PROCESS"/>
      <TechnologyWork />
      <Project form={formdata} />
    </div>
  )
}

export default VRL
