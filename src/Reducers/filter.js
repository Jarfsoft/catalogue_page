const filter = (state = 'ALL', action) => {
  let newState;
  switch (action.type) {
    case 'CHANGE_FILTER':
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default filter;
