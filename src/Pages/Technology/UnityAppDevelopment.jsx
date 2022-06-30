import React from 'react'
import { Innerbanner, Readytotalk } from '../../components'
import images from '../../assets/icons/benifits/unity.png'
import Benifits from '../vr360/Benifits'

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

const UnityAppDevelopment = () => {
  return (
    <div>
      <Innerbanner banner={bannerdata} />
      <Benifits data={dataList}/>
      <Readytotalk discuss={readytotalk} />
    </div>
  )
}

export default UnityAppDevelopment
