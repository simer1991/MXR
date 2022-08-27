import React from 'react'
import {Features, Solution, Process, Promise, Industries, Banner, Stacks,Cta2 , Research, Clients, Stats} from '../../components';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
        <Helmet>
        <title>AR, VR and MR Company in UK - MXR</title>
        <meta name="description" content="MXR is UK based software development company delivering reliable and in-budget solutions for AR, VR, MR, Web and Mobile App development to clients globally." />
        </Helmet>
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
