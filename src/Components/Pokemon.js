/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './Pokemon.css';

function Pokemon({ data }) {
  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="poke-card">
      <h1>{data ? capitalize(data.name) : ''}</h1>
      <img src={data ? data.sprites.front_default : ''} alt="Pokemon sprite" />
    </div>
  );
}

Pokemon.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Pokemon;
/* eslint-enable react/forbid-prop-types */
