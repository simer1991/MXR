import React from 'react'
import { Innerbanner, Process, Readytotalk } from '../../components'
import Design from '../vr/Design'
import wdd from '../../assets/icons/intro/wdd.png'
import DevelopmentService from './DevelopmentService'
import TechnologyStacks from './TechnologyStack'
import { Helmet } from 'react-helmet';


const bannerdata = {
  img: 'webdesign.jpg',
  title: "WEB DESIGN AND DEVELOPMENT",
  text: "Custom MXR experiences to empower your business with a new dimension of virtual reality, effectively used in multiple industries"
}

const introduction=[
  {
    image:<img src={wdd} alt="virtual reality"/>,
    title:<h3 className='mxr__section-title'>WEB DESIGN SERVICES</h3>,
    features:[
      'Modular UI design and development',
      'Progressive web application',
      'Custom wordpress designs',
      'Responsive web design',
      'Designs for corporate blogs',
      
    ],
  }
]
const readytotalk = {
  img: 'MR.jpg',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

function WDD() {
  return (
    <div>
       <Helmet>
        <title>Web Development Services |Wordpress| PHP|Node js | MXR</title>
        <meta name="description" content="MXR is UK based software development company delivering reliable and in-budget solutions for AR, VR, MR, Web and Mobile App development to clients globally." />
        </Helmet>
     <Innerbanner banner={bannerdata} />
     <Design intro={introduction}/>
     <DevelopmentService />
     <Process title="OUR SOFTWARE DEVELOPMENT PROCESS"/>
     <Readytotalk discuss={readytotalk}  />
     <TechnologyStacks />
    </div>
  )
}

export default WDD
