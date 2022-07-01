import React from 'react'
import { Clients, Industries, Innerbanner } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import Readytotalk from '../../components/readytotalk/Readytotalk'
import WhyChoose from '../../components/WhyChoose'
import {FaIdCard,FaLaptop,FaChartLine,FaBatteryThreeQuarters,FaLaptopCode,FaUserCog} from 'react-icons/fa'

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
    heading:"WHY CHOOSE PHP?",
    lists:[
      {
       title:"OPENSOURCE",
       text:"This is why most agencies prefer to work with PHP. Its cost-free with no license fee or third-party charges making it a better choice for most business owners.",
       icon:<FaIdCard size={30} />,
      },
      {
        title:"BUILT FOR THE WEB",
        text:"PHP is fundamentally an Internet-aware system with built-in modules for accessing FTP servers and many database servers, including PostgreSQL, MySQL, Microsoft SQL Server, LDAP servers, and others.",
        icon:<FaLaptop size={30} />,
      },
      {
        title:"SCALABLE",
        text:"PHP can be deployed to scale horizontally to accommodate additional users and traffic without any decline performance.",
        icon:<FaChartLine size={30} />,
      },
      {
        title:"CROSS-PLATFORM",
        text:"PHP’s cross-platform integration is excellent as it can work on different platforms such as Linux, UNIX, Solaris, and Windows.",
        icon:<FaLaptopCode size={30} />,
      },
      {
        title:"POWERS 80% OF THE WEB",
        text:"As of August 2019, PHP was used as the server-side programming language on 79.1% of websites.",
        icon:<FaBatteryThreeQuarters size={30} />,
      },
      {
        title:"RAPID DEVELOPMENT",
        text:"PHP is fundamentally an Internet-aware system with built-in modules for accessing FTP servers and many database servers, including PostgreSQL, MySQL, Microsoft SQL Server, LDAP servers, and others.PHP offers several frameworks for Rapid Application Development including PRADO, CakePHP, Symfony, CodeIgniter, Laravel, Yii Framework, Phalcon, and Zend Framework.",
        icon:<FaUserCog size={30} />,
      }

    ]
  }
]
const Php = () => {
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

export default Php
