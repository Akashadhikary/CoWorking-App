// src/Header.tsx

import React from 'react';
import './NavBar.css';
import PhoneIcon from '@mui/icons-material/Phone';

const NavBar: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <button className="header__button"><PhoneIcon style={{color: "#F2B304"}}/></button>
    </header>
  );
};

export default NavBar;
