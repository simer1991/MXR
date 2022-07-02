import React from 'react'
import { Clients, Industries, Innerbanner } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import Readytotalk from '../../components/readytotalk/Readytotalk'
import WhyChoose from '../../components/WhyChoose'
import {FaFileAlt,FaLaptop,FaLaptopCode,FaTasks,FaUserLock,FaFileCode} from 'react-icons/fa'
import TechnologyServices from '../../components/TechnologyServices'
import laravel from '../../assets/icons/technologyservices/laravel/laravel.png'
import lumen from '../../assets/icons/technologyservices/laravel/lumen.png'
import full from '../../assets/icons/technologyservices/laravel/full.png'
import sass from '../../assets/icons/technologyservices/laravel/saas.png'
import browser from '../../assets/icons/technologyservices/laravel/browser.png'
import maintenance from '../../assets/icons/technologyservices/laravel/maintenance.png'
import migrate from '../../assets/icons/technologyservices/laravel/migrate.png'
import laravelconsulting from '../../assets/icons/technologyservices/laravel/laravel-consulting.png'
import laravelsupport from '../../assets/icons/technologyservices/laravel/laravelsupport.png'

const bannerdata = {
  img: 'technology-laravel.jpg',
  title: "HIRE LARAVEL DEVELOPERS",
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
    heading:"WHY CHOOSE LARAVEL?",
    lists:[
      {
       title:"CLEAR DOCUMENTATION",
       text:"Since Laravel comes with a model-view-controller (MVC) pattern and high-end architecture, documentation in Laravel is neat and organized.",
       icon:<FaFileAlt size={30} />,
      },
      {
        title:"EASY UNIT TESTING",
        text:"Performing unit tests of an existing web functionality or a new feature during the development process is smooth and easy with Laravel.",
        icon:<FaLaptopCode size={30} />,
      },
      {
        title:"OBJECT-ORIENTED LIBRARIES",
        text:"There are more than 20 pre-installed libraries in Laravel which offer encryption, CSRF protection, and database security.",
        icon:<FaLaptop size={30} />,
      },
      {
        title:"CACHING",
        text:"Developers can integrate popular caching systems such as APC, Redis, and Memcached in Laravel to augment the performance of an app.",
        icon:<FaTasks size={30} />,
      },
      {
        title:"SECURITY",
        text:"Preventing illegal access, Laravel is a framework that restricts fraud and ensures authentication.",
        icon:<FaUserLock size={30} />,
      },
      {
        title:"BLADE TEMPLATE ENGINE",
        text:"Laravel comes with Blade template engine which helps developers display data easily and even extend web layouts without slowing down application speed.",
        icon:<FaFileCode size={30} />,
      }

    ]
  }
]

const services=[
  {
    heading:"LARAVEL SERVICES",
    data:[
      {
       title:"LARAVEL APPLICATION DEVELOPMENT",
       text:"We help you design, build, and manage custom Laravel applications that help solve your most challenging problems and fit seamlessly into your current processes and practices and generate measurable outcomes for your enterprise.",
       icon:<img src={laravel} alt="application"/>,
      },
      {
        title:"LUMEN BASED WEB SERVICES & API DEVELOPMENT",
        text:"Use Lumen Microservices framework to power your iOS & Android mobile applications or provide access to your platform data through secure, stable, and well-documented web services & APIs.",
        icon:<img src={lumen} alt="webservies"/>,
      },
      {
        title:"FULL-TEXT SEARCH",
        text:"Implement lightning fast full text search on your website with Laravel’s Scout which also connects with Aloglia.",
        icon:<img src={full} alt="support"/>,
      },
      {
        title:"SAAS APPLICATION DEVELOPMENT",
        text:"Using Laravel Cashier, Spark, Passport and Socialite other such Laravel packages we can help you develop a custom SaaS application.",
        icon:<img src={sass} />,
      },
      {
        title:"BROWSER TESTING AND AUTOMATION",
        text:"Our automation testing services ensure complete test automation of website and application using Dusk.",
        icon:<img src={browser} />,
      },
      {
        title:"MAINTENANCE AND SUPPORT",
        text:"We’ll keep your Laravel applications running error-free so that you can focus on your business. We will fix issues, oversee security, server updates, monitor performance, take periodic backups, and take responsibility for regular bug fixes and changes.",
        icon:<img src={maintenance} />,
      },
      {
        title:"LARAVEL BASED WEBSITE DEVELOPMENT",
        text:"We can build custom features into your website using Laravel or help create a custom web site using Laravel based CMS such as Statamic and October.",
        icon:<img src={laravelsupport} />,
      },
      {
        title:"MIGRATE TO LARAVEL",
        text:"We can help you migrate your application to PHP from ASP.NET, Java, Python without loss of any functionality or data.",
        icon:<img src={migrate} />,
      },
      {
        title:"LARAVEL CONSULTING",
        text:"If your current systems are failing you or, you are looking to drive innovation in your business, we’ll help you get things started by provided you services such as pre-project consulting.",
        icon:<img src={laravelconsulting} />,
      },

    ]
  }
]

const Laravel = () => {
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

export default Laravel
