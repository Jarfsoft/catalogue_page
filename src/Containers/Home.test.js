import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';
// import { render, screen } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

const initialState = {
  list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  type: '',
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
    .mockReturnValueOnce(initialState),
}));

describe('Home page snapshot', () => {
  afterEach(() => {
    useSelector.mockClear();
  });
  const mockStore = configureStore();
  let store;

  it('Home page is rendered', () => {
    store = mockStore(initialState);
    const home = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>,
      ).toJSON();
    expect(home).toMatchSnapshot();
  });
});
