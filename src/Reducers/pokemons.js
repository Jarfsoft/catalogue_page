const stateDefault = {
  list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};

const pokemons = (state = stateDefault, action) => {
  const newState = { list: [] };
  switch (action.type) {
    case 'NEXT':
      if (action.payload < 0 && !(state.list[0] > 0 && state.list[0] < 13)) {
        newState.list = [...state.list.map((i) => i + action.payload)];
      } else if (action.payload > 0 && !(state.list[12] > 886 && state.list[12] < 899)) {
        newState.list = [...state.list.map((i) => i + action.payload)];
      } else newState.list = state.list;
      return newState;
    case 'CHANGE_FILTER':
      if (action.payload !== '') newState.list = [...action.payload];
      else newState.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      return newState;
    default:
      return state;
  }
};

export default pokemons;
