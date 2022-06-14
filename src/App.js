import './App.css';
import {Header} from './components';
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
    </>
  );
}

export default App;
