import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import Design from '../vr/Design'
import hybrid from '../../assets/icons/intro/hybrid.png'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'

const bannerdata = {
  img: 'technology-hybrid.jpg',
  title: "WORK ON OR OFFLINE WITH SCALABLE HYBRID APPS",
  text: "We specialize in cutting-edge software solutions, using top modern technologies, such as augmented, virtual and mixed reality, blockchain, iot, state-of-the-art web and mobile technologies, and many more"
}

const introduction=[
  {
    image:<img src={hybrid} alt="virtual reality"/>,
    title:<h3 className='mxr__section-title'>DESIGNED TO DELIVER RESULTS AND INCREASE KNOWLEDGE RETENTION</h3>,
    features:[
      'We offer in-depth consultations, analysis, and strategic planning before developing your app.',
      'We give you a custom solution for your business.',
      'There’s a reason most newer startups and innovative companies are using hybrid apps.',
      'Our testing environments, development process, and quality control insures that your app is engineered to the highest industry standard.',
      'Our hybrid apps offer unlimited potential for growth.',
    ],
  }
]

const readytotalk = {
  img: 'python.webp',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const Hybrid = () => {
  return (
    <div>
      <Innerbanner banner={bannerdata} />
      <Design intro={introduction}/>
      <PartnerWithMxr />
      <WhyChoooseMxr />
      <Industries />
      <Readytotalk discuss={readytotalk}/>
      <Clients />
    </div>
  )
}

export default Hybrid
