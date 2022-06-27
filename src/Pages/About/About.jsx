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

const bannerdata = {
  img: 'about-banner.jpg',
  title: "hii",
  text: "Custom MXR experiences to empower your business with a new dimension of virtual reality, effectively used in multiple industries"
}
const About = () => {
  return (
    <div>
      <Innerbanner banner={bannerdata} />
      <Readytotalk />
      <Values />
      <WhoWeAre />
      <SecretSauce />
      <Vision />
      <HireUs />
      <Process title="WE SIMPLIFY SOFTWARE DEVELOPMENT PROCESS" />
      <TimeLine />
    </div>
  )
}

export default About
