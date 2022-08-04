import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import Design from '../vr/Design'
import nodejs from '../../assets/icons/intro/nodejs.png'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import TechnologyServices from '../../components/TechnologyServices'
import customdb from '../../assets/icons/technologyservices/nodejs/customdb.png'
import api from '../../assets/icons/technologyservices/nodejs/api.png'
import custom from '../../assets/icons/technologyservices/nodejs/customdb.png'
import dedicated from '../../assets/icons/technologyservices/nodejs/dedicated.png'
import node from '../../assets/icons/technologyservices/nodejs/node.png'
import re from '../../assets/icons/technologyservices/nodejs/re.png'
import support from '../../assets/icons/technologyservices/nodejs/support.png'
import real from '../../assets/icons/technologyservices/nodejs/real.png'
import application from '../../assets/icons/technologyservices/nodejs/application.png'
import { Helmet } from 'react-helmet'


const bannerdata = {
    img: 'technology-nodejs.jpg',
    title: "HIRE EXPERT NODE.JS DEVELOPERS",
    text: "Hire Node.js Developers on a full-time, hourly, or fixed cost project basis and manage them as your extended team."
  }

  const introduction=[
    {
      image:<img src={nodejs} alt="virtual reality"/>,
      title:<h3 className='mxr__section-title'>FEATURES</h3>,
      features:[
        'Integrate our Node.js Developers with your existing team.',
        'Design, Build, Test, and Scale Custom Node.js Solutions.',
        'Gain greater flexibility in resourcing your projects.',
        'Save up to 50% costs in comparison to Chandigarh salaries.',
        'Communicate directly and have close control over your work.',
      ],
    }
  ]

  const readytotalk = {
    img: 'python.webp',
    title: "READY TO DISCUSS YOUR PROJECT? ",
    text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
    button:"CONTACT US",
  }

  const services=[
    {
      heading:"NODE.JS DEVELOPMENT SERVICES",
      data:[
        {
         title:"CUSTOM DEVELOPMENT",
         text:"Are you looking to build a custom Node.js application? We’ve got you covered. First, we study your requirements and then make tailor-made Node.js as per your business needs.",
         icon:<img src={custom} alt="application"/>,
        },
        {
          title:"DEDICATED NODE.JS DEVELOPERS",
          text:"We offer handpicked mid-senior level NodeJs developers to join your team. Each developer is 100% integrated into your team, working directly with you every day.",
          icon:<img src={dedicated} alt="webservies"/>,
        },
        {
          title:"REAL-TIME APPLICATIONS",
          text:"We integrate video call and voice chat functionality into your website using WebRTC APIs, WebSocket protocol, and Node.js. Our Node.js developers are skilled at creating lightweight, data-intensive, low processing applications.",
          icon:<img src={real} alt="support"/>,
        },
        {
          title:"NODE.JS FOR MOBILE AND WEB APPS",
          text:"We help you power your Web or Mobile front end with a custom backend written in Node.js. Its secure, fast, and extensible.",
          icon:<img src={node} />,
        },
        {
          title:"RE-ENGINEERING",
          text:"Our Node.js experts ensure maximum customization by fully utilizing the current processes of the applications. We use cutting-edge re-engineering processes to simulate views, screens, and procedures.",
          icon:<img src={re} />,
        },
        {
          title:"APPLICATION MODERNIZATION",
          text:"Modernizing your present Node.js systems is our specialization. Our Node.js developers work on your legacy architecture in a way that significantly improves the Node.js without disrupting the frontend.",
          icon:<img src={application} />,
        },
        {
          title:"API DEVELOPMENT FOR LEGACY APPLICATIONS",
          text:"Do you have a legacy application that you want to integrate with your other applications or third parties? Then hit us up. We’ll develop and deliver a secure and scalable API layer for it.",
          icon:<img src={api} />,
        },
        {
          title:"SUPPORT AND MAINTENANCE",
          text:"Be it emergency bug fixes, performance tuning, improvements, or upgrades. We provide it all so that your web and mobile apps are error-free, secure, and perform as required.",
          icon:<img src={support} />,
        },
        {
          title:"CUSTOM DATABASE DEVELOPMENT",
          text:"We work with various databases, including MySQL, PostgreSQL, MongoDB, and Redis, to maintain your Node.js. We also have expertise in BaaS products such as FireBase etc.",
          icon:<img src={customdb} />,
        },
      ]
    }
  ]

const Node = () => {
  return (
    <div>
      <Helmet>
        <title>nodejs - MXR</title>
        </Helmet>
      <Innerbanner banner={bannerdata} />
      <Design intro={introduction} />
      <PartnerWithMxr />
      <WhyChoooseMxr />
      <TechnologyServices service={services}/>
      <Industries />
      <Readytotalk discuss={readytotalk} />
      <Clients />
    </div>
  )
}

export default Node
