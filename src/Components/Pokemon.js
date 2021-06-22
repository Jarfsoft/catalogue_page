import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './Pokemon.css';
import { getPokemon } from '../pokeApi';

function Pokemon({ id }) {
  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const [data, setData] = useState();

  useEffect(() => {
    getPokemon(id, setData);
  }, []);

  return (
    <div className="poke-card">
      <h1>{data ? capitalize(data.name) : ''}</h1>
      <img src={data ? data.sprites.front_default : ''} alt="Pokemon sprite" />
    </div>
  );
}

Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Pokemon;
