import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../Actions/index';
import Pokemon from '../Components/Pokemon';
import './Home.css';

function Home() {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.pokemons.list);
  const continuous = () => {
    let cont = true;
    for (let i = 0; i < 11; i += 1) {
      if (list[i] !== (list[i + 1] - 1)) cont = false;
    }
    return cont;
  };
  const nextClickHandler = () => {
    if (continuous()) {
      dispatch(actions.next(12));
    }
  };
  const previousClickHandler = () => {
    if (continuous()) {
      dispatch(actions.next(-12));
    }
  };
  return (
    <div className="poke-section">
      <div className="grid-buttons">
        <button onClick={previousClickHandler} type="button">Previous</button>
        <button onClick={nextClickHandler} type="button">Next</button>
        <div className="poke-grid">
          {list.map((p) => <Pokemon key={p} id={p} />)}
        </div>
        <button onClick={previousClickHandler} type="button">Previous</button>
        <button onClick={nextClickHandler} type="button">Next</button>
      </div>
    </div>
  );
}

export default Home;
