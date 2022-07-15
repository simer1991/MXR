import React from 'react'
import Readytotalk from '../../components/readytotalk/Readytotalk';
import Innerbanner from '../../components/innerbanner/Innerbanner';
import Values from '../Values';
import WhoWeAre from './WhoWeAre';
import SecretSauce from './SecretSauce';
import Vision from './vision/Vision';
import HireUs from './hireus/HireUs';
import Process from '../../components/process/Process'
import TimeLine from './timeline/TimeLine';
import "./about.css"
import { Helmet } from 'react-helmet';

const bannerdata = {
  img: 'about-banner.jpg',
  title: "THRIVING TO BE YOUR ONLY CHOICE",
  text: "Custom MXR experiences to empower your business with a new dimension of virtual reality, effectively used in multiple industries"
}

const readytotalk = {
  img: 'about-banner.jpg',
  title: "READY TO TALK",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"LETS DO IT",
}
const About = () => {
  return (
    <div>
       <Helmet>
        <title>About Us | MXR</title>
        <meta name="description" content="MXR is UK based software development company delivering reliable and in-budget solutions for AR, VR, MR, Web and Mobile App development to clients globally." />
        </Helmet>
      <Innerbanner banner={bannerdata} />
      <WhoWeAre />
      <Vision />
      <SecretSauce />
      <TimeLine />
      <HireUs />
      <Values />
      <Process title="WE SIMPLIFY SOFTWARE DEVELOPMENT PROCESS" />
      <Readytotalk discuss={readytotalk}/> 
    </div>
  )
}

export default About
