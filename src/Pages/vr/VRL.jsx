import React from 'react'
import Platform from './Platform'
import WhatWeCanDoo from './WhatWeCanDoo'
import Process from '../../components/process/Process'
import TechnologyWork from './TechnologyWork'
import Project from './Project'

const labels = [
  "a",
  "b",
  "c"
]


function VRL() {
  return (
    <div>
      <WhatWeCanDoo />
      <Platform />
      <Process title="OUR SOFTWARE DEVELOPMENT PROCESS" />
      <TechnologyWork />
      <Project labels={labels} />
    </div>
  )
}

export default VRL
