import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaIdCard,FaMobileAlt,FaShieldAlt,FaLayerGroup,FaLaptopCode,FaCogs} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'
import TechnologyServices from '../../components/TechnologyServices'
import spa from '../../assets/icons/technologyservices/mern/spa.png'
import technical from '../../assets/icons/technologyservices/mern/technical.png'
import mern from '../../assets/icons/technologyservices/mern/mern.png'
import migration from '../../assets/icons/technologyservices/mern/migration.png'
import mernstack from '../../assets/icons/technologyservices/mern/mernstack.png'
import ecommerce from '../../assets/icons/technologyservices/mern/ecommerce.png'

const bannerdata = {
  img: 'technology-mern.jpg',
  title: "HIRE EXPERT MERN STACK DEVELOPERS",
  text: "Hire MERN Stack Developers on a full-time, hourly, or fixed cost project basis and manage them as your extended team."
}

const readytotalk = {
  img: 'python.webp',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const benifits=[
  {
    heading:"WHY CHOOSE MERN STACK?",
    lists:[
      {
       title:"OPEN-SOURCE",
       text:"Since MERN Stack is open-source, it does not require any license fee. Developers can freely use the stack or the set of technologies in MERN to build scalable, feature-rich and dynamic apps for different industry verticals.",
       icon:<FaIdCard size={30} />,
      },
      {
        title:"SINGLE-PAGE APP DEVELOPMENT",
        text:"React.js, used in MERN Stack, helps developers build fully-functional and cutting-edge Single Page Applications (SPAs) that offer high-end user experience. Developers can use React.js to build high-performing and customer-focused SPAs that help businesses improve their efficiency and bottom line.",
        icon:<FaMobileAlt size={30} />,
      },
      {
        title:"HIGHLY FLEXIBLE ",
        text:"The best part about using MERN Stack is that developers can easily move the code written for NodeJS towards React.js without any technical glitches. This offers high flexibility, reduces the overall app development time and even helps developers save their efforts.",
        icon:<FaCogs size={30} />,
      },
      {
        title:"IMPROVED SECURITY",
        text:"MongoDB and NodeJS deliver top-notch security tools. Developers use these technologies to create highly secure applications that engage huge amounts of traffic. Moreover, high security standards ensure that users can easily access these apps without worrying about data breaches, hacks or information leaks.",
        icon:<FaShieldAlt size={30} />,
      },
      {
        title:"NO SQL",
        text:"Data retrieval is an easy process with MERN Stack, thanks to the NoSQL property of MongoDB. Moreover, altering the data layer is simple without affecting the app functionality. In addition, NoSQL facilitates hassle-free migration without any inaccuracy.",
        icon:<FaLayerGroup size={30} />,
      },
      {
        title:"FRONT-END DEVELOPMENT",
        text:"Being one of the most effective and popular front-end technologies, MERN Stack is extensively used to design web applications that offer engaging and attractive user interfaces. The stack powers some of the most responsive, consistent and interactive platforms for multiple business domains.",
        icon:<FaLaptopCode size={30} />,
      }

    ]
  }
]

const services=[
  {
    heading:"MERN STACK SERVICES",
    data:[
      {
       title:"MERN STACK WEB DEVELOPMENT",
       text:"Talk to us if you’re looking for scalable MERN Stack web development services. We build fast, secure and feature-rich web apps for all industry verticals.",
       icon:<img src={mern} alt="application"/>,
      },
      {
        title:"MERN STACK API DEVELOPMENT",
        text:"We’re adept at creating custom APIs for mobile, desktop and cloud apps, databases and operating systems. Our MERN Stack engineers are skilled at configuring APIs for mobile, console and browser apps.",
        icon:<img src={mernstack} alt="webservies"/>,
      },
      {
        title:"MIGRATION AND PORTING",
        text:"Our MERN Stack engineers have niche expertise and broad industry experience in migrating and porting multiple enterprise apps to MERN Stack frameworks.",
        icon:<img src={migration} alt="support"/>,
      },
      {
        title:"MERN STACK ECOMMERCE DEVELOPMENT",
        text:"We’ve built intuitive, comprehensive and fast-paced eCommerce stores that have helped our clients with improved sales and positive business returns.",
        icon:<img src={ecommerce} />,
      },
      {
        title:"MERN STACK SPA AND REAL-TIME APP DEVELOPMENT",
        text:"Count on our MERN Stack developers if you are looking for real-time app development services. We’re proficient at building high-performing apps for fast-moving businesses that engage customers in real-time.",
        icon:<img src={spa} />,
      },
      {
        title:"TECHNICAL MAINTENANCE AND SUPPORT",
        text:"Our MERN Stack developers offer uninterrupted technical support that cover design updates, fault analysis, code reviews, upgrades and patches, testing and software enhancements.",
        icon:<img src={technical} />,
      },

    ]
  }
]


const Mern = () => {
  return (
    <div>
      <Innerbanner banner={bannerdata} />
      <WhyChoose benifit={benifits}/>
      <PartnerWithMxr />
      <WhyChoooseMxr />
      <TechnologyServices service={services}/>
      <Industries />
      <Readytotalk discuss={readytotalk}/>
      <Clients />
    </div>
  )
}

export default Mern
