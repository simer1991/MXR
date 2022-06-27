import React from 'react'
import Capabilities from './Capabilities'
import Process from '../../components/process/Process'
import images from '../../assets/icons/benifits/ar-benifits.png'
import WhatWeCanDo from './WhatWeCanDo'
import Technology from './Technology'
import Project from './Project'
import { Innerbanner, Readytotalk } from '../../components'
import Benifits from '../../Pages/vr360/Benifits'


const dataList =[
  { 
   id:"1", 
   heading:"LEADING AR APP DEVELOPMENT COMPANY",
   peharagraph:<p>Meta Extended Reality (MXR) is a leading augmented reality app development company with a team of experts capable of pushing the limits of the latest technologies. Boasting years of combined experience, MXR has created the best augmented reality experiences for a countless number of devices, platforms, and technologies.</p>,
   images:<img src={images} alt='benifits of vr 360'/>
  }
];

const bannerdata = {
  img: 'ar.jpg',
  title: "AUGMENTED REALITY APP DEVELOPMENT",
  text: "Take your company to a new level of market supremacy with our outstanding AR development services"
}

const readytotalk = {
  img: 'about-banner.jpg',
  title: "READY TO DISCUSS YOUR PROJECT?",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}
function AR() {
  return (
    <div>
       <Innerbanner banner={bannerdata}/>
       <Benifits data={dataList}/>
       <WhatWeCanDo />
       <Capabilities />
       <Process title="OUR SOFTWARE DEVELOPMENT PROCESS"/>
       <Readytotalk discuss={readytotalk} />
       <Technology />
       <Project />  
    </div>
  )
}

export default AR
