import React from 'react';
import { render, screen } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/search-bar/search-bar';
import { rootReducer } from '../redux/rootReducer';

const searchProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  },
};

const initialState = {
  form: undefined,
  search: undefined,
};

beforeEach(() => {
  render(
    <Provider store={createStore(rootReducer, initialState)}>
      <SearchBar {...searchProps} />
    </Provider>
  );
});

describe('render search bar', () => {
  it('renders SearchBar  component', () => {
    expect(screen.getByPlaceholderText(/Search character/i)).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
  it('change value SearchBar ', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    userEvent.type(screen.getByRole('searchbox'), 'r');
    expect(consoleSpy).toHaveBeenCalledWith('r');
  });
});
