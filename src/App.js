import './App.css';
import {Header,Features, Solution, Process} from './components';
import {Home , About} from './Pages';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
    <Process />
    </>
  );
}

export default App;
