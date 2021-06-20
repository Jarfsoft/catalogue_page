import React from 'react';
import logo from './pokemon.png';

import './Navbar.css';

const Navbar = () => (
  <main className="navbar">
    <div className="title">
      <img src={logo} alt="Logo" />
    </div>
    <div className="links">
      <p>Type filter: </p>
      <select>
        <option>All</option>
        <option>Fire</option>
        <option>Water</option>
        <option>Grass</option>
        <option>Electric</option>
        <option>Ice</option>
        <option>Rock</option>
        <option>Ground</option>
        <option>Bug</option>
        <option>Fight</option>
        <option>Ghost</option>
        <option>Normal</option>
      </select>
    </div>
  </main>
);

export default Navbar;
