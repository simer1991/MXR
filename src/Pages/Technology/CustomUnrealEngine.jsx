import React from 'react'
import { Innerbanner, Readytotalk } from '../../components'
import images from '../../assets/icons/benifits/unreal.png'
import Benifits from '../vr360/Benifits'

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
  
const CustomUnrealEngine = () => {
  return (
    <div>
      <Innerbanner banner={bannerdata} />
      <Benifits data={dataList}/>
      <Readytotalk discuss={readytotalk} />
    </div>
  )
}

export default CustomUnrealEngine
