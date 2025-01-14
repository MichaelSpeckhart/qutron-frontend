import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Page imports
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects';

import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

function App() {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />}/>
      </Routes>
    </Router>
  );
}

export default App;