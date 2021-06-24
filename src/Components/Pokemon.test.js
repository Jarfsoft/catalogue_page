import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

// import userEvent from '@testing-library/user-event';
// import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom'; import Pokemon from './Pokemon';

describe('Pokemon snapshot', () => {
  const initialState = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    type: '',
  };
  const mockStore = configureStore();
  let store;

  it('Pokemon component is rendered', () => {
    store = mockStore(initialState);
    const pokemon = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Pokemon id={1} />
          </Provider>
        </BrowserRouter>,
      ).toJSON();
    expect(pokemon).toMatchSnapshot();
  });
});
