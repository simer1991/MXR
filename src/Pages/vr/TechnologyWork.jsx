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
import htc from '../../assets/icons/technologywork/htc.png'
import oculusrift from '../../assets/icons/technologywork/oculusrift.png'
import oculusgo from '../../assets/icons/technologywork/oculusgo.png'
import oculusquest from '../../assets/icons/technologywork/oculusquest.png'
import hololens from '../../assets/icons/technologywork/hololens.png'
import oculus2 from '../../assets/icons/technologywork/oculus2.png'

const TechnologyWork = () => {
  return (
    <div className='mxr__technology mxr__section'>
      <Container>
        <h3 className='mxr__section-title'>TECHNOLOGIES WE WORK WITH</h3>
        <Tabs className="mb-3 mxr__tabs">
            <Tab eventKey='platform' title="Platforms">
            <ul className='mxr__stack-list'>
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
              <div><img src={web} alt="web"/></div>
              <label>Web</label>
            </li>
            </ul>
            </Tab>
            <Tab eventKey='software' title="Software">
              <ul className='mxr__stack-list'>
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
              </ul>
            </Tab>
            <Tab eventKey='Hardware' title="Hardware">
              <ul className='mxr__stack-list'>
              <li>
                <div><img src={htc} alt="htc"/></div>
                <label>HTC Vive</label>
              </li>
              <li>
                <div><img src={oculusrift} alt="oculusrift"/></div>
                <label>Oculus Rift</label>
              </li>
              <li>
                <div><img src={oculusgo} alt="oculusgo"/></div>
                <label>Oculus Go</label>
              </li>
              <li>
                <div><img src={oculusquest} alt="oculusquest"/></div>
                <label>Oculus Quest</label>
              </li>
              <li>
                <div><img src={hololens} alt="hololens"/></div>
                <label>HoloLens</label>
              </li>
              <li>
                <div><img src={oculus2} alt="oculus2"/></div>
                <label>Oculus Quest 2</label>
              </li>
              </ul>
            </Tab>
        </Tabs>
      </Container>
    </div>
  )
}

export default TechnologyWork


