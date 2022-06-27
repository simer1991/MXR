import React from 'react'
import Capabilities from './Capabilities'
import Process from '../../components/process/Process'
import WhatWeCanDo from './WhatWeCanDo'
import Technology from './Technology'
import Project from './Project'
function AR() {
  return (
    <div>
       <Capabilities />
       <Process title="OUR SOFTWARE DEVELOPMENT PROCESS"/>
       <WhatWeCanDo />
       <Technology />
       <Project />
    </div>
  )
}

export default AR
