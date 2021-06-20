const actions = {
  next: (data) => ({
    type: 'NEXT',
    payload: data,
  }),
  previous: (data) => ({
    type: 'PREVIOUS',
    payload: data,
  }),
  filter: (type) => ({
    type: 'CHANGE_FILTER',
    payload: type,
  }),
};

export default actions;
