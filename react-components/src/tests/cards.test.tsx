import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from '../components/cards/cards';

describe('Cards', () => {
  it('renders title Cards component', () => {
    render(<Cards />);
    expect(screen.getByText(/Rick and Morty/i)).toBeInTheDocument();
  });

  it('renders cards', async () => {
    render(<Cards />);
    expect(screen.queryByAltText(/Character image/i)).toBeNull();
    expect(await screen.findAllByAltText(/Character image/i)).toHaveLength(20);
  });
});
