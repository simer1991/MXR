import React from 'react'
import { Container, Tab ,Tabs} from 'react-bootstrap-v5'
import headset from '../../assets/icons/technologywork/headset.png'
import phone from '../../assets/icons/technologywork/phones.png'
import tablet from '../../assets/icons/technologywork/Tablets.png'
import web from '../../assets/icons/technologywork/web.png'
import open from '../../assets/icons/technologywork/open.png'
import stem from '../../assets/icons/technologywork/stem.png'
import oculus from '../../assets/icons/technologywork/oculus.png'
import webvr from '../../assets/icons/technologywork/webvr.png'
import Unity from '../../assets/icons/technologywork/Unity.png'


const TechnologyWork = () => {
  return (
    <div>
      <Container>
        <h3>TECHNOLOGIES WE WORK WITH</h3>
        <Tabs>
            <Tab eventKey='platform' title="Platforms">
            <ul>
            <li>
            <div><img src={headset} alt="vr headset"/></div>
            <label>VR headsets</label>
            </li>
            <li>
              <div><img src={phone} alt="phones"/></div>
              <label>Phones</label>
            </li>
            <li>
              <div><img src= {tablet} alt="tablet"/></div>
              <label>Tablets</label>
            </li>
            <li>
              <div><img src={web}/></div>
              <label>Web</label>
            </li>
            </ul>
            </Tab>
            <Tab eventKey='software' title="Software">
              <ul>
                <li>
                  <div><img src={open} alt="open"/></div>
                  <label>OPEN VR</label>
                </li>
                <li>
                  <div><img src={stem} alt="stem"/></div>
                  <label>STEAM VR</label>
                </li>
                <li>
                  <div><img src={oculus} alt="oculus"/></div>
                  <label>Oculus</label>
                </li>
                <li>
                  <div><img src={webvr} alt="webvr"/></div>
                  <label>Web VR</label>
                </li>
                <li>
                  <div><img src={Unity} alt="unity"/></div>
                  <label>Unity</label>
                </li>
                <li>
                  <div><img /></div>
                  <label></label>
                </li>
              </ul>
            </Tab>
        </Tabs>
      </Container>
    </div>
  )
}

export default TechnologyWork


