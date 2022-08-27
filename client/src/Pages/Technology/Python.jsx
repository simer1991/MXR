import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import Design from '../vr/Design'
import python from '../../assets/icons/intro/python.png'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import TechnologyServices from '../../components/TechnologyServices'
import experiance from '../../assets/icons/technologyservices/python/experiance.png'
import work from '../../assets/icons/technologyservices/python/work.png'
import select from '../../assets/icons/technologyservices/python/select.png'
import { Helmet } from 'react-helmet'

const bannerdata = {
  img: 'technology-phython.jpg',
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

const services=[
  {
    heading:"3 STEPS TO HIRE YOUR REMOTE DEVELOPER",
    data:[
      {
       title:"SELECT YOUR TEAM",
       text:"We are here to help you out in terms of selecting the best candidate according to your requirement .We compare our teams’ skills with your needs.",
       icon:<img src={select} alt="application"/>,
      },
      {
        title:"WORK COMMENCES WITH DAILY REPORTING",
        text:"Our programmers will work dedicatedly on your project. You will receive daily code check-ins and current reporting in timesheet software.",
        icon:<img src={work} alt="webservies"/>,
      },
      {
        title:"EXPERIENCE CONSISTENT DELIVERY",
        text:"Assign one or several projects to them.  Increase or decrease team size according to business requirements.",
        icon:<img src={experiance} />,
      },
    ]
  }
]

const Python = () => {
  return (
    <div>
      <Helmet>
        <title>
        python - MXR
        </title>
      </Helmet>
      <Innerbanner banner={bannerdata} />
      <Design intro={introduction} />
      <PartnerWithMxr />
      <WhyChoooseMxr />
      <TechnologyServices service={services}/>
      <Industries />
      <Readytotalk discuss={readytotalk} />
      <Clients />
    </div>
  )
}

export default Python
