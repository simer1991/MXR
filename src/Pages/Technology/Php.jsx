import React from 'react'
import { Clients, Industries, Innerbanner } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import Readytotalk from '../../components/readytotalk/Readytotalk'
import WhyChoose from '../../components/WhyChoose'
import {FaIdCard,FaLaptop,FaChartLine,FaBatteryThreeQuarters,FaLaptopCode,FaUserCog} from 'react-icons/fa'
import TechnologyServices from '../../components/TechnologyServices'
import application from '../../assets/icons/technologyservices/php/application.png'
import webservies from '../../assets/icons/technologyservices/php/webservies.png'
import support from '../../assets/icons/technologyservices/php/support.png'
import website from '../../assets/icons/technologyservices/php/website.png'
import consulting from '../../assets/icons/technologyservices/php/consulting.png'
import cloud from '../../assets/icons/technologyservices/php/cloud.png'
import ecommerce from '../../assets/icons/technologyservices/php/e-commerce.png'
import hirephp from '../../assets/icons/technologyservices/php/hirephp.png'
import migration from '../../assets/icons/technologyservices/php/migration.png'
import { Helmet } from 'react-helmet'

const bannerdata = {
  img: 'technology-php.jpg',
  title: "HIRE PHP DEVELOPERS",
  text: "Hire Developers on a full-time, hourly, or fixed cost project basis and manage them as your extended team."
}

const readytotalk = {
  img: 'MR.jpg',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const benifits=[
  {
    heading:"WHY CHOOSE PHP?",
    lists:[
      {
       title:"OPENSOURCE",
       text:"This is why most agencies prefer to work with PHP. Its cost-free with no license fee or third-party charges making it a better choice for most business owners.",
       icon:<FaIdCard size={30} />,
      },
      {
        title:"BUILT FOR THE WEB",
        text:"PHP is fundamentally an Internet-aware system with built-in modules for accessing FTP servers and many database servers, including PostgreSQL, MySQL, Microsoft SQL Server, LDAP servers, and others.",
        icon:<FaLaptop size={30} />,
      },
      {
        title:"SCALABLE",
        text:"PHP can be deployed to scale horizontally to accommodate additional users and traffic without any decline performance.",
        icon:<FaChartLine size={30} />,
      },
      {
        title:"CROSS-PLATFORM",
        text:"PHP’s cross-platform integration is excellent as it can work on different platforms such as Linux, UNIX, Solaris, and Windows.",
        icon:<FaLaptopCode size={30} />,
      },
      {
        title:"POWERS 80% OF THE WEB",
        text:"As of August 2019, PHP was used as the server-side programming language on 79.1% of websites.",
        icon:<FaBatteryThreeQuarters size={30} />,
      },
      {
        title:"RAPID DEVELOPMENT",
        text:"PHP offers several frameworks for Rapid Application Development including PRADO, CakePHP, Symfony, CodeIgniter, Laravel, Yii Framework, Phalcon, and Zend Framework.",
        icon:<FaUserCog size={30} />,
      }

    ]
  }
]

const services=[
  {
    heading:"PHP SERVICES",
    data:[
      {
       title:"APPLICATION DEVELOPMENT",
       text:"Get best services from skilled PHP developers to build tailor-made web applications that are secure, scalable and built using modern development techniques such as API first approach.",
       icon:<img src={application} alt="application"/>,
      },
      {
        title:"WEB SERVICES & API DEVELOPMENT",
        text:"Use PHP to power your iOS & Android mobile applications or provide access to your platform data through secure, stable, and well-documented web services and APIs.",
        icon:<img src={webservies} alt="webservies"/>,
      },
      {
        title:"SUPPORT AND MAINTENANCE",
        text:"Get result-based solutions and responses from domain experts who can help resolve complex issues and help you with ongoing maintenance.",
        icon:<img src={support} alt="support"/>,
      },
      {
        title:"WEBSITE DEVELOPMENT",
        text:"Get a feature-rich website built as per your needs using PHP based CMS like WordPress or Drupal or built from the ground up using frameworks such as Laravel, CodeIgniter, Symfony, and Zend.",
        icon:<img src={website} />,
      },
      {
        title:"CLOUD SOLUTIONS",
        text:"Use PHP tools to build cloud-native apps, and deploy, manage and scale them whenever required.",
        icon:<img src={cloud} />,
      },
      {
        title:"CONSULTING",
        text:"We provide custom consulting services in the areas of design and implementation, application architecture, and application development and management best practices.",
        icon:<img src={consulting} />,
      },
      {
        title:"E-COMMERCE",
        text:"We can help you create custom online stores using leading PHP platforms such as WooCommerce, Magento or even build a custom store from scratch. We can also provide integration with Shipping, Inventory and 3rd party services as needed.",
        icon:<img src={ecommerce} />,
      },
      {
        title:"MIGRATION",
        text:"We can help you migrate your application to PHP from ASP.NET, Java, Python without loss of any functionality or data.",
        icon:<img src={migration} />,
      },
      {
        title:"HIRE PHP DEVELOPERS",
        text:"Hire expert PHP developers “On-Demand” and save time and money. Developers work as your extended team and save you 50% costs in the process.",
        icon:<img src={hirephp} />,
      },

    ]
  }
]
const Php = () => {
  return (
    <div>
      <Helmet>
        <title>php-MXR</title>
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

export default Php
