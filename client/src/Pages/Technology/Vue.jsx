import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaIdCard,FaFistRaised,FaFileAlt,FaExchangeAlt,FaMobileAlt,FaCogs} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'
import TechnologyServices from '../../components/TechnologyServices'
import save from '../../assets/icons/technologyservices/vue/save.png'
import custom from '../../assets/icons/technologyservices/vue/custom.png'
import interactive from '../../assets/icons/technologyservices/vue/interactive.png'
import single from '../../assets/icons/technologyservices/vue/single.png'
import support from '../../assets/icons/technologyservices/vue/support.png'
import vuejs from '../../assets/icons/technologyservices/vue/vuejs.png'
import { Helmet } from 'react-helmet'

const bannerdata = {
  img: 'technology-vue.jpg',
  title: "HIRE VUE.JS DEVELOPERS",
  text: "Hire Vue.js Developers on a full-time, hourly, or fixed cost project basis and manage them as your extended team."
}

const readytotalk = {
  img: 'MR.jpg',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const benifits=[
  {
    heading:"WHY CHOOSE VUE.JS?",
    lists:[
      {
       title:"LIGHTWEIGHT AND BLAZING-FAST",
       text:"Vue.js is pleasant to write in, easy to learn and extremely lightweight. Having a size of around 20-30KB, Vue.js is a framework that easily integrates into existing apps built with JavaScript. It offers blazing-fast downloads. You can even migrate existing projects to Vue smoothly.",
       icon:<FaIdCard size={30} />,
      },
      {
        title:"HANDY-CONVENTIONS",
        text:"Writing boilerplate code is a resource and time-consuming task. However, Vue.js comes with multiple built-in solutions and time-saving conventions that let businesses save their resources and time. In short, developers must use Vue.js if they do not want to reinvent the wheel.        ",
        icon:<FaFistRaised size={30} />,
      },
      {
        title:"WONDERFULLY DOCUMENTED",
        text:"Detailed and extensive Vue.js documentation makes it easy and quick to learn. In fact, the documentation is so comprehensive that a developer simply needs to know the basic JavaScript and HTML to create and deploy Vue.js apps.",
        icon:<FaFileAlt size={30} />,
      },
      {
        title:"TRANSITION EFFECTS",
        text:"Vue.js helps in adding and removing classes on elements/components during the transition process. Vue.js will add or eliminate CSS classes at suitable times to trigger CSS transitions for you, and you can offer JS hook functions to perform customized DOM manipulations during the transition process.        ",
        icon:<FaExchangeAlt size={30} />,
      },
      {
        title:"ADAPTIVE",
        text:"Vue is created to be an extremely adaptable framework that seamlessly integrates with other libraries. This uncomplicated and flexible JS-based framework, used for developing iOS and Android apps, offers 100% access to API without the need to depend on extensions and plugins.        ",
        icon:<FaMobileAlt size={30} />,
      },
      {
        title:"FUTURE-PROOF",
        text:"Vue.js is a progressive JavaScript framework that is enterprise-ready and future-ready. It is easy to upgrade and integrate. It facilitates two-way data binding. Moreover, the new Vue CLI helps developers build new projects with unit testing, routing, linting, TypeScript, etc. This framework is evolving and offering new solutions, which is why developers across the globe are considering it as a great choice for building future apps of different sizes and scales.        ",
        icon:<FaCogs size={30} />,
      }

    ]
  }
]

const services=[
  {
    heading:"VUE.JS SERVICES",
    data:[
      {
       title:"CUSTOM DEVELOPMENT",
       text:"Our Vue.js programmers have a strong experience in extremely secure and robust Vue.js custom app development services.",
       icon:<img src={custom} alt="application"/>,
      },
      {
        title:"INTERACTIVE DASHBOARDS",
        text:"We specialize in creating easily configurable and interactive dashboards for our clients. Our Vue.js programmers are experts at offering dynamic and effective customization of dashboards with resizable as well as draggable panels.",
        icon:<img src={interactive} alt="webservies"/>,
      },
      {
        title:"VUE.JS UPGRADATION AND MIGRATION",
        text:"We have an amazing team of Vue.js engineers who’re proficient in upgrading current apps to newer versions and re-engineering apps with cutting-edge technologies.",
        icon:<img src={vuejs} alt="support"/>,
      },
      {
        title:"SINGLE-PAGE APP DEVELOPMENT",
        text:"We’re skilled at creating great front-ends and single-page applications (SPAs) using Vue.js. We have proven experience in building adaptive UI and single-page apps that help in bringing new leads and converting them into customers.",
        icon:<img src={single} />,
      },
      {
        title:"ONLINE SHOPS AND MARKETPLACES",
        text:"When it comes to e-Shops and Marketplace development services, our talented team of Vue.js developers offers top-of-the-line solutions for global clients.",
        icon:<img src={save} />,
      },
      {
        title:"VUE.JS SUPPORT SOLUTIONS",
        text:"Right from enhancing the security, usability, and performance of your current apps to stepping up your legacy systems, we take care of multiple aspects and offer top-notch solutions for the same.",
        icon:<img src={support} />,
      },

    ]
  }
]
const Vue = () => {
  return (
    <div>
      <Helmet>
        <title>vuejs - MXR</title>
      </Helmet>
      <Innerbanner banner={bannerdata}/>
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

export default Vue
