import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import WhyChoose from '../../components/WhyChoose'
import {FaCogs,FaUserCog,FaUser,FaAngleDoubleDown,FaLevelDownAlt,FaDollarSign} from 'react-icons/fa'
import TechnologyServices from '../../components/TechnologyServices'
import pwa from '../../assets/icons/technologyservices/reactjs/pwa.png'
import test from '../../assets/icons/technologyservices/reactjs/test.png'
import testing from '../../assets/icons/technologyservices/reactjs/testing.png'
import deveops from '../../assets/icons/technologyservices/reactjs/deveops.png'
import migrate from '../../assets/icons/technologyservices/reactjs/migrate.png'
import react from '../../assets/icons/technologyservices/reactjs/react.png'
import reactjs from '../../assets/icons/technologyservices/reactjs/reactjs.png'
import maintenance from '../../assets/icons/technologyservices/reactjs/maintenance.png'
import archetecture from '../../assets/icons/technologyservices/reactjs/archetecture.png'
import { Helmet } from 'react-helmet'

const bannerdata = {
  img: 'technology-reactjs.png',
  title: "HIRE EXPERT REACT.JS DEVELOPERS",
  text: "Hire dedicated senior React.js developers as your extended team."
}

const readytotalk = {
  img: 'python.webp',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const benifits=[
  {
    heading:"WHY CHOOSE REACT.JS?",
    lists:[
      {
       title:"KEEP YOUR CONTROL",
       text:"Every React.js developer hired with our help becomes your full-time employee, working on your project 8 hours a day, five days a week – just like your in-house team.       ",
       icon:<FaCogs size={30} />,
      },
      {
        title:"WORK WITH REACT.JS EXPERTS",
        text:"We’ll help you hire React.js developers with a deep understanding of React Architecture, Redux, HTML5, CSS3/SASS, Jest, Enzyme, Mocha, MaterialUI, GIT, and more.        ",
        icon:<FaUser size={30} />,
      },
      {
        title:"HASSLE-FREE PRODUCTION",
        text:"Our HR specialists, office managers, and system administrators make sure your React.js development team’s working conditions are perfect.",
        icon:<FaUserCog size={30} />,
      },
      
      {
        title:"ZERO OVERHEADS",
        text:"Payroll, taxes, benefits, sick days, and vacations for your team – we’ve got you covered.",
        icon:<FaAngleDoubleDown size={30} />,
      },
      {
        title:"LOW ATTRITION",
        text:"Corporate outings, regular training, engagement activities, career counseling, grievance handling – our HR veterans will sure every React.js developer you hire with us stays motivated to try hard to make you successful. ",
        icon:<FaLevelDownAlt size={30} />,
      },
      {
        title:"50% COST REDUCTION",
        text:"Our clients have been able to save up to 50% in labor costs.",
        icon:<FaDollarSign size={30} />,
      }

    ]
  }
]

const services=[
  {
    heading:"REACT.JS SERVICES",
    data:[
      {
       title:"REACT.JS TEAM AUGMENTATION",
       text:"Hire dedicated React.js experts and engineers from us and save over 50% on development costs. The developers become part of your team and work directly under your control.",
       icon:<img src={react} alt="application"/>,
      },
      {
        title:"REACT.JS DEVELOPMENT",
        text:"React Web Development We develop tailor-made React Web Applications for all the niches. We have delivered applications for several industries, including healthcare, e-commerce, manufacturing, retail, travel, finance, and education.",
        icon:<img src={reactjs} alt="webservies"/>,
      },
      {
        title:"PWA AND SPA DEVELOPMENT",
        text:"Whether you want to build a Progressive Web App (PWA) or a Single Page Application (SPA), we know how to give you an edge through responsive designs that resonate with your users.",
        icon:<img src={pwa} alt="support"/>,
      },
      {
        title:"TESTING & QA",
        text:"Partner with us to ensure that your UI/UX is compliant and secure. Also, compete with confidence as we bring your React.js architecture up to date and speed.",
        icon:<img src={testing} />,
      },
      {
        title:"TEST DRIVEN DEVELOPMENT",
        text:"Our developers use Jest and Enzyme to write test cases to ensure the correctness of React codebase. This ensures your React app is stable and error-free.",
        icon:<img src={test} />,
      },
      {
        title:"MAINTENANCE AND SUPPORT",
        text:"Have a legacy React.js app? We’re here to help. From debugging and maintenance to feature development and DevOps, we’ll tailor a development plan to meet your needs.",
        icon:<img src={maintenance} />,
      },
      {
        title:"ARCHITECTURE AND DESIGN",
        text:"Our React.js architects create state-of-the-art web interfaces that tick all the right boxes regarding a positive user journey and experience.",
        icon:<img src={archetecture} />,
      },
      {
        title:"MIGRATE TO REACT.JS",
        text:"Whether you have an application running in any other framework or built using a template system, we can help you migrate your app to React. Our teams can also assist with the creation of APIs as needed.",
        icon:<img src={migrate} />,
      },
      {
        title:"DEVOPS FOR REACT.JS",
        text:"Do you need help setup CI/CD pipeline for your React.js based applications? Our seasoned DevOps have expertise in working with all major cloud platforms such as AWS, Azure, and GCP.",
        icon:<img src={deveops} />,
      },

    ]
  }
]

const Reactjs = () => {
  return (
    <div>
      <Helmet>
        <title>reactjs - MXR</title>
      </Helmet>
      <Innerbanner banner={bannerdata} />
      <WhyChoose benifit={benifits}/>
      <PartnerWithMxr />
      <WhyChoooseMxr />
      <TechnologyServices service={services}/>
      <Industries />
      <Readytotalk discuss={readytotalk} />
      <Clients />
    </div>
  )
}

export default Reactjs
