import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaIdCard,FaDice,FaTv,FaFileAlt,FaFolderOpen,FaCogs} from 'react-icons/fa'
import TechnologyServices from '../../components/TechnologyServices'
import WhyChoose from '../../components/WhyChoose'
import hire from '../../assets/icons/technologyservices/woocommerce/hire.png'
import consulting from '../../assets/icons/technologyservices/woocommerce/consulting.png'
import api from '../../assets/icons/technologyservices/woocommerce/api.png'
import maintaince from '../../assets/icons/technologyservices/woocommerce/maintaince.png'
import migration from '../../assets/icons/technologyservices/woocommerce/migration.png'
import payment from '../../assets/icons/technologyservices/woocommerce/payment.png'
import plugin from '../../assets/icons/technologyservices/woocommerce/plugin.png'
import theme from '../../assets/icons/technologyservices/woocommerce/theme.png'
import web from '../../assets/icons/technologyservices/woocommerce/web.png'

const bannerdata = {
  img: 'technology-woocommerce.jpg',
  title: "HIRE EXPERT WOOCOMMERCE DEVELOPERS",
  text: "Hire Developers on a full-time, hourly, or fixed cost project basis and manage them as your extended team."
}

const readytotalk = {
  img: 'python.webp',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const benifits=[
  {
    heading:"WHY CHOOSE WOOCOMMERCE?",
    lists:[
      {
       title:"OPEN-SOURCE DEVELOPMENT",
       text:"Powering more than 2 Million active stores, WooCommerce is managed on GitHub and it is open-source, which lets developers modify and customize every aspect of an eCommerce site. ",
       icon:<FaIdCard size={30} />,
      },
      {
        title:"OVER 400 OFFICIAL EXTENSIONS",
        text:"Right from order management, refunds, stock management, logistics and email management, track everything you need with the help of a variety of tools and extensions in WooCommerce.",
        icon:<FaDice size={30} />,
      },
      {
        title:"BUILT ON WORDPRESS",
        text:"WooCommerce is the most extendable, adaptable and flexible eCommerce solution that’s built on WordPress. Store-owners can seamlessly integrate this feature-rich Platform within WordPress to create out-of-the-box eCommerce templates and designs.",
        icon:<FaTv size={30} />,
      },
      {
        title:"DOCUMENTATION",
        text:"Every API endpoint, hook, filter, major release and extension is carefully documented to help the developers make the necessary modifications and customizations, in terms of themes, payment gateways and more.",
        icon:<FaFileAlt size={30} />,
      },
      {
        title:"REST API",
        text:"Developers can use REST APIs to read and write various parts of WooCommerce data like products, orders, coupons, discounts, customers and shipping channels.",
        icon:<FaCogs size={30} />,
      },
      {
        title:"INTEGRATION-READY",
        text:"Store-owners love WooCommerce because this platform is integration-ready which helps them add pricing, sales banners, products lists, tags, purchases, invoices, shipments, etc.",
        icon:<FaFolderOpen size={30} />,
      }

    ]
  }
]

const services=[
  {
    heading:"WOOCOMMERCE SERVICES",
    data:[
      {
       title:"WOOCOMMERCE WEBSITE CUSTOMIZATION",
       text:"We develop customized features for your online stores so that your business gets the edge it needs.",
       icon:<img src={web} alt="application"/>,
      },
      {
        title:"WOOCOMMERCE MIGRATION",
        text:"We provide easy and hassle-free migration for your existing eCommerce store from any given platform to WooCommerce without any technical issue.",
        icon:<img src={migration} alt="webservies"/>,
      },
      {
        title:"WOOCOMMERCE MAINTENANCE AND SUPPORT",
        text:"In terms of features, security, content and technologies, your site needs to be updated in this evolving industry scenario.",
        icon:<img src={maintaince} />,maintaince
      },
      {
        title:"API INTEGRATION",
        text:"We create new orders, build reports, manage existing products, add new products, and update products, through WooCommerce API integration.",
        icon:<img src={api} />,
      },
      {
        title:"WOOCOMMERCE THEME AND DESIGN",
        text:"Our talented WooCommerce team is adept at handling cutting-edge eCommerce sites. Our creative UX/UI designers are capable of creating fully-featured websites that are visually appealing and bring value to your business.",
        icon:<img src={theme} />,
      },
      {
        title:"HIRE WOOCOMMERCE DEVELOPERS",
        text:"Hire expert WooCommerce developers “On-Demand” and save time and money. Developers work as your extended team and save you 50% costs in the process.",
        icon:<img src={hire} />,
      },
      {
        title:"WOOCOMMERCE PLUGIN DEVELOPMENT",
        text:"Our developers adhere to WordPress plugin coding standards, and the industry best practices to create amazing online stores with added extensions.",
        icon:<img src={plugin} />,
      },
      {
        title:"WOOCOMMERCE PAYMENT GATEWAY INTEGRATION",
        text:"We add multiple secure payment gateways within your eCommerce portals so that your customers can make safe, secure and hassle-free transactions.",
        icon:<img src={payment} />,
      },
      {
        title:"CONSULTING",
        text:"We provide custom consulting services in the areas of design and implementation, application architecture, and application development and management best practices.",
        icon:<img src={consulting} />,
      },
    ]
  }
]

const WooCommerce = () => {
  return (
    <div>
      <Innerbanner banner={bannerdata}/>
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

export default WooCommerce
