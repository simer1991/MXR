import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaIdCard,FaDesktop,FaChartLine,FaExchangeAlt,FaCopy,FaPassport} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'

const bannerdata = {
  img: 'technology-android.jpg',
  title: "HIRE ANDROID DEVELOPERS",
  text: "We Help Build Custom Android Solutions, Delivered within budget and in keeping with your deadlines.”"
}

const readytotalk = {
  img: 'python.webp',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const benifits=[
  {
    heading:"WHY DEVELOP ANDROID APPS?",
    lists:[
      {
       title:"OPEN-PLATFORM",
       text:"Android is extensively popular for being an OS with open source code. This lets the developers download the source code for Android and customize the app as per their business requirements. Developers love Android because this OS allows them to integrate a broad array of third-party plugins and addons for app enhancements and improvisations. ",
       icon:<FaIdCard size={30} />,
      },
      {
        title:"DEVICE COMPATIBILITY",
        text:"Android apps run seamlessly on multiple devices, screen resolutions and sizes, including tablets, watches, phones, and televisions. Developers simply need to provide configuration-specific app resources in static files, which enables the Android app to load relevant resources as per the current device configuration. The fact that Android apps run perfectly on multiple devices and screen sizes makes it one of the most popular operating systems worldwide",
        icon:<FaDesktop size={30} />,
      },
      {
        title:"TIME-TO-MARKET ",
        text:"Offering an easy integration of desired features, Android platform facilitates quicker app development and reduced time-to-market. Developers can easily create a feature-rich and scalable app, step it up with custom-built APIs packed into Android, and publish them on Google Play Store for release. This saves them effort, money and time, thereby, facilitating faster time-to-market",
        icon:<FaChartLine size={30} />,
      },
      {
        title:"PORTABILITY",
        text:"Developers can easily port native Android apps, built with JavaScript, to other mobile operating systems such as Symbian, Blackberry, and Ubuntu. Migrating Android apps to Chrome OS and Windows 10 platforms is simple and hassle-free as well. The ease with which the codebase of Android apps can be ported to multiple platforms makes it one of the most highly preferred operating systems among the developers.",
        icon:<FaExchangeAlt size={30} />,
      },
      {
        title:"MASHUP COMPATIBILITY",
        text:"Android apps offer mashup compatibility. A mashup is a combination of two or more services required to build an app. For example, developers can combine two services, such as location-based services and camera, to allow users to take photos with the exact location displayed on the image. By combining two libraries or services (i.e., gaming and geolocation, social network and geolocation, contact lists and maps, etc.), developers can easily create rich Android apps that are cutting-edge and user-friendly",
        icon:<FaCopy size={30} />,
      },
      {
        title:"MARKET SHARE",
        text:"IDC states that the worldwide market share of Android touched 87% in 2019. Clearly, the number of Android devices that get shipped across the globe is huge. In fact, the sale of Android devices is a lot higher than the sale of devices running on other mobile operating systems. The Google Play Store puts the Android apps directly into the hands of the users, which results in the big market share of Android on a global level.",
        icon:<FaPassport size={30} />,
      }

    ]
  }
]


const Android = () => {
  return (
    <div>
      <Innerbanner banner={bannerdata} />
      <WhyChoose benifit={benifits}/>
      <PartnerWithMxr />
      <WhyChoooseMxr />
      <Industries />
      <Readytotalk discuss={readytotalk}/>
      <Clients />
    </div>
  )
}

export default Android
