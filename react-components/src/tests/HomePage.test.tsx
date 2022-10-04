import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../components/home-page';

describe('HomePage', () => {
  render(<HomePage />);
  it('renders HomePage  component', () => {
    expect(screen.getByText(/Rick and Morty/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search character/i)).toBeInTheDocument();
  });
});
