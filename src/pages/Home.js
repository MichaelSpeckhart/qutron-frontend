// STL imports
import React, { useState } from 'react';
// Only need Link and useNavigate here
import { Link, useNavigate } from 'react-router-dom';

// Internal Page and CSS imports
import "../styles/global.css"
import Navbar from '../components/navbar/NavbarElements';

/**
 * @summary Home page for the website
 * @returns JSX.Element
 */
function Home() {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const onPressSubmit = (event) => {
    console.log("Hello");
  }

  return (
    <div>
      <Navbar /> 
      <div className="home">
        <h1>Welcome to Qutron</h1>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your text here"
          className="textbox"
        />
        <button 
          onClick={() => console.log(inputText)}
          title="Submit"
          color="#841584"
          accessibilityLabel="LearnMore"
          className="button"
        > 
          Button 
        </button>
      </div>
    </div>
  );
}

export default Home;