import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Internal Page and CSS imports
import "../styles/global.css";
import Navbar from '../components/navbar/NavbarElements';
import Footer from '../components/footer/Footer';
import ParticleBackground from '../components/background/ParticleBackground'; 
import Textblock from '../components/textblock/Textblock';

let contentPath = '../content/Home.json';

function Home() {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();
  const particleContainerRef = useRef(null); // Ref to control the container for particle background

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Navbar />
      <main className="flex-grow relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="home flex flex-row items-start space-x-6 relative">
            {/* ParticleBackground container */}
            <div 
              ref={particleContainerRef} 
              style={{
                position: 'relative', 
                width: '60%',    
                height: '100vh', 
                overflow: 'hidden',
              }}
            >
              <ParticleBackground containerRef={particleContainerRef} />
              <h1 className="fade-in-1 text-6xl font-bold mb-6 text-gradient">
                Welcome to Qutron
              </h1>
            </div>

            {/* Textblock container */}
            {/* Textblock next to the particle background */}
            <div className="fade-in-1 flex justify-center items-center w-full">
              {/* Removed large text styles from wrapper */}
              <div className="w-1/2 max-w-lg">  
              <Textblock 
  content="If this doesn't turn red, something is deeply wrong!" 
  backgroundColor="bg-red-500"  
  textColor="text-white"
  fontSize="text-xl"
  borderRadius="rounded-lg"
  boxShadow="shadow-xl"
/>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer className="relative z-10" />
    </div>
  );
}

function ReadHomeContent() {
  fetch(contentPath)
    .then((res) => res.json())  // Use .json() to properly parse JSON
    .then((data) => {
      // Do something with the data
      console.log(data);
    })
    .catch((e) => console.error(e));  // Use console.error instead of console()
}

export default Home;
