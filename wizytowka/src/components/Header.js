import React from 'react';
import './Header.css';
import icon from '../images/icon.png';

const Header = () => {
  return (
    <header className="header">
      {/* <div className="logo">Migo</div> */}
      <img src={icon}></img>
      <nav className="navigation">
        <ul>
          <li><a href="#description">Opis projektu</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#business-plan">BiznesPlan</a></li>
          <li><a href="#footer">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;