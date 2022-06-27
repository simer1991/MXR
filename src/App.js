import './App.css';
import {Header, Footer} from './components';
import {Home , About} from './Pages';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './Pages/contact/Contact';
import Project from './Pages/project/Project';
import Blog from './Pages/blog/Blog';
import VR from './Pages/vr360/VR';
import AR from './Pages/AR/AR';
import VRL from './Pages/vr/VRL';
import MR from './Pages/mr/MR';
import MAD from './Pages/mad/MAD';
import WDD from './Pages/wdd/WDD';
import RI from './Pages/ri/RI';

function App() {
  return (
    <>
    <Router basename={'/v2'}>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/project" element={<Project />} />
            <Route path="/vr" element={<VR />} />
            <Route path="/AR" element={<AR />} />
            <Route path="/VRL" element={<VRL />} />
            <Route path="/mr" element={<MR />} />
            <Route path="/mad" element={<MAD />} />
            <Route path="/wdd" element={<WDD />} />
            <Route path="/ri" element={<RI />} />
           
          </Routes>
      </Router>
      <Footer />
    </>
    
  );
}

export default App;
