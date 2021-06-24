import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';
// import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Navbar from './Navbar';

describe('Navbar snapshot', () => {
  const initialState = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    type: '',
  };
  const mockStore = configureStore();
  let store;

  it('Navbar section is rendered', () => {
    store = mockStore(initialState);
    const navbar = renderer
      .create(<Provider store={store}><Navbar /></Provider>)
      .toJSON();
    expect(navbar).toMatchSnapshot();
  });
});
