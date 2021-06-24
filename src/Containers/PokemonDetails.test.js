import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';
// import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';

const initialState = {
  list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  type: '',
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
    .mockReturnValueOnce(initialState),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 1,
  }),
}));

describe('PokemonDetails snapshot', () => {
  const mockStore = configureStore();
  let store;

  it('PokemonDetails page is rendered', () => {
    store = mockStore(initialState);
    const pokemondetails = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <PokemonDetails />
          </BrowserRouter>
        </Provider>,
      ).toJSON();
    expect(pokemondetails).toMatchSnapshot();
  });
});
