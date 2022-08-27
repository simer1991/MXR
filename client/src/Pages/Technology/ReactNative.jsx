import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import WhyChoose from '../../components/WhyChoose'
import {FaIdCard,FaLaptopCode,FaUserLock,FaMobile,FaUserFriends,FaChartLine} from 'react-icons/fa'
import {AiFillDashboard} from 'react-icons/ai'
import TechnologyServices from '../../components/TechnologyServices'
import consulting from '../../assets/icons/technologyservices/reactnative/consulting.png'
import custom from '../../assets/icons/technologyservices/reactnative/custom.png'
import dedicated from '../../assets/icons/technologyservices/reactnative/dedicated.png'
import react from '../../assets/icons/technologyservices/reactnative/react.png'
import support from '../../assets/icons/technologyservices/reactnative/support.png'
import backend from '../../assets/icons/technologyservices/reactnative/backend.png'
import { Helmet } from 'react-helmet'

const bannerdata = {
  img: 'technology-reactnative.jpg',
  title: "HIRE REACT NATIVE DEVELOPERS",
  text: "Hire Developers on a full-time, hourly, or fixed cost project basis and manage them as your extended team."
}

const readytotalk = {
  img: 'python.webp',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const benifits=[
  {
    heading:"WHY CHOOSE REACT NATIVE?",
    lists:[
      {
       title:"CROSS-PLATFORM",
       text:"Created by the Facebook team, React Native is perfectly suitable for cross-platform mobile app development. Developers can simply write one React Native component, and it will work seamlessly on both Android and iOS. React Native components interact with native APIs, which means it looks and feels like a native app for individual platforms. It is, therefore, a perfect framework for creating platform-specific applications.",
       icon:<FaIdCard size={30} />,
      },
      {
        title:"CODE REUSABILITY",
        text:"React Native is widely known for supporting code reusability. That is, programmers need not write separate codes for separate applications to suit independent platforms. React Native stores components in blocks, and developers can use 90% of these pre-loaded components at any given point in time to write and release new apps and software. The result? Quick development process. Moreover, developers also get the time to focus on other priority tasks.",
        icon:<FaLaptopCode size={30} />,
      },
      {
        title:"FAST DEVELOPMENT AND COST-EFFECTIVE",
        text:"React Native helps developers build applications at lightning-fast speed, thanks to the power of JavaScript. The framework enables an Android software to be compiled to suit an iOS platform, and vice-versa, This cuts down on the development time and even reduces the maintenance cost immensely",
        icon:<AiFillDashboard size={30} />,
      },
      {
        title:"ACCESS TO NATIVE COMPONENTS",
        text:"React Native offers a set of platform-agnostic native components like text, view, and image, that map directly to the framework’s native UI building blocks. As a result, developers can create truly native apps with relevant functionalities, while ensuring top-notch user experience. Uninterrupted access to native APIs also paves the way for the blazing-fast and agile software development process.",
        icon:<FaUserLock size={30} />,
      },
      {
        title:"SINGLE CODEBASE FOR IOS AND ANDROID",
        text:"With React Native, developers can write a single code base and deploy it for multiple mobile operating systems, like iOS, Android and Windows, as per the requirements. This means that developers can reuse components at any level and at any time, without having to rewrite or recompile the app. As a result, this lets the developers prototype, iterate and release apps quickly, saving them their precious time and cost.",
        icon:<FaMobile size={30} />,
      },
      {
        title:"COMMUNITY-DRIVEN",
        text:"The React Native community is huge and highly supportive. The contributors in the community troubleshoot technical issues, provide valuable suggestions and offer important information on the latest technological upgrades and versions. Interested candidates can get access to blog posts, videos, talks, cool new libraries, apps and announcements from the React Native community.",
        icon:<FaUserFriends size={30} />,
      }

    ]
  }
]

const services=[
  {
    heading:"REACT NATIVE SERVICES",
    data:[
      {
       title:"CUSTOM MOBILE APP DEVELOPMENT",
       text:"We pride ourselves in delivering end-to-end React Native solutions that range from designing UIs, prototyping, developing iOS, Android, and cross-platform apps to deployment.",
       icon:<img src={custom} alt="application"/>,
      },
      {
        title:"REACT NATIVE MIGRATION",
        text:"Whether you want to revamp your legacy mobile app or migrate it to React Native for enhanced UI/UX, our dedicated professionals and solution architects have got your back.",
        icon:<img src={react} alt="webservies"/>,
      },
      {
        title:"REACT NATIVE SUPPORT AND MAINTENANCE",
        text:"We have a decade-long experience as mature problem-solvers that has helped us tackle critical business challenges and deliver top-class support services for complex React Native projects.",
        icon:<img src={support} alt="support"/>,
      },
      {
        title:"REACT NATIVE CONSULTING",
        text:"Our proven consultants thoroughly analyze your existing business processes and advise new approaches, trends, and techs to drive your project forward while ensuring optimized costs.",
        icon:<img src={consulting}  alt="commerce"/>,
      },
      {
        title:"MOBILE APP BACKEND & API DEVELOPMENT",
        text:"Our engineers are skilled in Node.js, PHP, and Python and create custom backend and API services for your mobile app to consume.",
        icon:<img src={backend} alt="b2b" />,
      },
      {
        title:"HIRE DEDICATED REACT NATIVE DEVELOPERS",
        text:"Our easy and flexible hiring models can help you handpick your ideal team on an hourly, part-time or full-time basis.",
        icon:<img src={dedicated} alt="consulting"/>,
      },

    ]
  }
]

const ReactNative = () => {
  return (
    <div>
      <Helmet>
        <title>
        react-native - MXR
        </title>
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

export default ReactNative
