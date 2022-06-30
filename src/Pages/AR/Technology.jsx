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
import maya from '../../assets/icons/technology/maya.webp';
import photoshop from '../../assets/icons/technology/photoshop.webp';
import substance from '../../assets/icons/technology/substance.webp';
import opencv from '../../assets/icons/technology/opencv.webp';
import tensor from '../../assets/icons/technology/tensor.webp';
import keras from '../../assets/icons/technology/keras.webp';
import mahout from '../../assets/icons/technology/mahout.webp';
import caffe from '../../assets/icons/technology/caffe.webp';
import torch from '../../assets/icons/technology/torch.webp';
import google from '../../assets/icons/technology/google.png';
import bot from '../../assets/icons/technology/bot.png';
import azure from '../../assets/icons/technology/azure.webp';
import azurecongnitive from '../../assets/icons/technology/azurecongnitive.png';
import amazones from '../../assets/icons/technology/amazone.webp';
import amazonepoly from '../../assets/icons/technology/amazonepoly.webp';
import amazonelex from '../../assets/icons/technology/amazonelex.webp';
import amazonetranscribe from '../../assets/icons/technology/amazonetranscribe.webp';

const Technology = () => {
  return (
    <div className='mxr__teachnology mxr__section'>
        <Container>
          <h3 className='mxr__section-title'>TECHNOLOGIES WE WORK WITH</h3>
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
        <Tab eventKey="3D Modeling" title="3D Modeling">
            <ul>
              <li>
                <div><img src={maya} alt="maya"/></div>
                <label>Maya</label>
              </li>
              <li>
                <div><img src={photoshop} alt="photoshop"/></div>
                <label>Photoshop</label>
              </li>
              <li>
                <div><img src={substance} alt="substance"/></div>
                <label>Substance Painter</label>
              </li>
            </ul>
        </Tab>
        <Tab eventKey='Analysis' title="Analysis">
            <ul>
              <li>
                <div><img src={opencv} alt="opencv"/></div>
                <label>OpenCV</label>
              </li>
              <li>
                <div><img src={tensor} alt="tensor"/></div>
                <label>TensorFlow</label>
              </li>
              <li>
                <div><img src={keras} alt="keras"/></div>
                <label>Keras</label>
              </li>
              <li>
                <div><img src={mahout} alt="mahout"/></div>
                <label>Mahout</label>
              </li>
              <li>
                <div><img src={caffe} alt="caffe"/></div>
                <label>Caffe</label>
              </li>
              <li>
                <div><img src={torch} alt="torch"/></div>
                <label>Caffe</label>
              </li>
            </ul>
        </Tab>
        <Tab eventKey='Learning Platforms' title="Learning Platforms">
          <ul>
            <li>
              <div><img src={google} alt="google"/></div>
              <label>Google CloudAI Platform</label>
            </li>
            <li>
              <div><img src={bot} alt="bot"/></div>
              <label>Bot Framework</label>
            </li>
            <li>
              <div><img src={azure} alt="azure"/></div>
              <label>Azure Machine Learning</label>
            </li>
            <li>
              <div><img src={azurecongnitive} alt="azurecongnitive"/></div>
              <label>Azure Cognitive Services</label>
            </li>
            <li>
              <div><img src={amazones} alt="amazones"/></div>
              <label>Amazon SageMaker</label>
            </li>
          </ul>
          <ul>
            <li>
              <div><img src= {amazonepoly} alt="amazonepoly"/></div>
              <label>Amazon Polly</label>
            </li>
            <li>
              <div><img src={amazonelex} alt="amazonelex"/></div>
              <label>Amazon Lex</label>
            </li>
            <li>
              <div><img src={amazonetranscribe} alt="amazonetranscribe" /></div>
              <label>Amazon Transcribe</label>
            </li>
          </ul>
        </Tab>
         </Tabs>
        </Container>
    </div>
  )
}

export default Technology
