import React from 'react'
import { Clients, Industries, Innerbanner } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import Readytotalk from '../../components/readytotalk/Readytotalk'
import WhyChoose from '../../components/WhyChoose'
import {FaIdCard} from 'react-icons/fa'

const bannerdata = {
  img: 'technology-php.jpg',
  title: "HIRE PHP DEVELOPERS",
  text: "Hire Developers on a full-time, hourly, or fixed cost project basis and manage them as your extended team."
}

const readytotalk = {
  img: 'MR.jpg',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const benifits=[
  {
    headings:["WHY CHOOSE PHP?",],
    title:"OPENSOURCE",
    text:"This is why most agencies prefer to work with PHP. Its cost-free with no license fee or third-party charges making it a better choice for most business owners.",
    icon:<FaIdCard />,
  }
]
const Php = () => {
  return (
    <div>
       <Innerbanner banner={bannerdata} />
       <PartnerWithMxr />
       <WhyChoooseMxr />
       <Industries />
       <Readytotalk discuss={readytotalk} />
       <Clients />
       <WhyChoose benifit={benifits}/>
    </div>
  )
}

export default Php
