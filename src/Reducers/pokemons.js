import getPokemon from '../pokeApi';

const stateDefault = {
  list: [],
  iteration: 0,
};

const pushPokemon = (data) => {
  stateDefault.list.push(data);
};

for (let i = 1; i <= 12; i += 1) {
  getPokemon(i, pushPokemon);
}

const pokemons = (state = stateDefault, action) => {
  const newState = { list: [], iteration: 0 };
  let newIteration = state.iteration;
  switch (action.type) {
    case 'NEXT':
      newIteration += 1;
      for (let i = 1 + newIteration * 12; i <= 12 + newIteration * 12; i += 1) {
        newState.list.push(getPokemon(i));
        newState.iteration = newIteration;
      }
      return newState;
    case 'PREVIOUS':
      newIteration -= 1;
      for (let i = 1 + newIteration * 12; i <= 12 + newIteration * 12; i += 1) {
        newState.list.push(getPokemon(i));
        newState.iteration = newIteration;
      }
      return newState;
    default:
      return state;
  }
};

export default pokemons;
