import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaSitemap,FaUserCog,FaCheckCircle,FaShieldAlt,FaUserCheck,FaMobileAlt} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'
import TechnologyServices from '../../components/TechnologyServices'
import ios from '../../assets/icons/technologyservices/ios/ios.png'
import application from '../../assets/icons/technologyservices/ios/application.png'
import consultation from '../../assets/icons/technologyservices/ios/consultation.png'
import design from '../../assets/icons/technologyservices/ios/design.png'
import support from '../../assets/icons/technologyservices/ios/support.png'
import upgrades from '../../assets/icons/technologyservices/ios/upgrades.png'

const bannerdata = {
  img: 'technology-ios.jpg',
  title: "HIRE IOS DEVELOPERS “ON-DEMAND”",
  text: "We Help Build Custom iOS Solutions, Delivered within budget and in keeping with your deadlines.”"
}

const readytotalk = {
  img: 'python.webp',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const benifits=[
  {
    heading:"WHY DEVELOP IOS APPS?",
    lists:[
      {
       title:"BITE-SIZED",
       text:"The best part about developing iOS apps is that they can be built with the help of a single developer or two. That is, there need not be a huge team of engineers and developers working for an iOS app development project. In short, iOS apps can be built with bite-sized teams and without massive collaboration processes. Rich iOS apps can be developed without big teams spending their time and money on in depth research work.       ",
       icon:<FaSitemap size={30} />,
      },
      {
        title:"FREE IOS SDK",
        text:"The free iOS Software Development Kit (SDK) makes app designing and development a cakewalk. Mac users are free to download and install the iOS SDK and explore the essentials like Cocoa Touch frameworks that include FoundationKit, UIKit, GameKit, MapKit, and PushKit. These frameworks help developers add voice interaction using SiriKit, manipulate the iPad or iPhone camera and even add iMessage Business Chat to applications.        ",
        icon:<FaUserCog size={30} />,
      },
      {
        title:"CRISP AND CLEAN ",
        text:"IOS apps are clean and crisp, which makes app designing easier, faster and better. Developers simply need a good understanding of the Swift programming language and familiarize themselves with the features of Xcode (Apple’s integrated development environment) to create simple, clean and real-world iOS apps.        ",
        icon:<FaCheckCircle size={30} />,
      },
      {
        title:"UNMATCHED SECURITY",
        text:"IOS is a robust platform that comes with top-class quality control standards. While building iOS apps, developers experience a stable and conducive environment that not only makes app development secure and safe, but also helps in yielding higher returns for businesses.        ",
        icon:<FaShieldAlt size={30} />,
      },
      {
        title:"INTUITIVE USER EXPERIENCE",
        text:"IOS offers a fantastic user experience that is unparalleled. Right from catchy UI animations, multi-layered designs, split screens to swiping, each and every element engages the users and helps businesses deliver the ultimate UI experience to their customers. ",
        icon:<FaUserCheck size={30} />,
      },
      {
        title:"SPECIALIZED DEVICE FOCUS",
        text:"IOS platforms do not permit the integration of third-party plugins and addons that have questionable quality. This is one of the prime reasons why businesses choose iOS app development and get to improve their business productivity.",
        icon:<FaMobileAlt size={30} />,
      }

    ]
  }
]

const services=[
  {
    heading:"IOS SERVICES",
    data:[
      {
       title:"IOS APPLICATION DEVELOPMENT AND DEPLOYMENT",
       text:"Contact us if you’re looking to build user-friendly and feature-packed iOS apps for diverse industry verticals including Education, Logistics, Retail, Travel, and more.",
       icon:<img src={ios} alt="application"/>,
      },
      {
        title:"IOS APPLICATION QA AND TESTING",
        text:"We have a dedicated QA team that offers a multi-faceted approach to testing your apps.  you will also be assured of an effective and economical testing approach that meets your budget and time.",
        icon:<img src={application} alt="webservies"/>,
      },
      {
        title:"IOS SUPPORT AND MAINTENANCE",
        text:"Right from bug fixes, app and library updates, code maintenance, data migration services, server performance optimization, security enhancements, features extensions, UI/UX enhancements to OS updates, we offer it all.",
        icon:<img src={support} alt="support"/>,
      },
      {
        title:"IOS APPLICATION DESIGN",
        text:"Talk to us if you’re looking for compelling and futuristic app layouts and designs for your iPads, iPhones and other iOS devices. We have a deep industry understanding of developing attractive prototypes, interfaces, and custom-made POCs for your iOS apps.",
        icon:<img src={design}  alt="commerce"/>,
      },
      {
        title:"IOS APPLICATION MIGRATION AND UPGRADES",
        text:"Our certified app migration team is adept at porting your app to new platforms, operating systems, and languages, that brings down your cost of app maintenance.",
        icon:<img src={upgrades} alt="b2b" />,
      },
      {
        title:"IOS CONSULTATION",
        text:"We can help you on your iOS journey by offering consulting services related to iOS app architecture, UI/UX evaluation, database planning, documentation development and Application Lifecycle Management (ALM).",
        icon:<img src={consultation} alt="consulting"/>,
      },

    ]
  }
]


const IOS = () => {
  return (
    <div>
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

export default IOS
