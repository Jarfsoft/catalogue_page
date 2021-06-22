import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../Actions/index';
import { getPokemons } from '../pokeApi';
import Pokemon from '../Components/Pokemon';
import './Home.css';

function Home() {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.pokemons.list);
  const sType = useSelector((state) => state.pokemons.type);
  const continuous = () => {
    let cont = true;
    for (let i = 0; i < 11; i += 1) {
      if (list[i] !== (list[i + 1] - 1)) cont = false;
    }
    return cont;
  };
  const setInfo = (list, type) => {
    const newState = { list, type };
    dispatch(actions.filter(newState));
  };
  const nextClickHandler = () => {
    if (continuous()) {
      dispatch(actions.next(12));
    } else {
      getPokemons(list[11] + 1, sType, setInfo);
    }
  };
  const previousClickHandler = () => {
    if (continuous()) {
      dispatch(actions.next(-12));
    } else {
      getPokemons(1, sType, setInfo);
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
