import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import getPokemon from './PokeAPI';

import './Pokemon.css';

function Pokemon(props) {
  const [newInfo, setInfo] = useState();

  useEffect(() => {
    getPokemon(props.name, setInfo);
  }, []);

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="poke-card">
      <h1>{newInfo ? capitalize(newInfo.name) : ''}</h1>
      <img src={newInfo ? newInfo.sprites.front_default : ''} alt="Pokemon sprite" />
    </div>
  );
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Pokemon;
