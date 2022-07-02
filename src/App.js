import './App.css';
import { Header, Footer } from './components';
import { Home, About } from './Pages';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './Pages/contact/Contact';
import Project from './Pages/project/Project';
import VR from './Pages/vr360/VR';
import AR from './Pages/AR/AR';
import VRL from './Pages/vr/VRL';
import MR from './Pages/mr/MR';
import MAD from './Pages/mad/MAD';
import WDD from './Pages/wdd/WDD';
import RI from './Pages/ri/RI';
import Php from './Pages/Technology/Php';
import Laravel from './Pages/Technology/Laravel';
import CodeIngenator from './Pages/Technology/CodeIngenator';
import Python from './Pages/Technology/Python';
import Node from './Pages/Technology/Node';
import Angular from './Pages/Technology/Angular';
import Reactjs from './Pages/Technology/Reactjs';
import Vue from './Pages/Technology/Vue';
import Mean from './Pages/Technology/Mean';
import Mern from './Pages/Technology/Mern';
import Magento from './Pages/Technology/Magento';
import WooCommerce from './Pages/Technology/WooCommerce';
import Shopify from './Pages/Technology/Shopify';
import IOS from './Pages/Technology/IOS';
import Android from './Pages/Technology/Android';
import ReactNative from './Pages/Technology/ReactNative';
import Hybrid from './Pages/Technology/Hybrid';
import Flutter from './Pages/Technology/Flutter';
import Ionic from './Pages/Technology/Ionic';
import Swift from './Pages/Technology/Swift';
import Worldpress from './Pages/Technology/Worldpress';
import Drupal from './Pages/Technology/Drupal';
import CustomUnrealEngine from './Pages/Technology/CustomUnrealEngine';
import UnityAppDevelopment from './Pages/Technology/UnityAppDevelopment';

import {
  Blog,
  Posts,
  Post,
} from "./components";

function App() {
  return (
    <>
      <Router basename={'/v2'}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />}>
            <Route index element={<Posts />} />
            <Route path=":postSlug" element={<Post />} />
          </Route>
          <Route path="/project" element={<Project />} />
          <Route path="/vr-360" element={<VR />} />
          <Route path="/augmented-reality" element={<AR />} />
          <Route path="/virtual-reality" element={<VRL />} />
          <Route path="/mixed-reality" element={<MR />} />
          <Route path="/mobile-app-development" element={<MAD />} />
          <Route path="/web-design-and-development" element={<WDD />} />
          <Route path="/research-and-innovation" element={<RI />} />
          <Route path="/php" element={<Php />} />
          <Route path="/laravel" element={<Laravel />} />
          <Route path="/code" element={<CodeIngenator />} />
          <Route path="/python" element={<Python />} />
          <Route path="/node" element={<Node />} />
          <Route path="/angular" element={<Angular />} />
          <Route path="/reactjs" element={<Reactjs />} />
          <Route path="/vue" element={<Vue />} />
          <Route path="/mean" element={<Mean />} />
          <Route path="/mern" element={<Mern />} />
          <Route path="/magento" element={<Magento />} />
          <Route path="/commerce" element={<WooCommerce />} />
          <Route path="/shopify" element={<Shopify />} />
          <Route path="/ios" element={<IOS />} />
          <Route path="/android" element={<Android />} />
          <Route path="/reactnative" element={<ReactNative />} />
          <Route path="/hybrid" element={<Hybrid />} />
          <Route path="/flutter" element={<Flutter />} />
          <Route path="/ionic" element={<Ionic />} />
          <Route path="/swift" element={<Swift />} />
          <Route path="/worldpress" element={<Worldpress />} />
          <Route path="/drupal" element={<Drupal />} />
          <Route path="/custom" element={<CustomUnrealEngine />} />
          <Route path="/unity" element={<UnityAppDevelopment />} />
        </Routes>
        <Footer />
      </Router>

    </>

  );
}

export default App;
