import React from 'react'
import { Innerbanner, Readytotalk } from '../../components'
import images from '../../assets/icons/benifits/unreal.png'
import Benifits from '../vr360/Benifits'
import {FaLaptop,FaMobileAlt,FaThumbsUp,FaGlobe} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'

const bannerdata = {
    img: 'technology-unreal-engine-development.jpg',
    title: "HIRE ANGULAR DEVELOPERSCUSTOM UNREAL ENGINE ",
    text: "Developing efficient and inventive solutions that fully utilise the capabilities of Unreal Engine."
  }

  const dataList =[
    { id:"1",
     heading:"CUSTOM UNREAL ENGINE DEVELOPMENT SERVICES",
     images:<img src={images} alt='benifits of vr 360'/>,
     pharagraphs:[
      "Meta Extended Realty (MXR) utilises Unreal Engine 4 to develop cutting-edge solutions that will propel your organisation forward. Our professional experts will use their years of expertise working with UE4 to provide you with services that make the most of the engine’s full potential and amazing capabilities. These products and services can help you increase production, improve training methods, and improve the overall customer experience.",
      "Our Unreal Engine development services are extremely adaptable, which means we can either start from scratch or supplement your existing team with our engineers.",
    ],
    },
  ];

  const readytotalk = {
    img: 'python.webp',
    title: "READY TO DISCUSS YOUR PROJECT? ",
    text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
    button:"CONTACT US",
  }

  const benifits=[
    {
      heading:"WE PROVIDE UNREAL ENGINE SERVICES",
      lists:[
        {
         title:"SOLUTIONS FOR DESKTOP COMPUTERS",
         text:"We create configurators with a high level of visual appeal, consumer-focused virtual reality experiences, and enterprise solutions with a high level of stability, speed, and ease. This software for Windows, macOS, and Linux will maximise the performance of the PC.",
         icon:<FaLaptop size={30} />,
        },
        {
          title:"MOBILE & AR DEVELOPMENT",
          text:"Unreal Engine 4 is well-suited for both developing standalone iOS/Android applications and transferring desktop applications to mobile. Additionally, our knowledge with augmented reality and UE4 extends to the competent usage of ARKit and ARCore.",
          icon:<FaMobileAlt size={30} />,
        },
        {
          title:"VIRTUAL REALITY SOLUTIONS",
          text:"We create immersive simulations that replicate and occasionally exceed real-world environments, as well as interactive virtual reality tours, simulations and training programmes, and remote support. These solutions include a high degree of realism and a plethora of interactive features.",
          icon:<FaThumbsUp size={30} />,
        },
        {
          title:"WEB-BASED SOLUTIONS",
          text:"Our experts can develop any type of online application, ensuring that it performs smoothly, efficiently, and quickly in common web browsers.",
          icon:<FaGlobe size={30} />,
        },
      ]
    }
  ]
  
const CustomUnrealEngine = () => {
  return (
    <div>
      <Innerbanner banner={bannerdata} />
      <Benifits data={dataList}/>
      <WhyChoose benifit={benifits}/>
      <Readytotalk discuss={readytotalk} />
    </div>
  )
}

export default CustomUnrealEngine
