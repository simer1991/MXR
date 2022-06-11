import React from 'react'
import './stacks.css'
import {Container, Tab,Tabs} from 'react-bootstrap-v5';
import react from '../../assets/icons/stacks/react.png'
import ionic from '../../assets/icons/stacks/ionic.png'
import swift from '../../assets/icons/stacks/swift.png'
import titanium from '../../assets/icons/stacks/titanium.png'
import xamarin from '../../assets/icons/stacks/xamarin.png'
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

const Stacks = () => {
  return (
    <Container>
    <h3>TECHNOLOGY STACK</h3>
    <Tabs
    defaultActiveKey="home"
    transition={false}
    id="noanim-tab-example"
    className="mb-3"
  >
    <Tab eventKey="home" title="Mobile">
      <ul>
        <li>
        <img src={react}/>
        <label>React Native</label>
        </li>
        <li>
        <img src={ionic}/>
        <label>Ionic</label>
        </li>
      </ul>
      <ul>
        <li>
        <img src={swift}/>
        <label>Swift</label>
        </li>
        <li>
          <img src={titanium}/>
          <label>Titanium</label>
        </li>
        <li>
          <img src={xamarin}/>
          <label>Xamarin</label>
        </li>
      </ul>
    </Tab>
    <Tab eventKey="profile" title="Frontend">
      <ul>
        <li>
          <img src={angular}/>
          <label>Angular.JS</label>
        </li>
        <li>
          <img src={reactjs}/>
          <label>React Js</label>
        </li>
        <li>
          <img src={vue}/>
          <label>Vue</label>
        </li>
      </ul>
    </Tab>
    <Tab eventKey="backend" title="Backend">
      <ul>
      <li>
          <img src={nodejs}/>
          <label>Node.JS</label>
        </li>
        <li>
          <img src={java}/>
          <label>Java</label>
        </li>
        <li>
           <img src={php} />
           <label>Php</label>
        </li>
      </ul>
    </Tab>
    <Tab eventKey="database" title="Database">
      <ul>
        <li>
          <img src={mongodb}/>
          <label>Mongo DB</label>
        </li>
        <li>
          <img src={mysql}/>
          <label>MySQL</label>
        </li>
        <li>
          <img src={mssql}/>
          <label>MsSQL</label>
        </li>
        <li>
          <img src={realm}/>
          <label>Realm</label>
        </li>
        <li>
          <img src={dynmo}/>
          <label>DynamoDB</label>
        </li>
        <li>
          <img src={oracle}/>
          <label>Oracle</label>
        </li>
        <li>
          <img src={postgre}/>
          <label>PostgreSQL</label>
        </li>
        <li>
          <img src={redis}/>
          <label>Redis</label>
        </li>
      </ul>
    </Tab>
    <Tab eventKey="cms" title="CMS">
      <ul>
        <li>
          <img src={drupal}/>
          <label>Drupal</label>
        </li>
        <li>
          <img src={joomla}/>
          <label>Joomla</label>
        </li>
        <li>
          <img src={wordpress}/>
          <label>WordPress</label>
        </li>
        <li>
          <img src={magento}/>
          <label>Magento</label>
        </li>
        <li>
          <img src={shopify}/>
          <label>Shopify</label>
        </li>
      </ul>
    </Tab>
  </Tabs>
  </Container>
  )
}

export default Stacks
