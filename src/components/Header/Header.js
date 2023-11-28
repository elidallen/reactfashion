// components/Header.js
import React from 'react';
import Navigation from '../Navigation/Navigation.js';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>Your Site Title</h1>
      <h2>Subtitle</h2>
      <Navigation />
    </header>
  );
}

export default Header;