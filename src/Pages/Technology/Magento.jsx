import React from 'react'
import { Innerbanner ,Industries, Readytotalk, Clients} from '../../components'
import Design from '../vr/Design'
import magento from '../../assets/icons/intro/magento.png'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'

const bannerdata = {
  img: 'technology-magento.jpg',
  title: "HIRE ANGULAR DEVELOPERS",
  text: "Hire Developers on a full-time, hourly, or fixed cost project basis and manage them as your extended team."
}

const introduction=[
  {
    image:<img src={magento} alt="virtual reality"/>,
    title:<h3 className='mxr__section-title'>MXR PROVIDES YOU WITH:</h3>,
    features:[
      'Qualified and experienced Magneto developers who assure results.',
      'Robust storefront by employing various Magento versions like Magento 1.9, Magento 2.0.',
      'The most prominent and efficient models of Magento Enterprise Development that boost profitability.',
      'Committed Magento programmers who are ready to jump-start and build a solution for you.',
      'Top 1% Magento developers in India.',
    ],
  }
]

const readytotalk = {
  img: 'MR.jpg',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const Magento = () => {
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

export default Magento
