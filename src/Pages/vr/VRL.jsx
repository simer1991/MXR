import React from 'react'
import Platform from './Platform'
import WhatWeCanDoo from './WhatWeCanDoo'
import Process from '../../components/process/Process'
import TechnologyWork from './TechnologyWork'
import { Innerbanner } from '../../components'

const bannerdata = {
  img: 'vr.jpg',
  title: "VIRTUAL REALITY TRAINING",
  text: "Immersive learning evolve your staff’s skills more effectively through virtual reality training."
}
function VRL() {
  return (
    <div>
      <Innerbanner banner={bannerdata}/>
      <WhatWeCanDoo />
      <Platform />
      <Process title="OUR SOFTWARE DEVELOPMENT PROCESS"/>
      <TechnologyWork />
    </div>
  )
}

export default VRL
