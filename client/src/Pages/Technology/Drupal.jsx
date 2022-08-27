import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaLanguage,FaMobileAlt,FaUserCheck,FaSignal,FaCheckCircle,} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'
import TechnologyServices from '../../components/TechnologyServices'
import migration from '../../assets/icons/technologyservices/drupal/migration.png'
import integration from '../../assets/icons/technologyservices/drupal/integration.png'
import staff from '../../assets/icons/technologyservices/drupal/staff.png'
import support from '../../assets/icons/technologyservices/drupal/support.png'
import commerce from '../../assets/icons/technologyservices/drupal/commerce.png'
import drupal from '../../assets/icons/technologyservices/drupal/drupal.png'
import { Helmet } from 'react-helmet'

const bannerdata = {
  img: 'technology-drupal.jpg',
  title: "HIRE DRUPAL DEVELOPERS",
  text: "Hire Drupal Developers on a full-time, hourly, or fixed cost project basis and manage them as your extended team."
}

const readytotalk = {
  img: 'python.webp',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const benifits=[
  {
    heading:"WHY CHOOSE DRUPAL?",
    lists:[
      {
       title:"MOBILE-FIRST",
       text:"Drupal is perfect for mobile-first designs and responsive sites. With Drupal, creating mobile experiences with responsive administrations, images, breakpoints, modules, themes and toolbars is easy.",
       icon:<FaMobileAlt size={30} />,
      },
      {
        title:"API-FIRST APPROACH",
        text:"By making Drupal API-first, you will be able to power leading-edge applications of various kinds, right from behind-the-scenes systems written in Java or PHP to wonderfully rendered experiences with front-end framework like React.",
        icon:<FaMobileAlt size={30} />,
      },
      {
        title:"MULTILINGUAL",
        text:"The built-in language handling abilities in Drupal help the users get a localized digital experience, plus it helps them save time and money. Translating site interfaces, content, configuration, enabling language negotiation and installing multilingual modules is easy with Drupal.",
        icon:<FaLanguage size={30} />,
      },
      {
        title:"SCALABILITY",
        text:"Right from building small scale applications to ones with a billion visits per day, Drupal is perfect for all. With its API-first characteristics and integrated systems, Drupal is suitable for creating the most complex infrastructures and software that requires high scalability.",
        icon:<FaSignal size={30} />,
      },
      {
        title:"GREAT AUTHORING EXPERIENCE",
        text:"Drupal helps you create custom content types tailored to your marketing arsenal. It not only helps editors create, review, edit and publish content, it also empowers the developers to structure metadata, tags and taxonomy quickly.",
        icon:<FaCheckCircle size={30} />,
      },
      {
        title:"SEO-FRIENDLY",
        text:"With Drupal, you can download new modules like SEO Compliance Checker to implement SEO best practices, Page Title module to add keywords into your title tags, and XML sitemap to make it easier for search engines to index your page.",
        icon:<FaUserCheck size={30} />,
      }

    ]
  }
]

const services=[
  {
    heading:"DRUPAL SERVICES",
    data:[
      {
       title:"DRUPAL WEB DEVELOPMENT",
       text:"Our experience and expertise ensure we create complex web applications which are customizable, SEO-friendly and mobile-first.",
       icon:<img src={drupal} alt="application"/>,
      },
      {
        title:"DRUPAL STAFF AUGMENTATION",
        text:"We offer quick and impactful solutions for developing sites by bringing in experienced in-house workers along with full-time employees. Our staff augmentation helps in risk-reduction, cost-effectiveness and added flexibility.",
        icon:<img src={staff} alt="webservies"/>,
      },
      {
        title:"DRUPAL INTEGRATION",
        text:"We offer integration with legacy systems, API and web service integration, seamless SMS, social, SSO and third party integration, CMS and CRM integration and custom development.",
        icon:<img src={integration} alt="support"/>,
      },
      {
        title:"DRUPAL COMMERCE",
        text:"Our well-rounded Drupal team takes a multidisciplinary approach to build fully featured eCommerce sites with well-defined workflows, lists, data structures and displays.",
        icon:<img src={commerce}  alt="commerce"/>,
      },
      {
        title:"DRUPAL MIGRATION",
        text:"We help your business upgrade to Drupal 8 from earlier versions of Drupal. Our experienced team members can import data from external datasources such as CSV, XML, JSON and MySQL.",
        icon:<img src={migration} alt="b2b" />,
      },
      {
        title:"DRUPAL MAINTENANCE AND SUPPORT",
        text:"A maintenance and support agreement with us can help you keep your applications technically sound. We fix bugs, offer security upgrades, tweak Drupal views, rules and blocks, and amend user roles, among other day-to-day operations.",
        icon:<img src={support} alt="consulting"/>,
      },

    ]
  }
]


const Drupal = () => {
  return (
    <div>
      <Helmet>
        <title>drupal - MXR</title>
      </Helmet>
      <Innerbanner banner={bannerdata}/>
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

export default Drupal
