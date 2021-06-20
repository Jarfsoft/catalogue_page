import React from 'react';

import Pokemon from './Pokemon';
import './App.css';

function App() {
  return (
    <div className="poke-section">
      <div className="poke-grid">
        <Pokemon />
        <Pokemon />
        <Pokemon />
      </div>
    </div>
  );
}

export default App;
