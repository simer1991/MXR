import React from 'react'
import { Clients, Industries, Innerbanner, Readytotalk } from '../../components'
import PartnerWithMxr from '../../components/PartnerWithMxr'
import WhyChoooseMxr from '../../components/WhyChoooseMxr'
import {FaCogs,FaChild,FaFileCode,FaClipboardList,FaLaptopCode,FaWindowRestore} from 'react-icons/fa'
import WhyChoose from '../../components/WhyChoose'
import TechnologyServices from '../../components/TechnologyServices'
import api from '../../assets/icons/technologyservices/angular/api.png'
import angularconsulting from '../../assets/icons/technologyservices/angular/angular-consulting.png'
import angular from '../../assets/icons/technologyservices/angular/angular.png'
import dedicated from '../../assets/icons/technologyservices/angular/dedicated.png'
import real from '../../assets/icons/technologyservices/angular/real.png'
import migration from '../../assets/icons/technologyservices/angular/migration.png'

const bannerdata = {
  img: 'technology-angular.jpg',
  title: "HIRE ANGULAR DEVELOPERS",
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
    heading:"WHY CHOOSE ANGULAR?",
    lists:[
      {
       title:"COMPONENT-BASED ARCHITECTURE",
       text:"Angular’s component-based architecture helps developers easily split, decouple, and re-integrate web and mobile apps into individual components. These independent components/modules can be reused like LEGO blocks for building customized, bug-free, and easy-to-maintain apps, at reduced development time.",
       icon:<FaCogs size={30} />,
      },
      {
        title:"COMMAND-LINE INTERFACE (CLI)",
        text:"The Angular CLI is a powerful tool that helps scaffold, generate, develop, test, and deploy application code with greater ease. It takes away the tedious tasks of manually configuring files. It allows developers to add components and run end-to-end unit tests with the minimum command, thereby facilitating faster development and cutting down JS fatigue",
        icon:<FaChild size={30} />,
      },
      {
        title:"CODE CONSISTENCY",
        text:"Inconsistent coding leads to delayed releases and rising costs. However, Angular’s component-based architecture provides code consistency, optimizes cohesion, improves code readability, and updates predefined snippets within apps, thereby ensuring a smooth development process with improved code style.",
        icon:<FaFileCode size={30} />,
      },
      {
        title:"DEPENDENCY INJECTION",
        text:"Angular’s built-in Dependency Injection (DI) design pattern adds objects or components at runtime, offering better program workflow within an app. It allows injected objects to be overridden (if required), providing better code readability. Angular’s DI is a paradigm, which keeps coding highly flexible, cohesive, testable, and mutable.",
        icon:<FaClipboardList size={30} />,
      },
      {
        title:"SIMPLIFIED UNIT TESTS",
        text:"Good unit test coverage allows developers to refactor with confidence. This is where Angular’s unit-testing readiness proves to be beneficial. It helps developers write tests for individual entities – from components, services, pipes to widgets. Developers can isolate each code piece to detect errors earlier in the development cycle, thereby lowering correction costs",
        icon:<FaLaptopCode size={30} />,
      },
      {
        title:"IVY RENDERER",
        text:"Ivy is Angular’s ahead-of-time compiler by default. This next-gen rendering pipeline reduces bundle size, recompiles components, debugs templates, removes unused code, improvises builds, and makes apps smaller for lazy loading and faster runtimes across mobile devices and tablets.        ",
        icon:<FaWindowRestore size={30} />,
      }

    ]
  }
]

const services=[
  {
    heading:"ANGULAR SERVICES",
    data:[
      {
       title:"ANGULAR APP DEVELOPMENT",
       text:"Talk to us if you want to get top-notch solutions with Angular. Our developers are adept at creating applications that offers high-end UX standards.",
       icon:<img src={angular} alt="application"/>,
      },
      {
        title:"REAL-TIME APPS",
        text:"Contact us if you want to create real-time apps like Chat Apps and Instant Messengers with AngularFire or Socket. Our certified Angular developers can integrate your chat app with NodeJS.",
        icon:<img src={real} alt="webservies"/>,
      },
      {
        title:"ANGULAR CONSULTING",
        text:"Our seasoned Angular professionals and consultants can help you with organizing your Angular project structure, using TypeScripts, using Angular and CLI for code generation.",
        icon:<img src={angularconsulting} alt="support"/>,
      },
      {
        title:"API DEVELOPMENT",
        text:"We offer scalable and advanced enterprise-based Angular API development services, according to your specific business needs.",
        icon:<img src={api} />,
      },
      {
        title:"MIGRATION SERVICES",
        text:"Do you need to migrate your UI to Angular? Contact our developers who’re proficient at coming up with awesome migration strategies that simplify the entire process. Our developers can also upgrade Angular apps to a more advanced version.",
        icon:<img src={migration} />,
      },
      {
        title:"DEDICATED ANGULAR DEVELOPERS",
        text:"Hiring dedicated Angular developers remotely can help your business scale faster and get the reliable capacity to always deliver on time",
        icon:<img src={dedicated} />,
      },
    ]
  }
]

const Angular = () => {
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

export default Angular
