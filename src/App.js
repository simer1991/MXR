import './App.css';
import {Header,Features, Solution, Process, Industries, Banner, Stacks,Cta2, Clients} from './components';
import {Home , About} from './Pages';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Promise from './components/promise/Promise';
import Footer from './components/footer/Footer';
import Innerbanner from './components/innerbanner/Innerbanner';
import Readytotalk from './components/readytotalk/Readytotalk';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
    <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </Router>
    <Features />
    <Solution />
    <Process title="WE SIMPLIFY SOFTWARE DEVELOPMENT PROCESS" />
    <Industries />
    <Banner />
    <Stacks />
    <Promise />
    <Cta2 />
    <Clients />
    <Footer />
    <Innerbanner />
    <Readytotalk />
    <Contact />
   </>
  );
}

export default App;
