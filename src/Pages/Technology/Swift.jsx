import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaIdCard,FaLayerGroup,FaLanguage,FaLaptopCode,FaCode,FaAddressCard} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'

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
       icon:<FaIdCard size={30} />,
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


const Swift = () => {
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

export default Swift
