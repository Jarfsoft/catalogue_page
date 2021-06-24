import pokemons from './pokemons';

const state = {
  list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  type: '',
};

const stateAdvanced = {
  list: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  type: '',
};

const actionNext = {
  type: 'NEXT',
  payload: 12,
};

const actionPrevious = {
  type: 'NEXT',
  payload: -12,
};

describe('Pokemons reducers', () => {
  it('Should return default state', () => {
    const newState = pokemons(undefined, {});
    expect(newState).toEqual(state);
  });

  it('Should return state with each array element plus one', () => {
    const newState = pokemons(state, actionNext);
    expect(newState).toEqual(stateAdvanced);
  });

  it('Should return state with each array element minus one', () => {
    const newState = pokemons(stateAdvanced, actionPrevious);
    expect(newState).toEqual(state);
  });

  it('Should return the actual state with no changes', () => {
    const newState = pokemons(state, actionPrevious);
    expect(newState).toEqual(state);
  });
});
