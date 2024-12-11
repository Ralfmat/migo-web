import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">A migo</div>
      <nav className="navigation">
        <ul>
          <li><a href="#business-plan">Biznes Plan</a></li>
          <li><a href="#description">Opis projektu</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#footer">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;