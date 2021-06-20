import React from 'react';
// import PropTypes from 'prop-types'

import returnInfo from './PokeAPI';

import './Pokemon.css';

function Pokemon() {
  const pokeInfo = returnInfo('pikachu');
  console.log(pokeInfo);
  return (
    <div className="poke-card">
      <img src="" alt="Pokemon sprite" />
    </div>
  );
}

// Pokemon.propTypes = {

// }

export default Pokemon;
