import React, { useState } from 'react';
import './Header.css';
import icon from '../images/icon.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <a>MIGO</a>
        <img src={icon} alt="Logo" />
      </div>
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
          <div><a href='#description'>O nas</a></div>
          <div><a href='#team'>Zespół</a></div>
          <div><a href="#business-plan">Biznesplan</a></div>
          <div><a>Kontakt</a></div>
      </nav>
    </header>
  );
};

export default Header;