import { React } from 'react';
import { useDispatch } from 'react-redux';

import actions from '../Actions';
import { getPokemons } from '../pokeApi';
import logo from './pokemon.png';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const setInfo = (list, type) => {
    const newState = { list, type };
    dispatch(actions.filter(newState));
  };

  const onFilterChange = (type) => {
    const newState = { list: [], type: '' };
    if (type !== '') getPokemons(1, type, setInfo);
    else dispatch(actions.filter(newState));
  };
  return (
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
          <option value="fighting">Fighting</option>
          <option value="ghost">Ghost</option>
          <option value="normal">Normal</option>
        </select>
      </div>
    </main>
  );
};

export default Navbar;
