import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaLayerGroup,FaLanguage,FaLaptopCode,FaCode,FaAddressCard} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'
import {AiFillDashboard} from 'react-icons/ai'
import TechnologyServices from '../../components/TechnologyServices'
import custom from '../../assets/icons/technologyservices/swift/custom.png'
import optimisation from '../../assets/icons/technologyservices/swift/optimisation.png'
import support from '../../assets/icons/technologyservices/swift/support.png'
import swift from '../../assets/icons/technologyservices/swift/swift.png'
import testing from '../../assets/icons/technologyservices/swift/testing.png'
import upgradation from '../../assets/icons/technologyservices/swift/upgradation.png'
import { Helmet } from 'react-helmet'

const bannerdata = {
  img: 'technology-swift.jpg',
  title: "HIRE EXPERT SWIFT DEVELOPERS “ON-DEMAND”",
  text: "We Help Build Custom Swift Solutions, Delivered within budget and in keeping with your deadlines."
}

const readytotalk = {
  img: 'python.webp',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const benifits=[
  {
    heading:"WHY CHOOSE SWIFT?",
    lists:[
      {
       title:"FAST AND POWERFUL",
       text:"Swift is extremely fast and high-performing, thanks to the powerful LLVM compiler technology. This technology transforms the Swift code into optimized native code that gets the most out of modern hardware systems. The syntax and library in Swift also help developers write codes easily and run apps effortlessly on watches as well as on servers.",
       icon:<AiFillDashboard size={30} />,
      },
      {
        title:"DYNAMIC LIBRARIES",
        text:"Swift supports dynamic libraries, that help in optimizing and boosting an app’s performance. Dynamic libraries in Swift apps get updated independently. In fact, this minimizes app sizes and speeds up the load time of new data and content, thereby, enhancing the app’s overall functionality.",
        icon:<FaLayerGroup size={30} />,
      },
      {
        title:"MODERN",
        text:"A clean syntax in Swift helps developers read and maintain APIs easily. Inferred types pave the way for clean and error-free codes. Moreover, UTF-8 based encoding supports multiple emojis and languages. In addition, reference counting helps in keeping memory usage to a minimum. All in all, Swift is cutting-edge and modern, which makes it a highly preferred language in the developer community.",
        icon:<FaCode size={30} />,
      },
      {
        title:"GOOD FIRST LANGUAGE",
        text:"Swift can open up a door of opportunity for those who are interested to take up coding as their career option. In fact, Apple created a free curriculum to help educators teach Swift to the interested candidates. Moreover, first-time coders can even download the interactive iPad app, Swift Playgrounds, to learn Swift in a simple and fun-filled way.",
        icon:<FaLanguage size={30} />,
      },
      {
        title:"SAFE CODES",
        text:"Swift removes classes of unsafe code. Memory gets managed automatically, variables are initialized before their usage, integers are verified for overflow and access to memory guards eliminate programming errors. In short, developing apps with Swift is safe and highly secure.",
        icon:<FaLaptopCode size={30} />,
      },
      {
        title:"OBJECTIVE-C INTEROPERABILITY",
        text:"Developers can easily create new apps from scratch using Swift or they can leverage Swift code to build new tools and features within an app. Swift code can co-exist along with Objective-C files, offering complete access to Objective-C API, making Swift highly interoperable.",
        icon:<FaAddressCard size={30} />,
      }

    ]
  }
]

const services=[
  {
    heading:"SWIFT SERVICES",
    data:[
      {
       title:"CUSTOM IOS SWIFT DEVELOPMENT",
       text:"Let us build rich, cleaner and attractive UI with safer codes using Swift language. Our Swift programmers provide fully customized iOS development services.",
       icon:<img src={custom} alt="application"/>,
      },
      {
        title:"SWIFT UPGRADATION",
        text:"Keep pace with the ever-evolving technological landscape with our Swift up-gradation services. Our proficient Swift programmers help you avoid outdated information, keep up and stay up-to-date with the latest versions of Swift.",
        icon:<img src={upgradation} alt="webservies"/>,
      },
      {
        title:"SWIFT APP TESTING",
        text:"Our qualified testers offer full-range testing services that include areas such as performance, usability, accessibility, security, load, automation and functionality of your Swift applications.",
        icon:<img src={testing} alt="support"/>,
      },
      {
        title:"SWIFT APP OPTIMIZATION",
        text:"We use a comprehensive approach to Swift app optimization by taking into account the design look and feel, user experience, code quality, crash data, app functionalities, bug issues, layouts, and business requirements.",
        icon:<img src={optimisation}  alt="commerce"/>,
      },
      {
        title:"MIGRATION TO SWIFT",
        text:"We’ll help you step up the logic, architecture, and performance of your existing systems and apps by replacing each element in Swift.",
        icon:<img src={swift} alt="b2b" />,
      },
      {
        title:"SUPPORT AND MAINTENANCE",
        text:"Our advanced support services can keep your Swift applications and platforms safe, prevent it from bugs and malware, and make it technologically compatible.",
        icon:<img src={support} alt="consulting"/>,
      },

    ]
  }
]

const Swift = () => {
  return (
    <div>
      <Helmet>
        <title>swift - MXR</title>
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

export default Swift
