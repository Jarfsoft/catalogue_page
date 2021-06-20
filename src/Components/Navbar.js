import React from 'react';
import PropTypes from 'prop-types';

import logo from './pokemon.png';
import './Navbar.css';

const Navbar = ({ onFilterChange }) => (
  <main className="navbar">
    <div className="title">
      <img src={logo} alt="Logo" />
    </div>
    <div className="links">
      <p>Type filter: </p>
      <select name="typeFilter" required id="typeFilter" onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="ice">Ice</option>
        <option value="rock">Rock</option>
        <option value="ground">Ground</option>
        <option value="bug">Bug</option>
        <option value="fight">Fight</option>
        <option value="ghost">Ghost</option>
        <option value="normal">Normal</option>
      </select>
    </div>
  </main>
);

Navbar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Navbar;
