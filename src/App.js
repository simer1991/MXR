import './App.css';
import { Header,Footer, Blog,Post,Posts } from './components';
import { Home, About,Contact,VR,VRL,MAD,MR,WDD,RI,Php,Laravel,CodeIngenator,Python,Node,Android,Angular,Reactjs,Vue,Mean,Mern,Magento,WooCommerce,Shopify,IOS,ReactNative,Hybrid,Flutter,Ionic,Swift,Worldpress,Drupal,CustomUnrealEngine,UnityAppDevelopment,Project1,Project2,Projects,AR,Technology } from './Pages';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router basename={'/v2'}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} >
             <Route index element={<Posts />}/>
             <Route path=":postSlug" element={<Post />} />
          </Route>
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
          <Route path="/unreal-engine" element={<CustomUnrealEngine />} />
          <Route path="/unity" element={<UnityAppDevelopment />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
        <Footer />
      </Router>

    </>

  );
}

export default App;
