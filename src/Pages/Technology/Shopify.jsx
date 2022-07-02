import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaUserCheck,FaPlay,FaMobileAlt,FaTools,FaShoppingCart,FaSitemap} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'

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

const Shopify = () => {
  return (
    <div>
      <Innerbanner banner={bannerdata}/>
      <WhyChoose benifit={benifits}/>
      <PartnerWithMxr />
      <WhyChoooseMxr />
      <Industries />
      <Readytotalk discuss={readytotalk} />
      <Clients />
    </div>
  )
}

export default Shopify
