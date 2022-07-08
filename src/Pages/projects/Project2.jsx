import React from 'react'
import { Container,Row,Col} from 'react-bootstrap-v5'
import { Innerbanner, Readytotalk } from '../../components'
import video2 from '../../assets/videos/video2.mp4'
import {FaCheckCircle} from 'react-icons/fa'

const bannerdata = {
    img: 'project2.jpg',
    title: "VIRTUAL REALITY WAREHOUSE SAFETY TRAINING",
    text:"Virtual reality application simulator for warehouse safety training."
  }

  const readytotalk = {
    img: 'python.webp',
    title: "READY TO DISCUSS YOUR PROJECT? ",
    text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
    button:"CONTACT US",
  }

const Project2 = () => {
  return (
    <div>
     <Innerbanner  banner={bannerdata} />
     <div class='mxr__section project'>
        <Container>
            <Row>
                <Col md={6} sm={12}>
                <h3>CONTEXT</h3>
                <p>Compliance with warehouse safety regulations is critical for the protection of people’s lives and property. The use of virtual reality technology enables learners to quickly acquire proper behaviour and safety skills in a warehouse environment that is as close to reality as possible without putting themselves in danger.</p>
                </Col>
                <Col md={6} sm={12} className='Project_video'>
                <video src={video2} autoPlay muted loop />
                </Col>
            </Row>
            <div>
               <h3>OVERVIEW OF THE PROJECT</h3>
               <p>The business case is that as the company increased the number of employees in the warehouse, the number of incidents increased. The primary cause of incidents is the warehouse staff crossing the road in the incorrect direction. We accomplished the following tasks during development:</p>
               <p><FaCheckCircle />3D environment creation: warehouse</p>
               <p><FaCheckCircle />Developing a system for tracking the user’s gaze direction</p>
               <p><FaCheckCircle />Environment-related elements animated</p>
               <p><FaCheckCircle />Programming for applications</p>
            </div>
            <div>
                <h3>SOLUTION</h3>
                <p>Our company developed a virtual reality simulator that teaches employees how to cross the street safely. If the employee follows the safe road crossing procedure (looking to the left, then to the right, then indicating the direction in which he will cross the road safely), the employee successfully completes the training. If at least one of these conditions is violated, the employee is involved in a forklift incident, and training is restarted.</p>
            </div>
            <div>
                <h3>QUICK FACTS</h3>
                <p><FaCheckCircle />Proof of concept for a service</p>
                <p><FaCheckCircle />Team members include a 3D designer, a 3D animator, a user experience/user interface designer, a UE4 developer, a quality assurance specialist, and a project manager.</p>
                <p><FaCheckCircle />Timeframe: 1 month</p>
                <p><FaCheckCircle />Maya, 3D Studio Max, and UE4 (C++) technologies</p>
            </div>
            <div>
                <h3>RESULTS</h3>
                <p>This virtual reality app simulator significantly reduced the number of accidents caused by warehouse staff crossing the road improperly by 90%.</p>
            </div>
        </Container>
     </div>
     <Readytotalk discuss={readytotalk} />
    </div>
  )
}

export default Project2
