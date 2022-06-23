import React from 'react'
import { Container,Tab,Tabs } from 'react-bootstrap-v5'
import arkit from '../../assets/icons/technology/arkit.webp';
import arcore from '../../assets/icons/technology/arcore.webp';
import unity from '../../assets/icons/technology/unity.webp';
import amazone from '../../assets/icons/technology/amazone.webp';
import vuforia from '../../assets/icons/technology/vuforia.webp';
import apple from '../../assets/icons/technology/apple.png';
import samsung from '../../assets/icons/technology/samsung.png';
import micro from '../../assets/icons/technology/micro.png';
import zenfone from '../../assets/icons/technology/zenfone.png';
import  magic from '../../assets/icons/technology/magic.png';
import  glass from '../../assets/icons/technology/glass.png';
import kiosks from '../../assets/icons/technology/kiosks.png';


const Technology = () => {
  return (
    <div>
        <Container>
          <h3>TECHNOLOGIES WE WORK WITH</h3>
        <Tabs>
        <Tab eventKey="development" title="Development Tools">
            <ul>
              <li>
                <div><img src={arkit} alt="arkit"/></div>
                <label>ARKit</label>
              </li>
              <li>
                <div><img src={arcore} alt="arcore"/></div>
                <label>ARCore</label>
              </li>
              <li>
                <div><img src={unity} alt="unity"/></div>
                <label>Unity</label>
              </li>
              <li>
                <div><img src={amazone} alt="amazone"/></div>
                <label>Amazone Sumerian</label>
              </li>
              <li>
                <div><img src={vuforia} alt="vuforia"/></div>
                <label>Vuforia</label>
              </li>
            </ul>
        </Tab>
        <Tab eventKey="hardware" title="Hardware">
            <ul>
              <li>
                <div><img src={apple} alt="apple"/></div>
                <label>Apple</label>
              </li>
              <li>
                <div><img src={samsung} alt="samsung"/></div>
                <label>Samsung Galaxy</label>
              </li>
              <li>
                <div><img src={micro} alt="micro"/></div>
                <label>Microsoft Hololens</label>
              </li>
              <li>
                <div><img src={zenfone} alt="zenfone"/></div>
                <label>Zenfone AR</label>
              </li>
              <li>
                <div><img src={magic} alt="magic"/></div>
                <label>Magic Loop</label>
              </li>
              </ul>
              <ul>
              <li>
                <div><img src={glass} alt="glass"/></div>
                <label>Glass</label>
              </li>
              <li>
                <div><img src={kiosks} alt="kiosks"/></div>
                <label>AR Kiosks</label>
              </li>
            </ul>
        </Tab>
        <Tab></Tab>
         </Tabs>
        </Container>
    </div>
  )
}

export default Technology
