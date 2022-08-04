import React from 'react'
import { Innerbanner ,Industries, Readytotalk, Clients} from '../../components'
import Design from '../vr/Design'
import magento from '../../assets/icons/intro/magento.png'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import TechnologyServices from '../../components/TechnologyServices'
import migration from '../../assets/icons/technologyservices/magento/migration.png'
import commerce from '../../assets/icons/technologyservices/magento/commerce.png'
import b2b from '../../assets/icons/technologyservices/magento/b2b.png'
import consulting from '../../assets/icons/technologyservices/magento/consulting.png'
import extesions from '../../assets/icons/technologyservices/magento/extensions.png'
import magentos from '../../assets/icons/technologyservices/magento/magento.png'
import { Helmet } from 'react-helmet'


const bannerdata = {
  img: 'technology-magento.jpg',
  title: "MAGENTO DESIGN & DEVELOPMENT",
  text: "Magento is an open-source technology and its based on e-commerce platform that provides an array of features and flexibility to online merchants."
}

const introduction=[
  {
    image:<img src={magento} alt="virtual reality"/>,
    title:<h3 className='mxr__section-title'>MXR PROVIDES YOU WITH:</h3>,
    features:[
      'Qualified and experienced Magneto developers who assure results.',
      'Robust storefront by employing various Magento versions like Magento 1.9, Magento 2.0.',
      'The most prominent and efficient models of Magento Enterprise Development that boost profitability.',
      'Committed Magento programmers who are ready to jump-start and build a solution for you.',
      'Top 1% Magento developers in India.',
    ],
  }
]

const readytotalk = {
  img: 'MR.jpg',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const services=[
  {
    heading:"OUR MAGENTO COMPETENCIES",
    data:[
      {
       title:"MAGENTO ENTERPRISE DEVELOPMENT",
       text:"Certified Magento developers at MXR assists in building an enterprise site with modernized product catalogs, integrated analytics tools, SEO friendly features, order management systems more.",
       icon:<img src={magentos} alt="application"/>,
      },
      {
        title:"MAGENTO EXTENSIONS",
        text:"Our Magento developers are skilled at building customized Magento extensions for your eCommerce web portals.",
        icon:<img src={extesions} alt="webservies"/>,
      },
      {
        title:"MAGENTO MIGRATION",
        text:"Our experienced team of developers can help you with the migration from Magento 1 to Magento 2, enabling a faster load time, full-page caching, a huge number of transactions, simplified registration process and smooth checkout.",
        icon:<img src={migration} alt="support"/>,
      },
      {
        title:"MAGENTO COMMERCE CLOUD",
        text:"With a thriving release of Magento 2 Commerce solutions for multiple storefronts, B2B, and B2C clients, we direct businesses to craft personalized content and promotions while ensuring a smooth purchase path.",
        icon:<img src={commerce}  alt="commerce"/>,
      },
      {
        title:"MAGENTO B2B DEVELOPMENT",
        text:"Whether it is integrating complex shipping channels or customizing order processes to managing catalog systems, our dedicated Magento developers are proficient in everything.",
        icon:<img src={b2b} alt="b2b" />,
      },
      {
        title:"MAGENTO CONSULTING",
        text:"Our certified Magento consultants make a plan after discussion with you to cover both the strategic and the technical aspects of your site’s maintenance, offering a customer-focused, branded that extends your reach to success.",
        icon:<img src={consulting} alt="consulting"/>,
      },

    ]
  }
]


const Magento = () => {
  return (
    <div>
      <Helmet>
        <title>magento - MXR</title>
      </Helmet>
      <Innerbanner banner={bannerdata} />
      <Design intro={introduction} />
      <PartnerWithMxr />
      <WhyChoooseMxr />
      <TechnologyServices service={services}/>
      <Industries />
      <Readytotalk discuss={readytotalk} />
      <Clients />
    </div>
  )
}

export default Magento
