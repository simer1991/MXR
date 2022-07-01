import React from 'react'
import { Clients, Industries, Innerbanner } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import Readytotalk from '../../components/readytotalk/Readytotalk'
import WhyChoose from '../../components/WhyChoose'
import {FaFileAlt,FaLaptop,FaLaptopCode,FaTasks,FaUserLock,FaFileCode} from 'react-icons/fa'

const bannerdata = {
  img: 'technology-laravel.jpg',
  title: "HIRE LARAVEL DEVELOPERS",
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
    heading:"WHY CHOOSE LARAVEL?",
    lists:[
      {
       title:"CLEAR DOCUMENTATION",
       text:"Since Laravel comes with a model-view-controller (MVC) pattern and high-end architecture, documentation in Laravel is neat and organized.",
       icon:<FaFileAlt size={30} />,
      },
      {
        title:"EASY UNIT TESTING",
        text:"Performing unit tests of an existing web functionality or a new feature during the development process is smooth and easy with Laravel.",
        icon:<FaLaptopCode size={30} />,
      },
      {
        title:"OBJECT-ORIENTED LIBRARIES",
        text:"There are more than 20 pre-installed libraries in Laravel which offer encryption, CSRF protection, and database security.",
        icon:<FaLaptop size={30} />,
      },
      {
        title:"CACHING",
        text:"Developers can integrate popular caching systems such as APC, Redis, and Memcached in Laravel to augment the performance of an app.",
        icon:<FaTasks size={30} />,
      },
      {
        title:"SECURITY",
        text:"Preventing illegal access, Laravel is a framework that restricts fraud and ensures authentication.",
        icon:<FaUserLock size={30} />,
      },
      {
        title:"BLADE TEMPLATE ENGINE",
        text:"Laravel comes with Blade template engine which helps developers display data easily and even extend web layouts without slowing down application speed.",
        icon:<FaFileCode size={30} />,
      }

    ]
  }
]

const Laravel = () => {
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

export default Laravel
