import React from 'react'
import { Innerbanner, Process, Readytotalk } from '../../components'
import Landscape from './Landscape'
import Benifits from '../vr360/Benifits'
import images from '../../assets/icons/benifits/ri.png'


const bannerdata = {
  img: 'services-research and innovation.jpg',
  title: "R&D AND INNOVATION",
  text: "we will provide you the right kind of R&D service which will act as a fuel to kick start your new business objective."
}

const dataList =[
  { id:"1",
   
   images:<img src={images} alt='benifits of vr 360'/>,
   pharagraphs:[
    "Any new and innovative ideas are welcomed in our organization and we will provide you the right kind of R&D service which will act as a fuel to kick start your new business objective. Meta Extended Reality (MXR) is an organization which not only creates technological solutions but also helps & guides people who want to develop something of their own. We support and guide you throughout your innovative journey by providing tech support, R&D engineers and a team of experienced people.",
  ],
  },
];

const readytotalk = {
  img: 'python.webp',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const RI = () => {
  return (
    <div>
      <Innerbanner banner={bannerdata} />
      <Benifits data={dataList}/>
      <Landscape />
      <Readytotalk discuss={readytotalk} />
      <Process title="OUR SOFTWARE DEVELOPMENT PROCESS" />
     
    </div>
  )
}

export default RI
