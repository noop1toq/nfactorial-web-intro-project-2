import React, { useRef } from 'react';
import './App.css';

const App = () => {
  const aboutRef = useRef(null);
  const howItWorksRef = useRef(null);
  const getStartedRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container">
      <header className="header">
        <button className="nav-button" onClick={() => scrollToRef(aboutRef)}>
          About us
        </button>
        <button className="nav-button" onClick={() => scrollToRef(howItWorksRef)}>
          How it works
        </button>
        <button className="nav-button" onClick={() => scrollToRef(getStartedRef)}>
          Get Started
        </button>
      </header>
      <div className="content" ref={aboutRef}>
        <h2>About us</h2>
        <p>Get hired for your skills, not experience</p>
      </div>
      <div className="content" ref={howItWorksRef}>
        <h2>How it works</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet sem sed magna tincidunt, nec facilisis lorem maximus.</p>
      </div>
      <div className="content" ref={getStartedRef}>
        <h2>Get Started</h2>
        <div>
          <input type="text" placeholder="Search for jobs" className="search-input" />
          <button className="search-button">Get Going</button>
        </div>
        <div>
          <input type="file" placeholder="Upload" className="cv-upload" />
        </div>
      </div>
    </div>
  );
};

export default App;