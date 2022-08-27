import React from 'react'
import { Container,Tab,Tabs } from 'react-bootstrap-v5'
import './values.css';
import confidentiality from '../assets/icons/values/Confidentiality.png';
import profession from '../assets/icons/values/profession.png';
import account from '../assets/icons/values/account.png';
import transparancy from '../assets/icons/values/transparancy.png';
import certanility from '../assets/icons/values/certanility.png';
import handon from '../assets/icons/values/handon.png';
import control from '../assets/icons/values/control.png';
import pridictability from '../assets/icons/values/predictability.png';
import agile from '../assets/icons/values/agile.png';
import decops from '../assets/icons/values/decops.png';
import research from '../assets/icons/values/research.png';
import innovation from '../assets/icons/values/innovation.png';
function Values() {
  return (
    <div className='mxr__values mxr__section'>
      <Container>
        <h3 className='mxr__section-title'>VALUES</h3>
        <Tabs className='mb-3 mxr__tabs'>
          <Tab eventKey="buisness" title="Business Ethics">
            <ul>
              <li>
                <div><img src={confidentiality} alt="confidentiality"/></div>
                <label>CONFIDENTIALITY</label>
                <p>Maintaining the trust of the client who has engaged us is part of our business ethics. We have strict confidentiality standards in place to ensure that our clients’ information is kept secure.</p>
              </li>
              <li>
                <div><img src={profession} alt="profession"/></div>
                <label>PROFESSIONALISM</label>
                <p>Before we even propose our proposal, we make certain that we can add actual value to our client’s business. As a result, we always exceed our clients’ expectations.</p>
              </li>
            </ul>
            <ul>
            <li>
                <div><img src={account} alt="account"/></div>
                <label>ACCOUNTABILITY</label>
                <p>We are responsible for the outcomes of our own effort. In our client interactions, we explicitly establish expectations and make a commitment to deliver the quality that our clients expect.</p>
              </li>
              <li>
                <div><img src={transparancy} alt="transparancy"/></div>
                <label>TRANSPARENCY</label>
                <p>There can be no trust unless there is honesty. Transparency is also a core principle for us because we develop trusting relationships with our clients. Our work culture values open communication.</p>
              </li>
            </ul>
          </Tab>
          <Tab eventKey="service" title="Service Quality">
           <ul>
            <li>
            <div><img src={certanility} alt="certanility"/></div>
                <label>CERTAINTY</label>
                <p>We clarify the expectations – technical specifications, technological stack, team, delivery timetable, and scope of service – before signing the contract, and we stick to them.</p>
            </li>
            <li>
            <div><img src={handon} alt="hands-on-assistance"/></div>
                <label>HANDS-ON ASSISTANCE</label>
                <p>We give direction, advice, and hands-on support for all of our clients throughout the project development process as a dependable software development vendor.</p>
            </li>
           </ul>
           <ul>
           <li>
            <div><img src={control} alt="control"/></div>
                <label>CONTROL</label>
                <p>Our clients have a strong sense of ownership over the projects they are working on. Regular communication, clear reporting, and access to project management tools are all established.</p>
            </li>
            <li>
            <div><img src={pridictability} alt="hands-on-assistance"/></div>
                <label>PREDICTABILITY</label>
                <p>Our project management techniques and approaches have been fine-tuned to produce predictable outcomes. Our clients are always up to date on the status of their project, as well as upcoming deadlines, worklogs, and pricing.</p>
            </li>
           </ul>
          </Tab>
          <Tab eventKey="technology" title="Technology Culture">
           <ul>
            <li>
            <div><img src={agile} alt="agile"/></div>
              <label>AGILE</label>
              <p>Our regular work practise is to use the Agile software development methodology and its latest methods. For both our clients and ourselves, Agile proven to be the most effective technique.</p>
            </li>
            <li>
            <div> <img src={decops} alt="devops"/></div>
              <label>DEVOPS</label>
              <p>DevOps allows us to launch high-quality software that produces value quickly by facilitating close collaboration between development and operations.</p>
            </li>
           </ul>
           <ul>
           <li>
              <div><img src={research} alt="research"/></div>
              <label>RESEARCH</label>
              <p>We conduct research in order to convert ideas into company value. From planning through product launch, research is a must for all of our project development stages.</p>
            </li>
            <li>
            <div><img src={innovation} alt="innovation"/></div>
              <label>INNOVATION</label>
              <p>We choose technologies with great development potential and hire people who have the necessary abilities and enthusiasm for working with them.</p>
            </li>
           </ul>
          </Tab>
        </Tabs>
      </Container>
    </div>
  )
}

export default Values
