import React from 'react';
import { useSelector } from 'react-redux';
// import actions from '../Actions/index';

import Pokemon from '../Components/Pokemon';
import './Home.css';

function Home() {
  // const dispatch = useDispatch();
  const list = useSelector((state) => state.pokemons.list);
  return (
    <div className="poke-section">
      <div className="poke-grid">
        {list.map((p) => <Pokemon key={p.name} data={p} />)}
      </div>
    </div>
  );
}

export default Home;
