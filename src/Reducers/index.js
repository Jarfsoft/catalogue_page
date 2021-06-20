import { combineReducers } from 'redux';
import pokemons from './pokemons';
import filter from './filter';

const rootReducer = combineReducers({
  pokemons,
  filter,
});

export default rootReducer;
