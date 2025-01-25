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
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="home flex flex-col items-center space-y-6">
            <h1 className="fade-in-1 text-6xl font-bold mb-6 text-gradient">Welcome to Qutron</h1>
            
            {/* Added search input with the unused variables */}
            <div className="w-full max-w-md">
              <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Search..."
              />
              <button
                onClick={() => navigate(`/search?q=${inputText}`)}
                className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Search
              </button>
            </div>
            
            <ParticleBackground />
          </div>
        </div>
      </main>
      <Footer className="relative z-10" />
    </div>
  );
}

export default Home;