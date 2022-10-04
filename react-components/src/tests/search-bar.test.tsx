import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/search-bar/search-bar';

describe('render search bar', () => {
  render(<SearchBar />);
  it('renders Cards component', () => {
    expect(screen.getByPlaceholderText(/Search character/i)).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});
