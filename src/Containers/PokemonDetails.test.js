import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
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

describe('PokemonDetails container', () => {
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

  it('should contain a image', () => {
    const pokemondetails = render(
      <Provider store={store}>
        <BrowserRouter>
          <PokemonDetails />
        </BrowserRouter>
      </Provider>
    );
    const image = pokemondetails.container.querySelectorAll('img');
    expect(image).toHaveLength(1);
  });
});
