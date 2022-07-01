import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaLanguage,FaMobileAlt,FaUserCheck,FaSignal,FaCheckCircle,} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'

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

const Drupal = () => {
  return (
    <div>
      <Innerbanner banner={bannerdata}/>
      <WhyChoose benifit={benifits}/>
      <PartnerWithMxr />
      <WhyChoooseMxr />
      <Industries />
      <Readytotalk discuss={readytotalk}/>
      <Clients />
    </div>
  )
}

export default Drupal
