import React from 'react';

import Pokemon from './Pokemon';
import './App.css';

function App() {
  const list = [
    'pikachu',
    'electabuzz',
    'bulbasaur',
    'weepinbell',
    'charizard',
    'vulpix',
    'squirtle',
    'psyduck',
    'butterfree',
    'beedrill',
    'pidgeotto',
    'rattata',
    'jynx',
    'lapras',
    'aerodactyl',
    'onix',
    'cubone',
    'sandslash',
    'hitmonlee',
    'primeape',
    'haunter',
    'gengar',
  ];
  return (
    <div className="poke-section">
      <div className="poke-grid">
        {list.map((p) => <Pokemon key={p} name={p} />)}
      </div>
    </div>
  );
}

export default App;
