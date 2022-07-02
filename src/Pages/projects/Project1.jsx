import React from 'react'
import { Container, Row,Col } from 'react-bootstrap-v5'
import { Innerbanner, Readytotalk } from '../../components'
import video from '../../assets/videos/video.mov'
import {FaCheckCircle} from 'react-icons/fa'

const bannerdata = {
    img: 'projects.jpg',
    title: "VR MAINTENANCE SIMULATOR",
    text:"Wind energy turbine direct drive generator virtual reality application simulator",
  }

  const readytotalk = {
    img: 'python.webp',
    title: "READY TO DISCUSS YOUR PROJECT? ",
    text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
    button:"CONTACT US",
  }

const Project1 = () => {
  return (
    <div>
      <Innerbanner banner={bannerdata} />
      <div>
      <Container>
      <div>
            <Row>
                <Col>
                <h3>CONTEXT</h3>
                <p>Training in the maintenance of large-scale facilities such as wind turbines is prohibitively expensive. Delivering personnel to the workplace and training them on an actual installation is not only a time investment, but also a substantial costly one, especially if the installation is in a remote region.</p>
                <p>An approach is to do classroom instruction on particular components of the installation. This approach, however, does not provide comprehensive training in the proper sequence of actions. As an alternative to traditional training, we designed a virtual reality simulator that immerses the trainee completely and greatly reduces the cost of teaching corporate workers.</p>
                 </Col>
                 <Col>
                 <video src={video} autoPlay muted loop />
                </Col>
            </Row> 
      </div>
      <div>
            <h3>OVERVIEW OF THE PROJECT</h3>
            <p>The goal of this virtual reality simulator was to teach service staff the proper technique for examining and replacing the nodes on a direct drive wind turbine, as well as suitable emergency conduct.</p>
            <p>We accomplished the following tasks throughout development:</p>
            <p><FaCheckCircle />Creation of a three-dimensional model of a wind turbine, complete with all of its critical components</p>
            <p><FaCheckCircle />Creation of a virtual reality interaction system incorporating features of a wind turbine and supplementary tools</p>
            <p><FaCheckCircle />Nodes and pieces of a system are animated. Interaction between the wind generator system’s nodes and parts animated</p>
            <p><FaCheckCircle />Programming for applications</p>
       </div>
       <div>
       <h3>SOLUTION</h3>
       <p>This software application took slightly more than three months to produce. Our team collaborated closely with the engineering team at the client and a human factors specialist. Due to the importance of interacting with virtual items in completing the client’s goals, the project was created as a desktop VR application for the HTC Vive device. Our team consisted of a 3D designer, two 3D animators, a user experience / user interface designer, two Unreal engineers, a sound engineer, a quality assurance specialist, and a project manager.</p>
       </div>
       <div>
        <h3>QUICK FACTS</h3>
        <p><FaCheckCircle />Service: Managed  project</p>
        <p><FaCheckCircle />Team: 3D designer, two 3d animators, a user experience/user interface designer, two Unreal Engine developers, a sound engineer, a quality assurance specialist, and a project manager comprise the team.</p>
        <p><FaCheckCircle />Timeframe: 4 months</p>
        <p><FaCheckCircle />Technologies: Maya, 3D Studio Max, and UE4 (C++) technologies</p>
       </div>
       <div>
        <h3>RESULTS</h3>
        <p>The simulator’s implementation results include the following: – Engineer training time was decreased by at least 20%. The direct expenditures of training on genuine equipment were lowered by 70%.</p>
        <p>– The client’s employees are quite appreciative of this simulator and intend to add extra functionality to the application.</p>
        <h6>Key features</h6>
        <p>Utilization of highly polygonal models</p>
        <p>We employed highly polygonal visuals to create the scene, including nodes and wind generator features.</p>
        <h6>Genuine shadows and illumination</h6>
        <p>To implement the project, we used the Unreal Engine development environment. The usage of Unreal Engine enabled the creation of the most lifelike world possible, contributing to the game’s maximum immersion.</p>
        <h6>The human element</h6>
        <p>We simulated as many probable trainee errors and their repercussions as feasible while accounting for the human aspect.</p>
       </div>
       </Container>
       </div>
       <Readytotalk discuss={readytotalk}/>
    </div>
  )
}

export default Project1
