import React from 'react'
import { Container,Tab,Tabs } from 'react-bootstrap-v5'
import android from '../../assets/icons/stacks/android.png'
import react from '../../assets/icons/stacks/react.png'
import ionic from '../../assets/icons/stacks/ionic.png'
import swift from '../../assets/icons/stacks/swift.png'
import titanium from '../../assets/icons/stacks/titanium.png'
import xamarin from '../../assets/icons/stacks/xamarin.png'
import flutter from '../../assets/icons/stacks/flutter.png'
import kotlin from '../../assets/icons/stacks/kotlin.png'
import objective from '../../assets/icons/stacks/objective.png'
import ios from '../../assets/icons/stacks/ios.png'

const Technology2 = () => {
  return (
    <div className='mxr__technology2 mxr__section'>
        <Container>
            <h3 className='mxr__section-title'>TECHNOLOGY STACK</h3>
       <Tabs
    defaultActiveKey="mobile"
    id="tech-stack"
    className="mb-3 mxr__tabs"
  >
    <Tab eventKey="mobile" title="Mobile">
      <ul className='mxr__stack-list'>
      <li>
          <div><img src={ios} alt="iOS"/></div>
          <label>iOS</label>
        </li>
      <li>
          <div><img src={android} alt="android"/></div>
          <label>Android</label>
        </li>
        <li>
          <div><img src={react} alt="react"/></div>
          <label>React Native</label>
        </li>
        <li>
          <div><img src={flutter} alt="flutter"/></div>
          <label>Flutter</label>
        </li>
        <li>
          <div><img src={kotlin} alt="kotlin"/></div>
          <label>Kotlin</label>
        </li>
        <li>
        <div><img src={ionic} alt="ionic"/></div>
        <label>Ionic</label>
        </li>
      </ul>
      <ul className='mxr__stack-list'>
        <li>
        <div><img src={swift} alt="swift"/></div>
        <label>Swift</label>
        </li>
        <li>
        <div><img src={objective} alt="objective"/></div>
        <label>ObjectiveC</label>
        </li>
        <li>
        <div><img src={titanium} alt="titanium"/></div>
          <label>Titanium</label>
        </li>
        <li>
          <div><img src={xamarin} alt="xamarin"/></div>
          <label>Xamarin</label>
        </li>
      </ul>
    </Tab>
    </Tabs>
    </Container>
    </div>
  )
}

export default Technology2
