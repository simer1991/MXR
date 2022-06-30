import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import Design from '../vr/Design'
import python from '../../assets/icons/intro/python.png'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'

const bannerdata = {
  img: 'technology-python.jpg',
  title: "HIRE DEDICATED PYTHON DEVELOPERS",
  text: "Our expert developers will analyze your organization’s unique requirements and implement the perfect upgrades or build new software from the ground up."
}

const introduction=[
  {
    image:<img src={python} alt="virtual reality"/>,
    title:<h3 className='mxr__section-title'>FEATURES</h3>,
    features:[
      'Hire expert Python developers within a week',
      'Augment your in-house Python teams with offshore developers.',
      'Quickly ramp up and scale down your Python team as needed',
      'Cut costs by up to 50% without compromising on quality.',
      'Reduce your time to market.',
      'Keep complete control over the project, milestones, and deliverables.',
    ],
  }
]

const readytotalk = {
  img: 'python.webp',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const Python = () => {
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

export default Python
