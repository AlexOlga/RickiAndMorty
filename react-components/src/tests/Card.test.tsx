import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/card/card';

const testProps = {
  id: 101,
  name: 'Ivanov Ivan',
  image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
  status: 'status test',
  species: 'species test',
};

describe('Card', () => {
  it('renders title Card component', () => {
    render(<Card {...testProps} />);
    expect(screen.getByText(/Ivanov Ivan/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Character image/i)).toBeInTheDocument();
    expect(screen.getByText(/status test/i)).toBeInTheDocument();
    expect(screen.getByText(/species test/i)).toBeInTheDocument();
  });
});
