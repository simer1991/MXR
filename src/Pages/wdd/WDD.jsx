import React from 'react'
import { Innerbanner } from '../../components'
import Design from '../vr/Design'
import wdd from '../../assets/icons/intro/wdd.png'
import DevelopmentService from './DevelopmentService'

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

function WDD() {
  return (
    <div>
     <Innerbanner banner={bannerdata} />
     <Design intro={introduction}/>
     <DevelopmentService />
    </div>
  )
}

export default WDD
