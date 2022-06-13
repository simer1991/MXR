import React from 'react'
import {Features, Solution, Process, Promise, Industries, Banner, Stacks,Cta2 , Research} from '../../components';
const Home = () => {
  return (
    <>
      <Banner />
      <Features />
      <Research />
      <Process title="WE SIMPLIFY SOFTWARE DEVELOPMENT PROCESS" />
      <Promise />
      <Stacks />

      <Solution />
      <Cta2 />
      <Industries />
    </>
  )
}

export default Home
