import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaClipboard,FaMobileAlt,FaUserCog,FaLaptopCode,FaSwatchbook,FaShieldAlt} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'

const bannerdata = {
  img: 'technology-worldpress.jpg',
  title: "HIRE WORDPRESS DEVELOPERS",
  text: "Hire WordPress Developers on a full-time, hourly, or fixed cost project basis and manage them as your extended team."
}

const readytotalk = {
  img: 'python.webp',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const benifits=[
  {
    heading:"WHY CHOOSE WORDPRESS?",
    lists:[
      {
       title:"POPULAR CMS",
       text:"Around 75 million websites use WordPress currently, as per Netcraft. It’s a great CMS for trade associations, educational institutes, non-profits, publications, government portals, and of course, corporate sites.",
       icon:<FaClipboard size={30} />,
      },
      {
        title:"MOBILE-FRIENDLY",
        text:"Plugins such as WordPress Mobile Pack, Jetpack, WPTouch, and WP Mobile Edition can help you create mobile-optimized WordPress sites. Mobile-friendly WordPress sites are clean, uncluttered, easily readable with proper spacing of hyperlinks and without full-page pop-ups.",
        icon:<FaMobileAlt size={30} />,
      },
      {
        title:"EASY INTERFACE FOR EDITORS/WRITERS",
        text:"Perfect for non-technical editors and writers, WordPress comes with a WYSIWYG (What You See Is What You Get) interface. Adding new content, images, links, pages, and other data is easy with WordPress, making it a preferred CMS for most organizations worldwide.",
        icon:<FaLaptopCode size={30} />,
      },
      {
        title:"HIGHLY CUSTOMIZABLE",
        text:"Developers can create and modify different WordPress layouts by adding features like image galleries, live Twitter feeds, and event calendars. Moreover, developers can customize sites by integrating tools like Google Analytics to track users, OptinMonster to grow email subscribers, and Yoast SEO to make the site search-friendly.",
        icon:<FaSwatchbook size={30} />,
      },
      {
        title:"LOWER MAINTENANCE COST",
        text:"WordPress incurs less set-up, maintenance, and customization costs, which makes it an affordable CMS. Moreover, a quick expected time to launch makes this open-source CMS a popular choice among managers and entrepreneurs.",
        icon:<FaUserCog size={30} />,
      },
      {
        title:"SECURE",
        text:"There are multiple free and paid options to invest in a secure WordPress template.",
        icon:<FaShieldAlt size={30} />,
      }

    ]
  }
]

const Worldpress = () => {
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

export default Worldpress
