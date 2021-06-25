import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Navbar from './Navbar';

describe('Navbar render', () => {
  const initialState = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    type: '',
  };
  const mockStore = configureStore();
  let store;

  describe('Snapshot check', () => {
    it('should render Navbar section', () => {
      store = mockStore(initialState);
      const navbar = renderer
        .create(<Provider store={store}><Navbar /></Provider>)
        .toJSON();
      expect(navbar).toMatchSnapshot();
    });
  });

  describe('Navbar contains', () => {
    it('should contain a select menu', () => {
      const navbar = render(<Provider store={store}><Navbar /></Provider>);
      const select = navbar.container.querySelector('select');
      expect(select).toHaveLength(12);
    });
    it('should contain a image', () => {
      const navbar = render(<Provider store={store}><Navbar /></Provider>);
      const select = navbar.container.querySelectorAll('img');
      expect(select).toHaveLength(1);
    });
  });
});
