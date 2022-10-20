import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/search-bar/search-bar';

const searchProps = {
  value: 'test',
  onKeyPress: (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') console.log('Enter');
  },
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  },
};
const searchProps1 = {
  value: '',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  },
};

describe('render search bar', () => {
  it('renders SearchBar  component', () => {
    render(<SearchBar {...searchProps} />);
    expect(screen.getByPlaceholderText(/Search character/i)).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toHaveValue('test');
  });
  it('change value SearchBar ', () => {
    render(<SearchBar {...searchProps1} />);
    const consoleSpy = jest.spyOn(console, 'log');
    userEvent.type(screen.getByRole('searchbox'), 'r');
    expect(consoleSpy).toHaveBeenCalledWith('r');
  });
});
