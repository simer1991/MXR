import React from 'react'
import { Innerbanner, Readytotalk } from '../../components'
import images from '../../assets/icons/benifits/unity.png'
import Benifits from '../vr360/Benifits'
import {FaLaptop,FaMobileAlt,FaThumbsUp,FaDice} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'

const bannerdata = {
  img: 'technology-unity-app.jpg',
  title: "UNITY APP DEVELOPMENT",
  text: "We’re Unity experts, and we’re ready to help you build your ideal product."
}

const dataList =[
  { id:"1",
   heading:"SERVICES FOR UNITY APP DEVELOPMENT",
   images:<img src={images} alt='benifits of vr 360'/>,
   pharagraphs:[
    "Unity is useful for producing high-quality cross-platform mobile, console, and desktop applications with no strict requirements for supported devices. With Program-Unity Ace’s app creation, you’ll have a gorgeous, engaging app that works across all supported platforms with just one line of code.",
    "We can create cutting-edge solutions and deploy them for any platform your business needs, thanks to our extensive experience in Unity development (iOS, Android), Desktop (Mac, Windows, Linux), Virtual Reality (Oculus, Steam VR, Gear VR), Augmented Reality (ARKit, ARCore, Vuforia, OpenCV), and Mixed Reality (Hololens).",
  ],
  },
];

const readytotalk = {
  img: 'MR.jpg',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const benifits=[
  {
    heading:"UNITY DEVELOPMENT SERVICES WE PROVIDE",
    lists:[
      {
       title:"UNITY CROSS-PLATFORM APP DEVELOPMENT",
       text:"We can make your application accessible on a number of platforms and app stores. The possibilities of multi platform game development on Unity are especially vast, so there is great freedom to work with.",
       icon:<FaLaptop size={30} />,
      },
      {
        title:"UNITY GAME DEVELOPMENT SERVICES",
        text:"Program-Ace together with our gaming devision Game-Ace are not afraid to tackle complex projects, such as desktop, console or mobile games to deliver experience for a global audience.",
        icon:<FaDice size={30} />,
      },
      {
        title:"UNITY MOBILE DEVELOPMENT",
        text:"Put your product in the hands of millions of users. If you choose to use only one platform for unity mobile development like Android or iOS development, we can also get it done.",
        icon:<FaMobileAlt size={30} />,
      },
      {
        title:"AR/VR/MR-BASED APP DEVELOPMENT",
        text:"Innovative XR technologies are changing the landscape of gaming and entertainment. We can bring your AR/VR/MR project to fruition with this highly-sophisticated platform.",
        icon:<FaThumbsUp size={30} />,
      },
    ]
  }
]

const UnityAppDevelopment = () => {
  return (
    <div>
      <Innerbanner banner={bannerdata} />
      <Benifits data={dataList}/>
      <WhyChoose benifit={benifits}/>
      <Readytotalk discuss={readytotalk} />
    </div>
  )
}

export default UnityAppDevelopment
