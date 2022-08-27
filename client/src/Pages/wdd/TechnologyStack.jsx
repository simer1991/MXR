import React from 'react'
import {Container, Tab,Tabs} from 'react-bootstrap-v5';
import angular from '../../assets/icons/stacks/angular.png'
import reactjs from '../../assets/icons/stacks/reactjs.png'
import vue from '../../assets/icons/stacks/vue.png'
import java from '../../assets/icons/stacks/java.png'
import php from '../../assets/icons/stacks/php.png'
import mongodb from '../../assets/icons/stacks/mongodb.png'
import mysql from '../../assets/icons/stacks/mysql.png'
import mssql from '../../assets/icons/stacks/mssql.png'
import realm from '../../assets/icons/stacks/realm.png'
import dynmo from '../../assets/icons/stacks/dynamo.png'
import oracle from '../../assets/icons/stacks/oracle.png'
import postgre from '../../assets/icons/stacks/postgre.png'
import redis from '../../assets/icons/stacks/redis.png'
import drupal from '../../assets/icons/stacks/drupal.webp'
import joomla from '../../assets/icons/stacks/joomla.webp'
import wordpress from '../../assets/icons/stacks/wordpress.webp'
import magento from '../../assets/icons/stacks/magento.webp'
import shopify from '../../assets/icons/stacks/shopify.webp'
import nodejs from '../../assets/icons/stacks/nodejs.png'
import firebase from '../../assets/icons/stacks/firebase.png'
import python from '../../assets/icons/stacks/python.png'
import typescript from '../../assets/icons/stacks/typescript.png'
import html5 from '../../assets/icons/stacks/HTML.png'
import moodle from '../../assets/icons/stacks/moodle.png'

const TechnologyStacks = () => {
 return (
<div className='mxr__stack mxr__section'>
<div className='mxr__stack'>
<Container>
<h3 className='mxr__section-title'>TECHNOLOGIES WE WORK WITH</h3>
<Tabs
efaultActiveKey="frontend"
id="tech-stack"
className="mb-3 mxr__tabs"
>
<Tab eventKey="frontend" title="Frontend">
<ul className='mxr__stack-list'>
  <li>
  <div><img src={angular} alt="angular"/></div>
    <label>Angular.JS</label>
  </li>
  <li>
  <div><img src={reactjs} alt="reactjs"/></div>
    <label>React Js</label>
  </li>
  <li>
  <div><img src={typescript} alt="typescript"/></div>
    <label>TypeScript</label>
  </li>
  <li>
  <div><img src={vue} alt="vue"/></div>
    <label>Vue</label>
  </li>
  <li>
  <div><img src={html5} alt="html5"/></div>
    <label>HTML5</label>
  </li>
</ul>
</Tab>
<Tab eventKey="backend" title="Backend">
<ul className='mxr__stack-list'>
<li>
<div><img src={nodejs} alt="nodejs"/></div>
    <label>Node.JS</label>
  </li>
  <li>
  <div><img src={java} alt="java"/></div>
    <label>Java</label>
  </li>
  <li>
  <div><img src={php} alt="php"/></div>
     <label>Php</label>
  </li>
  <li>
  <div><img src={python} alt="python"/></div>
     <label>Python</label>
  </li>
</ul>
</Tab>
<Tab eventKey="database" title="Database">
<ul className='mxr__stack-list'>
  <li>
    <div><img src={mongodb} alt="mongodb"/></div>
    <label>Mongo DB</label>
  </li>
  <li>
    <div><img src={mysql} alt="mysql"/></div>
    <label>MySQL</label>
  </li>
  <li>
    <div><img src={mssql} alt="mssql"/></div>
    <label>MsSQL</label>
  </li>
  <li>
    <div><img src={firebase} alt="firebase"/></div>
    <label>Firebase</label>
  </li>
  <li>
    <div><img src={realm} alt="realm"/></div>
    <label>Realm</label>
  </li>
  </ul>
  <ul className='mxr__stack-list'>
  <li>
    <div><img src={dynmo} alt="dynmo"/></div>
    <label>DynamoDB</label>
  </li>
  <li>
    <div><img src={oracle} alt="oracle"/></div>
    <label>Oracle</label>
  </li>
  <li>
    <div><img src={postgre} alt="postgre"/></div>
    <label>PostgreSQL</label>
  </li>
  <li>
    <div><img src={redis} alt="redis"/></div>
    <label>Redis</label>
  </li>
</ul>
</Tab>
<Tab eventKey="cms" title="CMS">
<ul className='mxr__stack-list'>
  <li>
    <div><img src={drupal} alt="drupal"/></div>
    <label>Drupal</label>
  </li>
  <li>
    <div><img src={joomla} alt="joomla"/></div>
    <label>Joomla</label>
  </li>
  <li>
    <div><img src={wordpress} alt="wordpress"/></div>
    <label>WordPress</label>
  </li>
  <li>
    <div><img src={magento} alt="magento"/></div>
    <label>Magento</label>
  </li>
  <li>
    <div><img src={shopify} alt="shopify"/></div>
    <label>Shopify</label>
  </li>
</ul>
</Tab>
<Tab eventKey='open source' title="Open Source">
<ul className='mxr__stack-list'>
    <li>
        <div><img src={moodle} alt="moodle" /></div>
        <label>Moodle</label>
    </li>
</ul>
</Tab>
</Tabs>
</Container>
</div>
</div>
)
}

export default TechnologyStacks
