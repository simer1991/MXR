import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaShieldAlt,FaLaptopCode,FaTools,FaHandShake,FaAddressBook,FaSketch} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'

const bannerdata = {
    img: 'codeigniter.jpg',
    title: "HIRE CODEIGNITER DEVELOPERS",
    text: "Hire CodeIgniter Developers on a full-time, hourly, or fixed cost project basis and manage them as your extended team."
  }

  const readytotalk = {
    img: 'MR.jpg',
    title: "READY TO DISCUSS YOUR PROJECT? ",
    text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
    button:"CONTACT US",
  }

  const benifits=[
    {
      heading:"WHY CHOOSE CODEIGNITER?",
      lists:[
        {
         title:"SECURITY",
         text:"CodeIgniter is very secure with built-in protection against CSRF and XSS attacks. Version 4 adds context-sensitive escaping and CSP.",
         icon:<FaShieldAlt size={30} />,
        },
        {
          title:"LESS CODING, FASTER DEVELOPMENT",
          text:"Requiring shorter and fewer codes, this PHP framework does not take a lot of installation, configuration, or execution time",
          icon:<FaLaptopCode size={30} />,
        },
        {
          title:"EASY CUSTOMIZATION",
          text:"Developers can easily customize existing libraries, write new libraries, and use shortcodes in CodeIgniter, which makes it one of the most preferred PHP frameworks in the market.",
          icon:<FaTools size={30} />,
        },
        {
          title:"COMMUNITY SUPPORT",
          text:"With over 57000 registered members on the CodeIgniter forum, receiving industry-focussed solutions and recommendations is easy and quick.",
          icon:<FaShieldAlt size={30} />,
        },
        {
          title:"POPULAR MVC ARCHITECTURE",
          text:"Designing HTML codes and managing separate code forms are easy in CI’s MVC architecture, resulting in a logic-based and synchronized development process.",
          icon:<FaAddressBook size={30} />,
        },
        {
          title:"GREAT PERFORMANCE",
          text:"CodeIngiter is lightweight and performs better in comparison to many of its peers.",
          icon:<FaSketch size={30} />,
        }
  
      ]
    }
  ]

const CodeIngenator = () => {
  return (
    <div>
      <Innerbanner banner={bannerdata} />
      <WhyChoose benifit={benifits}/>
      <PartnerWithMxr />
      <WhyChoooseMxr />
      <Industries />
      <Readytotalk discuss={readytotalk} />
      <Clients />
    </div>
  )
}

export default CodeIngenator
