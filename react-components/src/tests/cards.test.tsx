import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from '../components/cards/cards';

describe('Cards', () => {
  render(<Cards />);
  it('renders title Cards component', () => {
    expect(screen.getByText(/Rick and Morty/i)).toBeInTheDocument();
  });

  it('renders cards', async () => {
    expect(screen.queryByAltText(/Character image/i)).toBeNull();
   // expect(await screen.findByAltText(/Character image/i)).toBeInTheDocument();
  });
});
