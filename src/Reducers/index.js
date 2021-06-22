import { combineReducers } from 'redux';
import pokemons from './pokemons';

const rootReducer = combineReducers({
  pokemons,
});

export default rootReducer;
