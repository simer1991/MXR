import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'

const bannerdata = {
  img: 'technology-flutter.jpg',
  title: "HIRE EXPERT FLUTTER DEVELOPERS “ON-DEMAND”",
  text: "We Help Build Custom Flutter Solutions, Delivered within budget and in keeping with your deadlines."
}

const readytotalk = {
  img: 'python.webp',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}
const Flutter = () => {
  return (
    <div>
      <Innerbanner banner={bannerdata} />
      <PartnerWithMxr />
      <WhyChoooseMxr />
      <Industries />
      <Readytotalk discuss={readytotalk} />
      <Clients />
    </div>
  )
}

export default Flutter