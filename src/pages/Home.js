// STL imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Internal Page and CSS imports
import "../styles/global.css"
import Navbar from '../components/navbar/NavbarElements';
import Footer from '../components/footer/Footer'
import ParticleBackground from '../components/background/ParticleBackground';  // Add this import

function Home() {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen relative"> {/* Added relative */}
      <Navbar />
      <main className="flex-grow relative z-10"> {/* Added relative and z-10 */}
        <div className="container mx-auto px-4 py-8">
        
          <div className="home flex flex-col items-center space-y-6">
            
            <h1 className="fade-in-1 text-6xl font-bold mb-6 text-gradient">Welcome to Qutron</h1>
            <ParticleBackground /> {/* Add the particle background */}
          </div>
        </div>
      </main>
      <Footer className="relative z-10" /> {/* Added relative and z-10 */}
    </div>
  );
}

export default Home;