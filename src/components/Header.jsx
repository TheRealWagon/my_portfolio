import React from 'react';
import logo from '../assets/ODY tech logo only bg_removed.png';

function Header() {
  return (
    <header>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img height="50" src={logo} alt="ODY_tech logo" />
      </div>
      <nav>
        <a href="#skills">Skills</a>
        <div className="Header__Nav__Circle"></div>
        <a href="#about">About</a>
        <div className="Header__Nav__Circle"></div>
        <a href="#contact">Contact</a>
      </nav>
      <button>Hire me</button>
    </header>
  );
}

export default Header;