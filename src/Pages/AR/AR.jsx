import React from 'react'
import Capabilities from './Capabilities'
import Process from '../../components/process/Process'
import images from '../../assets/icons/benifits/ar-benifits.png'
import WhatWeCanDo from './WhatWeCanDo'
import Technology from './Technology'
import { Innerbanner, Readytotalk } from '../../components'
import Benifits from '../../Pages/vr360/Benifits'
import Project from '../project/Project'
import { Helmet } from 'react-helmet';


const dataList =[
  { id:"1",
   heading:"LEADING AR APP DEVELOPMENT COMPANY",
   images:<img src={images} alt='benifits of vr 360'/>,
   pharagraphs:[
    "Meta Extended Reality (MXR) is a leading augmented reality app development company with a team of experts capable of pushing the limits of the latest technologies. Boasting years of combined experience, MXR has created the best augmented reality experiences for a countless number of devices, platforms, and technologies.",
    "Our team is fully qualified to handle full cycle AR development, from developing a product strategy to delivering it with all the bells and whistles attached. Choose from a range of business models, including hiring an entire team or dedicated developers to see the project through to the end.",
  ],
  },
];

const bannerdata = {
  img: 'ar.webp',
  title: "AUGMENTED REALITY APP DEVELOPMENT",
  text: "Take your company to a new level of market supremacy with our outstanding AR development services"
}

const readytotalk = {
  img: 'about-banner.jpg',
  title: "READY TO DISCUSS YOUR PROJECT?",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const formdata=[
  {
   heading:<h6>Project Type *</h6>,
   labels:
   [
     'Tourism and culture AR apps',
     'Real estate AR apps',
     'Training and education AR apps',
     'Retail AR apps',
     'Healthcare AR apps',
   ],
  }
];

function AR() {
  return (
    <div>
      <Helmet>
        <title>AUGMENTED REALITY APP DEVELOPMENT | MXR</title>
        <meta name="description" content="MXR is UK based software development company delivering reliable and in-budget solutions for AR, VR, MR, Web and Mobile App development to clients globally." />
        </Helmet>
       <Innerbanner banner={bannerdata}/>
       <Benifits data={dataList}/>
       <WhatWeCanDo />
       <Capabilities />
       <Process title="OUR SOFTWARE DEVELOPMENT PROCESS"/>
       <Readytotalk discuss={readytotalk} />
       <Technology />
       <Project form={formdata}/>
    </div>
  )
}

export default AR
