import React, { useState } from 'react';
import '../../styles/CustomNavbar.css'; // Import CSS file

const CustomNavbar = () => {
  // State to toggle the visibility of the navigation menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className='container-1'>
        <h1>Portfolio.com</h1>
      </div>

      {/* Navigation menu */}
      <div className={`container ${menuOpen ? 'show-menu' : ''}`}>
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Button to toggle the navigation menu */}
      <div className='container-3'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default CustomNavbar;
