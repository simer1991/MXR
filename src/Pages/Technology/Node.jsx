import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import Design from '../vr/Design'
import nodejs from '../../assets/icons/intro/nodejs.png'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'

const bannerdata = {
    img: 'technology-nodejs.jpg',
    title: "HIRE EXPERT NODE.JS DEVELOPERS",
    text: "Hire Node.js Developers on a full-time, hourly, or fixed cost project basis and manage them as your extended team."
  }

  const introduction=[
    {
      image:<img src={nodejs} alt="virtual reality"/>,
      title:<h3 className='mxr__section-title'>FEATURES</h3>,
      features:[
        'Integrate our Node.js Developers with your existing team.',
        'Design, Build, Test, and Scale Custom Node.js Solutions.',
        'Gain greater flexibility in resourcing your projects.',
        'Save up to 50% costs in comparison to Chandigarh salaries.',
        'Communicate directly and have close control over your work.',
      ],
    }
  ]

  const readytotalk = {
    img: 'python.webp',
    title: "READY TO DISCUSS YOUR PROJECT? ",
    text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
    button:"CONTACT US",
  }

const Node = () => {
  return (
    <div>
      <Innerbanner banner={bannerdata} />
      <Design intro={introduction} />
      <PartnerWithMxr />
      <WhyChoooseMxr />
      <Industries />
      <Readytotalk discuss={readytotalk} />
      <Clients />
    </div>
  )
}

export default Node
