import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../components/home-page';

describe('HomePage', () => {
  it('renders HomePage  component', () => {
    render(<HomePage />);
    expect(screen.getByText(/Rick and Morty/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search bar')).toBeInTheDocument();
  });
});
