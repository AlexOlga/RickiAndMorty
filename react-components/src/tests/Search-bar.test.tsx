import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/search-bar/search-bar';
import store from '../redux/store';

const searchProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  },
};

beforeEach(() => {
  render(
    <Provider store={store}>
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
