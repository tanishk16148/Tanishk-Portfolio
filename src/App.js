import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Works from './components/Works';
import Live from './components/Live';

function App() {
  const [theme, setTheme] = useState('dark');
  const [animating, setAnimating] = useState(false);
  const [animationType, setAnimationType] = useState(null);

  useEffect(() => {
    // Optional: Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setAnimationType(theme === 'dark' ? 'shatter' : 'paint');
    setAnimating(true);

    setTimeout(() => {
      setTheme(nextTheme);
      localStorage.setItem('theme', nextTheme); // Optional: Save to localStorage
      setAnimating(false);
      setAnimationType(null);
    }, 1200); // Match with CSS animation duration
  };

  return (
    <div className={`App ${theme}`}>
      <Router>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        {animating && <div className={`theme-transition ${animationType}`} />}
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/work" element={<Works theme={theme} />} />
          <Route path="/live" element={<Live theme={theme} />} />
          <Route path="/projects" element={<Projects theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
