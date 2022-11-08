import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../redux/rootReducer';

const initialState = {
  form: undefined,
  search: undefined,
};

describe('App', () => {
  test('rooter test', () => {
    render(
      <MemoryRouter>
        <Provider store={createStore(rootReducer, initialState)}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About/i);
    userEvent.click(aboutLink);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    userEvent.click(homeLink);
    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });
  test('Error page rooter test', () => {
    render(
      <MemoryRouter initialEntries={['/testpage']}>
        <Provider store={createStore(rootReducer, initialState)}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
