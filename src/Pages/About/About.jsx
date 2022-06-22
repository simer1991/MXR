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

const About = () => {
  return (
    <div>
      <Innerbanner />
      <Readytotalk />
      <Values />
     <WhoWeAre />
     <SecretSauce />
     <Vision />
     <HireUs />
     <Process title="WE SIMPLIFY SOFTWARE DEVELOPMENT PROCESS"/>
     <TimeLine />
     </div>
  )
}

export default About
