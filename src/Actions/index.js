const actions = {
  next: (data) => ({
    type: 'NEXT',
    payload: data,
  }),
  filter: (type) => ({
    type: 'CHANGE_FILTER',
    payload: type,
  }),
};

export default actions;
