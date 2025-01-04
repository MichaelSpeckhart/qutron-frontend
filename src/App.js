import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page imports
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
