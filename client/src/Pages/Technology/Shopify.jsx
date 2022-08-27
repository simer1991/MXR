import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaUserCheck,FaPlay,FaMobileAlt,FaTools,FaShoppingCart,FaSitemap} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'
import TechnologyServices from '../../components/TechnologyServices'
import migration from '../../assets/icons/technologyservices/shopify/migration.png'
import integration from '../../assets/icons/technologyservices/shopify/integration.png'
import qa from '../../assets/icons/technologyservices/shopify/qa.png'
import shopify from '../../assets/icons/technologyservices/shopify/shopify.png'
import theme from '../../assets/icons/technologyservices/shopify/theme.png'
import consulting from '../../assets/icons/technologyservices/shopify/consulting.png'
import { Helmet } from 'react-helmet'

const bannerdata = {
  img: 'technology-shopify.jpg',
  title: "HIRE SHOPIFY DEVELOPERS",
  text: "Hire Shopify Developers on a full-time, hourly, or fixed cost project basis and manage them as your extended team."
}

const readytotalk = {
  img: 'python.webp',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const benifits=[
  {
    heading:"WHY CHOOSE SHOPIFY?",
    lists:[
      {
       title:"FLEXIBLE FUNCTIONALITIES",
       text:"Right from DRM watermarking to email marketing integrations, developers can add multiple extensions to Shopify to step up its core functionalities.",
       icon:<FaUserCheck size={30} />,
      },
      {
        title:"BLOGGING PLATFORM",
        text:"Shopify’s embedded capabilities are perfect for creating the most engaging eCommerce blogs. Shopify covers the blogging basics like a great visual editor, features for inserting images and videos, SEO-optimized tools like description boxes, title sections and tags.",
        icon:<FaPlay size={30} />,
      },
      {
        title:"MOBILE COMMERCE READY",
        text:"Over 50% of all eCommerce traffic in Shopify is from mobile devices. Entrepreneurs across the globe prefer Shopify because it comes with multiple mobile-friendly features which can be enhanced with mobile-friendly checkouts, responsive themes and mobile stores. ",
        icon:<FaMobileAlt size={30} />,
      },
      {
        title:"NO HOSTING OR MAINTENANCE COSTS",
        text:"Shopify is truly cost-effective, in terms of maintenance and hosting. Store-owners can easily launch a Shopify store without any major cost or maintenance charges.",
        icon:<FaTools size={30} />,
      },
      {
        title:"CUSTOMIZED ONLINE STORE",
        text:"The best way to stand out in the crowd is to create a visually appealing online store. And with Shopify, developers get the chance to access the dashboard, navigate to the theme section and choose their favorite theme to create a customized site and an attractive online store.",
        icon:<FaShoppingCart size={30} />,
      },
      {
        title:"SEAMLESS INTEGRATION",
        text:"Shopify developers can use robust APIs to support seamless integrations with PIM, ERP, OMS and 3PL. Integrating Shopify with over 100 secure payment gateways, including Apple Pay and PayPal is also easy.",
        icon:<FaSitemap size={30} />,
      }

    ]
  }
]

const services=[
  {
    heading:"SHOPIFY SERVICES",
    data:[
      {
       title:"SHOPIFY MOBILE STORE DEVELOPMENT",
       text:"We create custom mobile storefronts with cross-device compatibility. Our experts have deep industry knowledge to create visually engaging Shopify stores.",
       icon:<img src={shopify} alt="application"/>,
      },
      {
        title:"SHOPIFY INTEGRATION",
        text:"As Shopify integration experts, we focus on creating Shopify storefronts that connect diverse third-party modules and addons.",
        icon:<img src={integration} alt="webservies"/>,
      },
      {
        title:"SHOPIFY MIGRATION",
        text:"Our certified and experienced migration experts help in shifting your business from eCommerce platforms like BigCommerce, Magento, WooCommerce and Volusion to Shopify.",
        icon:<img src={migration} alt="support"/>,
      },
      {
        title:"SHOPIFY THEME DESIGN AND CUSTOMIZATION",
        text:"We follow Shopify standards to develop and create custom themes from scratch. We ensure that the design and the theme created for your eCommerce store helps in engaging customers and new leads.",
        icon:<img src={theme}  alt="commerce"/>,
      },
      {
        title:"SHOPIFY QA AND TESTING",
        text:"We have a dedicated Quality Assurance and Testing team that helps in assessing the usability of your Shopify store.",
        icon:<img src={qa} alt="b2b" />,
      },
      {
        title:"CONSULTING AND SUPPORT",
        text:"If you want your Shopify web store to function with optimum effectiveness without any technical glitches, talk to us.",
        icon:<img src={consulting} alt="consulting"/>,
      },

    ]
  }
]

const Shopify = () => {
  return (
    <div>
      <Helmet>
        <title>shopify - MXR</title>
      </Helmet>
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

export default Shopify
