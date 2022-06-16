import React from 'react'
import {Features, Solution, Process, Promise, Industries, Banner, Stacks,Cta2 , Research, Clients, Stats} from '../../components';
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
      <Stats />
      <Clients />
    </>
  )
}

export default Home
