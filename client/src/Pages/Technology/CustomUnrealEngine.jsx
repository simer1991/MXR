import React from 'react'
import { Innerbanner, Readytotalk, Solution } from '../../components'
import images from '../../assets/icons/benifits/unreal.png'
import Benifits from '../vr360/Benifits'
import {FaLaptop,FaMobileAlt,FaThumbsUp,FaGlobe} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'
import TechnologyServices from '../../components/TechnologyServices'
import arvr from '../../assets/icons/technologyservices/customunrealengine/arvr.png'
import digital from '../../assets/icons/technologyservices/customunrealengine/3d.png'
import product from '../../assets/icons/technologyservices/customunrealengine/product.png'
import solutions from '../../assets/icons/technologyservices/customunrealengine/solutions.png'
import tour from '../../assets/icons/technologyservices/customunrealengine/tours.png'
import training from '../../assets/icons/technologyservices/customunrealengine/training.png'
import WhyShould from '../../components/WhyShould'
import { Helmet } from 'react-helmet'


const bannerdata = {
    img: 'technology-unreal-engine-development.webp',
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

  const services=[
    {
      heading:"WHAT WE ARE ABLE TO DO FOR YOU",
      data:[
        {
         title:"TRAINING AND SIMULATION",
         text:"We are prepared to create simulations based on common and uncommon working scenarios, as well as professional training and emergency safety measures such as evacuations and first aid.",
         icon:<img src={training} alt="application"/>,
        },
        {
          title:"PRODUCT CONFIGURATORS",
          text:"You provide us with the product model and customization choices you desire, and we will convert them into a fully working configurator that gives buyers complete control over selecting the product of their dreams (within the set boundaries).",
          icon:<img src={product} alt="webservies"/>,
        },
        {
          title:"3D VISUALIZATION AND DIGITAL TWINS",
          text:"You may rely on us to build 3D models of your equipment/product/model with millimeter-level accuracy and realism.",
          icon:<img src={digital} alt="support"/>,
        },
        {
          title:"SOLUTIONS FOR BROADCAST & STREAMING",
          text:"We’ll leverage UE4’s amazing graphics capabilities to create a handy streaming application that customers can enjoy on a variety of screen sizes, from handheld to wall-projected.",
          icon:<img src={solutions} alt="solutions"/>,
        },
        {
          title:"TOURS & DIGITAL SHOWROOM",
          text:"We will design an unrivalled user experience using UE4 that will introduce them to your product (or whatever else you are displaying) in all of its glorious detail and angles.",
          icon:<img src={tour} alt="tour"/>,
        },
        {
          title:"VR/AR SOLUTIONS FOR BUSINESS",
          text:"Ace provides comprehensive and immersive virtual reality and augmented reality solutions for a variety of platforms, including Oculus, Vive, Cardboard, and PlayStation.",
          icon:<img src={arvr} alt="arvr"/>,
        },
  
      ]
    }
  ]
  
const CustomUnrealEngine = () => {
  return (
    <div>
      <Helmet>
        <title>CUSTOM UNREAL ENGINE DEVELOPMENT SERVICES - MXR</title>
      </Helmet>
      <Innerbanner banner={bannerdata} />
      <Benifits data={dataList}/>
      <WhyShould />
      <WhyChoose benifit={benifits}/>
      <Readytotalk discuss={readytotalk} />
      <TechnologyServices service={services}/>  
    </div>
  )
}

export default CustomUnrealEngine
