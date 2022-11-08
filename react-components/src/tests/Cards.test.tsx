import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from '../components/cards/cards';
import { MemoryRouter } from 'react-router-dom';

const cardsProps = {
  data: [
    {
      id: 101,
      name: 'Test 1',
      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      status: 'status test',
      species: 'species test',
      location: { name: 'location1', url: '' },
      origin: { name: 'unknown', url: '' },
    },
    {
      id: 102,
      name: 'Ivanov Ivan',
      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      status: 'status test',
      species: 'species test',
      location: { name: 'unknown', url: '' },
      origin: { name: 'unknown', url: '' },
    },
    {
      id: 103,
      name: 'Ivanov Ivan',
      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      status: 'status test',
      species: 'species test',
      location: { name: 'unknown', url: '' },
      origin: { name: 'unknown', url: '' },
    },
  ],
};
describe('Cards', () => {
  it('renders  Cards component', () => {
    render(
      <MemoryRouter>
        <Cards {...cardsProps} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Rick and Morty/i)).toBeInTheDocument();
    expect(screen.getAllByAltText(/Character image/i)).toHaveLength(3);
  });
});
