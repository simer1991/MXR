import React from 'react'
import Readytotalk from '../../components/readytotalk/Readytotalk';
import Innerbanner from '../../components/innerbanner/Innerbanner';
import Values from '../Values';
import WhoWeAre from './WhoWeAre';
import SecretSauce from './SecretSauce';
import TimeLine from './timeline/TimeLine';


const About = () => {
  return (
    <div>
      <Innerbanner />
      <Readytotalk />
      <Values />
     <WhoWeAre />
     <SecretSauce />
     <TimeLine />
    </div>
  )
}

export default About
