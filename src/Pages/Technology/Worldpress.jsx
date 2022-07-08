import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaClipboard,FaMobileAlt,FaUserCog,FaLaptopCode,FaSwatchbook,FaShieldAlt} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'
import TechnologyServices from '../../components/TechnologyServices'
import consulting from '../../assets/icons/technologyservices/wordpress/consulting.png'
import api from '../../assets/icons/technologyservices/wordpress/api.png'
import psd from '../../assets/icons/technologyservices/wordpress/psd.png'
import custom from '../../assets/icons/technologyservices/wordpress/custom.png'
import security from '../../assets/icons/technologyservices/wordpress/security.png'
import web from '../../assets/icons/technologyservices/wordpress/web.png'
import website from '../../assets/icons/technologyservices/wordpress/website.png'
import Wordpress from '../../assets/icons/technologyservices/wordpress/wordpress.png'
import support from '../../assets/icons/technologyservices/wordpress/support.png'

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

const services=[
  {
    heading:"WORDPRESS SERVICES",
    data:[
      {
       title:"WEB DEVELOPMENT",
       text:"Are you looking for smart WordPress solutions? We can help you evaluate your business needs and create impressive WordPress sites for mobile devices, PCs, and big screens with our WordPress experts.",
       icon:<img src={web} alt="application"/>,
      },
      {
        title:"SUPPORT AND MAINTENANCE",
        text:"Hire a WordPress developer for regular site maintenance, development solutions, upgrades, expansions, and uninterrupted support, suited to your specific business needs.",
        icon:<img src={support} alt="webservies"/>,
      },
      {
        title:"PSD TO WORDPRESS",
        text:"Our WordPress developers can take a PSD design, slice it and code it into a fully-featured WP responsive site. We can create pixel-perfect, easy-to-use, and fast loading WordPress themes keeping note of the PSD design.",
        icon:<img src={psd} alt="support"/>,
      },
      {
        title:"API DEVELOPMENT",
        text:"Our top WordPress developers can integrate third-party tools and systems, like Google Maps, Google Analytics, MailChimp, etc., through API integrations to make your site extensible.",
        icon:<img src={api}  alt="commerce"/>,
      },
      {
        title:"CONSULTING AND ANALYSIS",
        text:"Our WordPress experts help you identify the best strategies for your WordPress projects. Contact us for specific recommendations and evaluations related to your site repairs, installations, and updates, whenever required.",
        icon:<img src={consulting} alt="b2b" />,
      },
      {
        title:"ENTERPRISE WORDPRESS DEVELOPMENT",
        text:"Our WordPress developers’ team can help create secure, scalable, and fast-loading enterprise applications that offer a top-notch user experience.",
        icon:<img src={Wordpress} alt="consulting"/>,
      },
      {
        title:"WEBSITE MIGRATION",
        text:"Our WordPress developers are efficient in taking files and database backups while migrating sites to new servers so that no critical information is lost.",
        icon:<img src={website}  alt="commerce"/>,
      },
      {
        title:"CUSTOM PLUGIN DEVELOPMENT",
        text:"There’s no doubt that altering the core WP code can be catastrophic. However, our experts are skilled at adding multiple customized plugins in WordPress to modify the way core functions work without changing their code.",
        icon:<img src={custom} alt="b2b" />,
      },
      {
        title:"PERFORMANCE AND SECURITY",
        text:"Hire WordPress experts who are experienced and adept at implementing the best cyber practices to prevent your WordPress platforms from security threats and malware attacks.",
        icon:<img src={security} alt="consulting"/>,
      },

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
      <TechnologyServices service={services}/>
      <Industries />
      <Readytotalk discuss={readytotalk} />
      <Clients />
    </div>
  )
}

export default Worldpress
