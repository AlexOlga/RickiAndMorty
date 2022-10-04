import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/search-bar/search-bar';

describe('render search bar', () => {
  it('renders SearchBar  component', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText(/Search character/i)).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
  it('change value SearchBar ', () => {
    render(<SearchBar />);
    userEvent.type(screen.getByRole('searchbox'), 'react');
    expect(screen.getByRole('searchbox')).toHaveValue('react');
  });
});
