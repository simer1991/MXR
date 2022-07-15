import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaIdCard,FaUserCheck,FaThumbsUp,FaDollarSign,FaCode,FaCogs} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'
import TechnologyServices from '../../components/TechnologyServices'
import testing from '../../assets/icons/technologyservices/mean/testing.png'
import api from '../../assets/icons/technologyservices/mean/api.png'
import mean from '../../assets/icons/technologyservices/mean/mean.png'
import meanstack from '../../assets/icons/technologyservices/mean/meanstack.png'
import migration from '../../assets/icons/technologyservices/mean/migration.png'
import ecommerce from '../../assets/icons/technologyservices/mean/ecommerce.png'
import { Helmet } from 'react-helmet'

const bannerdata = {
  img: 'technology-mean.jpg',
  title: "HIRE EXPERT MEAN STACK DEVELOPERS",
  text: "Hire MEAN Stack Developers on a full-time, hourly, or fixed cost project basis and manage them as your extended team."
}

const readytotalk = {
  img: 'MR.jpg',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const benifits=[
  {
    heading:"WHY CHOOSE MEAN STACK?",
    lists:[
      {
       title:"FAST MVP AND SCALABILITY",
       text:"MEAN Stack comes with multiple libraries, frameworks and reusable modules that help in the fast software development cycle and enhanced scalability. Apart from a quick time-to-market, the MEAN Stack offers ready-made and result-driven solutions that save effort and resources.",
       icon:<FaIdCard size={30} />,
      },
      {
        title:"EXCELLENT PERFORMANCE",
        text:"MEAN Stack is all about excellent and outstanding performance. In fact, NodeJS, the heart of MEAN Stack, is a high-performing, responsive and effective backend programming language.",
        icon:<FaThumbsUp size={30} />,
      },
      {
        title:"ADDED FLEXIBILITY",
        text:"MEAN Stack offers huge developer flexibility and efficiency. Since MEAN full-stack developers work collectively on a single language, that is, JavaScript, they are easily able to switch tasks and help each other out, which leads to added productivity and improved performance. It also increases collaboration and simplifies project management tasks.",
        icon:<FaCogs size={30} />,
      },
      {
        title:"BIG TALENT POOL",
        text:"JavaScript, without a doubt, is the most popular programming language across the globe. Most developers are familiar with the language, and therefore, the number of people who want to apply for MEAN Stack jobs are also high. As a result, recruiters can easily recruit suitable MEAN Stack developers from the large talent pool for key projects and assignments.",
        icon:<FaUserCheck size={30} />,
      },
      {
        title:"REDUCED DEVELOPMENT COST",
        text:"MEAN Stack offers a rich ecosystem. Since it is free and open-source, developers can easily use it without burdening themselves with huge development costs. In addition, it offers code reusability that automatically saves time and effort, and facilitates quick software developments, deployments and launches.        ",
        icon:<FaDollarSign size={30} />,
      },
      {
        title:"FRONT-END DEVELOPMENT",
        text:"Being one of the most effective and popular front-end technologies, MEAN Stack is extensively used to design web applications that offer engaging and attractive user interfaces. The stack powers some of the most responsive, consistent and interactive platforms for multiple business domains. ",
        icon:<FaCode size={30} />,
      }

    ]
  }
]

const services=[
  {
    heading:"MEAN STACK SERVICES",
    data:[
      {
       title:"MEAN FULL-STACK WEB DEVELOPMENT",
       text:"Streamline your business with our MEAN Stack development services. Our MEAN Stack developers come with broad and in-depth industry experience in creating performant social networking apps & gaming portals.",
       icon:<img src={mean} alt="application"/>,
      },
      {
        title:"MIGRATION AND PORTING TO MEAN STACK",
        text:"Talk to us if you’re interested in risk-free migration processes and transitions. We can migrate your existing apps to MEAN Stack technology while still maintaining your current settings.",
        icon:<img src={migration} alt="webservies"/>,
      },
      {
        title:"MEAN STACK CONSULTATIONS",
        text:"Looking for top-notch MEAN Stack solutions or additional expertise on enterprise app development? Our team of consultants is here to help.",
        icon:<img src={meanstack} alt="support"/>,
      },
      {
        title:"MEAN STACK ECOMMERCE SOLUTIONS",
        text:"We have rich technical expertise in developing end-to-end real-time eCommerce applications using MEAN Stack.",
        icon:<img src={ecommerce} />,
      },
      {
        title:"API DEVELOPMENT AND INTEGRATION",
        text:"We have a highly enthusiastic team of MEAN Stack developers who are skilled at handling custom APIs, for your specific business requirements.",
        icon:<img src={api} />,
      },
      {
        title:"MEAN TESTING / SUPPORT / MAINTENANCE",
        text:"Contact us if you’re looking for innovative app development services. Our MEAN Stack engineers are always ready to help you with cutting-edge solutions related to application testing.",
        icon:<img src={testing} />,
      },

    ]
  }
]

const Mean = () => {
  return (
    <div>
      <Helmet>
        <title>mean-stack - MXR</title>
      </Helmet>
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

export default Mean
