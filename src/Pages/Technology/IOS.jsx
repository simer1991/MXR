import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaSitemap,FaUserCog,FaCheckCircle,FaShieldAlt,FaUserCheck,FaMobileAlt} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'

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

const IOS = () => {
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

export default IOS
