import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';  // Change this line

// Page imports
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects';

function App() {
  return (
    <HashRouter>  {/* Change this line */}
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />}/>
      </Routes>
    </HashRouter>  {/* And this line */}
  );
}

export default App;