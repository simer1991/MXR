import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaShieldAlt,FaLaptopCode,FaTools,FaHandShake,FaAddressBook,FaSketch} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'
import TechnologyServices from '../../components/TechnologyServices'
import codeingeter from '../../assets/icons/technologyservices/codeniger/codeingeter.png'
import cloud from '../../assets/icons/technologyservices/codeniger/cloud.png'
import codeigniterunit from '../../assets/icons/technologyservices/codeniger/codeigniter-unit.png'
import consulting from '../../assets/icons/technologyservices/codeniger/consulting.png'
import codeingeterdeve from '../../assets/icons/technologyservices/codeniger/codeingeterdeve.png'
import maintenance from '../../assets/icons/technologyservices/codeniger/maintaince.png'
import migration from '../../assets/icons/technologyservices/codeniger/migration.png'
import custom from '../../assets/icons/technologyservices/codeniger/custom.png'
import { AiOutlineDashboard ,  } from "react-icons/ai";

const bannerdata = {
    img: 'codeigniter.jpg',
    title: "HIRE CODEIGNITER DEVELOPERS",
    text: "Hire CodeIgniter Developers on a full-time, hourly, or fixed cost project basis and manage them as your extended team."
  }

  const readytotalk = {
    img: 'MR.jpg',
    title: "READY TO DISCUSS YOUR PROJECT? ",
    text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
    button:"CONTACT US",
  }

  const benifits=[
    {
      heading:"WHY CHOOSE CODEIGNITER?",
      lists:[
        {
         title:"SECURITY",
         text:"CodeIgniter is very secure with built-in protection against CSRF and XSS attacks. Version 4 adds context-sensitive escaping and CSP.",
         icon:<FaShieldAlt size={30} />,
        },
        {
          title:"LESS CODING, FASTER DEVELOPMENT",
          text:"Requiring shorter and fewer codes, this PHP framework does not take a lot of installation, configuration, or execution time",
          icon:<FaLaptopCode size={30} />,
        },
        {
          title:"EASY CUSTOMIZATION",
          text:"Developers can easily customize existing libraries, write new libraries, and use shortcodes in CodeIgniter, which makes it one of the most preferred PHP frameworks in the market.",
          icon:<FaTools size={30} />,
        },
        {
          title:"COMMUNITY SUPPORT",
          text:"With over 57000 registered members on the CodeIgniter forum, receiving industry-focussed solutions and recommendations is easy and quick.",
          icon:<FaShieldAlt size={30} />,
        },
        {
          title:"POPULAR MVC ARCHITECTURE",
          text:"Designing HTML codes and managing separate code forms are easy in CI’s MVC architecture, resulting in a logic-based and synchronized development process.",
          icon:<FaAddressBook size={30} />,
        },
        {
          title:"GREAT PERFORMANCE",
          text:"CodeIngiter is lightweight and performs better in comparison to many of its peers.",
          icon:<AiOutlineDashboard size={30} />,
        }
  
      ]
    }
  ]

  const services=[
    {
      heading:"CODEIGNITER SERVICES",
      data:[
        {
         title:"MAINTENANCE AND SUPPORT",
         text:"We’ll keep your CodeIgniter applications running error-free so that you can focus on your business. We will fix issues, oversee security, server updates and take responsibility for regular bug fixes and changes.",
         icon:<img src={maintenance} alt="application"/>,
        },
        {
          title:"CODEIGNITER APPLICATION DEVELOPMENT",
          text:"Custom app development solutions based on CodeIgniter help developers create scalable, secure, and error-free apps. Our talented team ensures you get tailor-built application suited to your business needs.",
          icon:<img src={codeingeter} alt="webservies"/>,
        },
        {
          title:"CLOUD SOLUTIONS",
          text:"We have extensive experience in providing ground-breaking cloud solutions to businesses. From the smallest applications to highly sophisticated web systems, our team has delivered cloud applications diversified business verticals.",
          icon:<img src={cloud} alt="support"/>,
        },
        {
          title:"CONSULTING",
          text:"If your current systems are failing you or you are looking to drive innovation in your business, we’ll help you get things started by providing you services which include pre-project consultation and review of current applications.",
          icon:<img src={consulting} />,
        },
        {
          title:"CODEIGNITER WEB DEVELOPMENT",
          text:"We use the CI framework based development to create outstanding websites. From eCommerce stores to brand websites with rich features, we do them all.",
          icon:<img src={codeingeterdeve} />,
        },
        {
          title:"CODEIGNITER UNIT AND AUTOMATED TESTING",
          text:"Leveraging CodeIgniter’s unit testing class or using PHPUnit, we can ensure that your application is error-free. We can also run automated tests using Selenium.",
          icon:<img src={codeigniterunit} />,
        },
        {
          title:"CUSTOM DATABASE DEVELOPMENT",
          text:"Created a customized database as per your business needs with CodeIgniter’s inbuilt supports popular databases like Oracle, Microsoft SQL Server, and DB2 and many more.",
          icon:<img src={custom} />,
        },
        {
          title:"MIGRATION",
          text:"Migrate applications from ASP.NET, Python, RoR or other PHP frameworks (e.g., CakePHP, Symfony, and Zend) to CodeIgniter without any data or functionality loss.",
          icon:<img src={migration} />,
        },
      ]
    }
  ]

const CodeIngenator = () => {
  return (
    <div>
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

export default CodeIngenator
