import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaIdCard,FaClock,FaPlug,FaFile,FaCode,FaUsers} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'
import TechnologyServices from '../../components/TechnologyServices'
import migration from '../../assets/icons/technologyservices/ionic/migration.png'
import ionic from '../../assets/icons/technologyservices/ionic/ionic.png'
import support from '../../assets/icons/technologyservices/ionic/support.png'
import testing from '../../assets/icons/technologyservices/ionic/testing.png'
import custom from '../../assets/icons/technologyservices/ionic/custom.png'
import app from '../../assets/icons/technologyservices/ionic/app.png'
import { Helmet } from 'react-helmet'

const bannerdata = {
  img: 'technology-ionic.jpg',
  title: "HIRE EXPERT IONIC DEVELOPERS “ON-DEMAND”",
  text: "We Help Build Custom Ionic Solutions, Delivered within budget and in keeping with your deadlines."
}

const readytotalk = {
  img: 'python.webp',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const benifits=[
  {
    heading:"WHY CHOOSE IONIC?",
    lists:[
      {
       title:"BEAUTIFUL UI COMPONENTS",
       text:"Ionic comes with default styles that help developers create cross-platform apps with native elements within a short time. Built with intuitive UI elements with a collection of premium plugins, Ionic allows developers to add native device functionality to Android, iOS and web apps. Predefined styling helps developers create an engaging prototype quickly, without the need to add individual touches on each element, making development a cakewalk.",
       icon:<FaIdCard size={30} />,
      },
      {
        title:"EASY DEVELOPMENT AND QUICK TESTING",
        text:"There is a feature in Ionic called the Ionic lab that shows how your app will look on multiple platforms. This makes app development, testing, and deployment easy and smooth. Moreover, if there is a change in the code, the live reload gets triggered instantly and every element is updated automatically.",
        icon:<FaClock size={30} />,
      },
      {
        title:"CORDOVA PLUGINS",
        text:"The availability of Cordova plugins in Ionic helps developers access native APIs such as geolocation, camera, contacts, compass, logs, notifications, media storage, battery, etc. This allows the developers to customize and boost the app development process. Developers can leverage the Cordova plugins and extensions to create high-quality apps, and deploy them on multiple platforms. This saves them time, effort and money.",
        icon:<FaPlug size={30} />,
      },
      {
        title:"POWERFUL CLI",
        text:"Ionic is renowned for its handy command-line interface. Its useful and powerful CLI steps up the scriptability, stability, and scalability of apps and reduces the development time. When it comes to creating new projects, new files and folders, and compiling projects to native apps, Ionic CLI tools prove to be of massive help.",
        icon:<FaFile size={30} />,
      },
      {
        title:"ONE CODE FOR ALL",
        text:"Ionic developers can build multiple apps for different platforms using one code-base. This is a massive advantage for the developers since they need not write separate codes for building iOS, Android or Windows apps. They can simply reuse the same code structure for creating Ionic apps on different platforms, which saves them time and effort. Ionic’s code reusability helps in fewer development risks, improved performance, better maintenance, enhanced reliability and reduced development time.",
        icon:<FaCode size={30} />,
      },
      {
        title:"AWESOME COMMUNITY",
        text:"Ionic is supported by an enormous community of over 5 million developers in more than 200 countries. Developers can easily connect and be a part of hundreds of meetups, conferences, forums and seminars, to expand their knowledge and improve their industry skills. This is a vibrant community that’s always ready to help people with valuable suggestions, articles, insights and ideas. And if someone gets lucky, he might also get answers directly from the founders of the Ionic framework.",
        icon:<FaUsers size={30} />,
      }

    ]
  }
]

const services=[
  {
    heading:"IONIC SERVICES",
    data:[
      {
       title:"CUSTOM IONIC APP DEVELOPMENT",
       text:"Connect with us if you’re interested in tailor-built Ionic apps. We work around your unique needs by creating visually appealing Ionic apps with AngularJS, NodeJS, HTML5, and CSS.",
       icon:<img src={custom} alt="application"/>,
      },
      {
        title:"IONIC ECOMMERCE APP DEVELOPMENT",
        text:"Let us build high-quality eCommerce apps on Ionic that render an awesome experience to users with its attractive UI and UX.",
        icon:<img src={ionic} alt="webservies"/>,
      },
      {
        title:"IONIC TESTING SERVICES",
        text:"Industry leaders, startups, SMEs and mature businesses rely on our quality assurance and control services for their complex apps and systems.",
        icon:<img src={testing} alt="support"/>,
      },
      {
        title:"IONIC APP UI/UX DESIGN",
        text:"Trust us for trailblazing UI/UX solutions from our dedicated team of Ionic experts. Based on your specific business requirements, our Ionic app developers can create sketches, wireframes, user flow and websites for best-in-class visual interfaces.",
        icon:<img src={app}  alt="commerce"/>,
      },
      {
        title:"IONIC MIGRATION SERVICES",
        text:"We can help your business gain an extra edge by migrating your legacy apps to the Ionic framework. Our coders are experts at migrating your data across databases and apps across development platforms.",
        icon:<img src={migration} alt="b2b" />,
      },
      {
        title:"IONIC APP SUPPORT AND MAINTENANCE",
        text:"Talk to our experts to keep your Ionic apps competitive, flawless, high-performant and up-to-date.",
        icon:<img src={support} alt="consulting"/>,
      },

    ]
  }
]


const Ionic = () => {
  return (
    <div>
      <Helmet>
        <title>ionic - MXR</title>
      </Helmet>
      <Innerbanner banner={bannerdata} />
      <WhyChoose benifit={benifits}/>
      <PartnerWithMxr />
      <WhyChoooseMxr />
      <TechnologyServices service={services}/>
      <Industries />
      <Readytotalk discuss={readytotalk}/>
      <Clients />
    </div>
  )
}

export default Ionic
