import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-group navbar-left">
        <Link to="/live">Live</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="navbar-center">
        <Link to="/" className="navbar-logo">Tanishk Abinav</Link>
      </div>

      <div className="navbar-group navbar-right">
        <a href="https://github.com/tanishk16148" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/l-b-tanishk-abinav-79a802279/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com/mrtanos_16" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <BsSun /> : <BsMoonStars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
