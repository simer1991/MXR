import './App.css';
import {Header, Footer} from './components';
import {Home , About} from './Pages';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './Pages/Contact';


function App() {
  return (
    <>
    <Router basename={'/v2'}>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </Router>
      <Contact />
      <Footer />
    </>
    
  );
}

export default App;
