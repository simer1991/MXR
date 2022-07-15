import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaFileCode,FaDraftingCompass,FaChartLine,FaSync,FaPaintBrush,FaCogs} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'
import TechnologyServices from '../../components/TechnologyServices'
import theme from '../../assets/icons/technologyservices/flutter/theme.png'
import consulting from '../../assets/icons/technologyservices/flutter/consulting.png'
import desktop from '../../assets/icons/technologyservices/flutter/desktop.png'
import flutter from '../../assets/icons/technologyservices/flutter/flutter.png'
import hybrid from '../../assets/icons/technologyservices/flutter/hybrid.png'
import support from '../../assets/icons/technologyservices/flutter/support.png'
import testing from '../../assets/icons/technologyservices/flutter/testing.png'
import ui from '../../assets/icons/technologyservices/flutter/ui.png'
import { Helmet } from 'react-helmet'

const bannerdata = {
  img: 'technology-flutter.jpg',
  title: "HIRE EXPERT FLUTTER DEVELOPERS “ON-DEMAND”",
  text: "We Help Build Custom Flutter Solutions, Delivered within budget and in keeping with your deadlines."
}

const readytotalk = {
  img: 'python.webp',
  title: "READY TO DISCUSS YOUR PROJECT? ",
  text: "We would love to hear about your idea and make it happen. You come to us with your idea, and we do all of the planning and costing for you.",
  button:"CONTACT US",
}

const benifits=[
  {
    heading:"WHY CHOOSE FLUTTER?",
    lists:[
      {
       title:"DART SIMPLIFIES DEVELOPMENT",
       text:"Flutter app developers simply love using the object-oriented programming language, Dart, because it’s AOT (Ahead of Time) compiled to native code that makes Flutter blazing-fast. This apart, Dart helps in creating smooth animations at 60fps. Moreover, its declarative layout is easy to read which eliminates the need for a separate declarative layout language. In essence, Dart in Flutter simplifies and eases the development process significantly.       ",
       icon:<FaFileCode size={30} />,
      },
      {
        title:"SUPER-FAST APP DESIGNS",
        text:"With Flutter, developers can design apps quickly and launch them fast. Flutter offers an extensive library of reusable UI building blocks, utility packages, and functions that aid in the quick designing process. Adding tools, building UIs and removing bugs is easy and hassle-free in Flutter, thanks to its hot reload feature. Developers need not micro-optimize with complex profiling tools when using Flutter. This helps in reducing the app design and development time significantly.",
        icon:<FaDraftingCompass size={30} />,
      },
      {
        title:"HIGH PERFORMANCE",
        text:"Ideal for building complex designs, Flutter is an SDK that facilitates secure and high-performing iOS and Android app development from a shared code structure. The Dart programming language in Flutter helps developers use Just-in-Time compilation for enhanced development workflow. In fact, the availability of extensive Dart libraries and features allows developers to create high-performing native apps for various platforms.",
        icon:<FaChartLine size={30} />,
      },
      {
        title:"CUSTOMIZABLE WIDGETS",
        text:"Flutter is a favorite among the developers because it comes with a customizable and rich kit of widgets for iOS and Android. Flutter developers enjoy huge flexibility in using custom widgets such as buttons, texts, checkboxes, images, layout columns, padding, styles, gesture detectors, etc. This flexibility helps them create refined, smooth and top-notch UIs with Flutter.",
        icon:<FaCogs size={30} />,
      },
      {
        title:"HOT RELOAD",
        text:"Flutter’s hot reload is, by far, one of the most lauded features that allow easy and smooth app development. It helps in injecting the source code files directly into the Dart Virtual Machine. After the VM updates classes with the new functions and fields, the framework instantly rebuilds the widget tree, thereby, enabling developers to view the changes instantly. This helps the developers quickly view the changes in the code files without the need of any restart.",
        icon:<FaSync size={30} />,
      },
      {
        title:"EXPRESSIVE AND BEAUTIFUL UI",
        text:"Flutter’s fully-layered architecture helps developers control every pixel on the screen without letting the quality of graphics, texts or videos, get negatively affected. This open-source UI software development kit enables developers to build awesome interfaces that offer pixel-perfect user experiences on both Android and iOS.",
        icon:<FaPaintBrush size={30} />,
      }

    ]
  }
]

const services=[
  {
    heading:"FLUTTER SERVICES",
    data:[
      {
       title:"FLUTTER APP DEVELOPMENT",
       text:"Looking to build eye-catching Flutter apps with new widgets and attractive UI? Choose from our team of expert Flutter app developers who have the solid technical proficiency to take care of your project.",
       icon:<img src={flutter} alt="application"/>,
      },
      {
        title:"FLUTTER HYBRID APP DEVELOPMENT",
        text:"With us, be assured to get powerful Flutter hybrid apps that run smoothly on web and mobile to offer your customers the ultimate digital experience.",
        icon:<img src={hybrid} alt="webservies"/>,
      },
      {
        title:"FLUTTER TESTING SERVICES",
        text:"We perform unit tests, widget tests and integration tests for monitoring methods, classes, widgets, and other integrated services within your app.",
        icon:<img src={testing} alt="support"/>,
      },
      {
        title:"FLUTTER DESKTOP APP DEVELOPMENT",
        text:"Talk to us if you’re interested in a Mac, Linux or Windows compatible Flutter application. Our qualified Flutter app developers have deep knowledge in creating rich desktop apps with high performance from a single codebase.",
        icon:<img src={desktop}  alt="commerce"/>,
      },
      {
        title:"FLUTTER API AND UI DEVELOPMENT",
        text:"Our competent and creative Flutter team can help you turn your dream project into a reality. We have proven industry experience of building rich APIs for sophisticated, expressive and responsive UIs.",
        icon:<img src={ui} alt="b2b" />,
      },
      {
        title:"FLUTTER SUPPORT AND MAINTENANCE",
        text:"We keep your business objectives in mind and offer quick maintenance solutions related to database server optimization,  code maintenance, security, and other functional enhancements.",
        icon:<img src={support} alt="consulting"/>,
      },
      {
        title:"FLUTTER NATIVE THEME DEVELOPMENT",
        text:"Our Flutter team is our prized asset. We can develop next-gen and leading-edge Flutter native apps by using a single code structure for different themes in record time.",
        icon:<img src={theme} alt="b2b" />,
      },
      {
        title:"FLUTTER CONSULTING",
        text:"We consider each project to be unique, and therefore, we deliver custom-design solutions and consulting services, keeping your customers under focus.",
        icon:<img src={consulting} alt="consulting"/>,
      },

    ]
  }
]


const Flutter = () => {
  return (
    <div>
      <Helmet>
        <title>flutter - MXR</title>
      </Helmet>
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

export default Flutter
