import React from 'react'
import Platform from './Platform'
import WhatWeCanDoo from './WhatWeCanDoo'
import Process from '../../components/process/Process'
import TechnologyWork from './TechnologyWork'

function VRL() {
  return (
    <div>
      <WhatWeCanDoo />
      <Platform />
      <Process title="OUR SOFTWARE DEVELOPMENT PROCESS"/>
      <TechnologyWork />
    </div>
  )
}

export default VRL
