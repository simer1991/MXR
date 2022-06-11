import './App.css';
import {Header,Features, Solution, Process, Industries, Banner, Stacks,Cta2} from './components';
import {Home , About} from './Pages';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Promise from './components/promise/Promise';

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
    </>
  );
}

export default App;
