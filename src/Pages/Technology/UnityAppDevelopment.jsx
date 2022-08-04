import React from 'react'
import { Innerbanner, Readytotalk } from '../../components'
import images from '../../assets/icons/benifits/unity.png'
import Benifits from '../vr360/Benifits'
import {FaLaptop,FaMobileAlt,FaThumbsUp,FaDice} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'
import TechnologyServices from '../../components/TechnologyServices'
import training from '../../assets/icons/technologyservices/unity/traing.png'
import config from '../../assets/icons/technologyservices/unity/config.png'
import development from '../../assets/icons/technologyservices/unity/development.png'
import talk from '../../assets/icons/technologyservices/unity/walk.png'
import application from '../../assets/icons/technologyservices/unity/application.png'
import archetecture from '../../assets/icons/technologyservices/unity/archetecture.png'
import WhyShould from '../../components/WhyShould'
import WhyShouldUnity from '../../components/WhyShouldUnity'
import { Helmet } from 'react-helmet'

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

const services=[
  {
    heading:"UNITY SOLUTIONS WE OFFER",
    data:[
      {
       title:"ARCHITECTURE VISUALIZATION",
       text:"Our Unity engineers, who strive for perfection in precise architecture and design, may be a valuable asset to your project, delivering high-performance visualisation and application design as well as assuring a positive user experience.",
       icon:<img src={archetecture} alt="application"/>,
      },
      {
        title:"TRAINING FOR INDUSTRY-SPECIFIC OBJECTIVES",
        text:"We use Unity IDE to create highly realistic and efficient solutions for military, industry, and other industries, thanks to our hands-on experience in completely immersive training environments.",
        icon:<img src={training} alt="webservies"/>,
      },
      {
        title:"WALKTHROUGHS IN 360 DEGREES",
        text:"We use Unity graphics to create interactive, 360-degree walkthroughs and flythroughs as a visual presentation of actual sites, possible buildings, or construction projects, concept art, and more to meet the demands of your business.",
        icon:<img src={talk} alt="support"/>,
      },
      {
        title:"CONFIGURATORS OF PRODUCTS",
        text:"You will be able to show off your product to customers, business partners, and investors using an unique configurator created by our team.",
        icon:<img src={config} />,
      },
      {
        title:"APPLICATIONS FOR GAMIFICATION",
        text:"Changing your application’s nature to that of a game is a terrific method to make it more exciting and engaging for users. We’ve been designing gamification solutions for a long time and will figure out the best way to make the shift.",
        icon:<img src={application} />,
      },
      {
        title:"DEVELOPMENT OF A DIGITAL TWIN",
        text:"Our knowledge of the topic enables us to create digital models, simulations, and systems that accurately duplicate real-world environments, objects, and processes.",
        icon:<img src={development} />,
      },

    ]
  }
]

const UnityAppDevelopment = () => {
  return (
    <div>
      <Helmet>
        <title>UNITY APP DEVELOPMENT - MXR</title>
      </Helmet>
      <Innerbanner banner={bannerdata} />
      <Benifits data={dataList}/>
      <WhyShouldUnity />
      <WhyChoose benifit={benifits}/>
      <Readytotalk discuss={readytotalk} />
      <TechnologyServices service={services}/>
     
    </div>
  )
}

export default UnityAppDevelopment
