import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '../components/card/card';

const testProps = {
  character: {
    id: 101,
    name: 'Ivanov Ivan',
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    status: 'status test',
    species: 'species test',
  },
  onClick: () => console.log('onClick'),
};

describe('Card', () => {
  it('renders title Card component', () => {
    render(<Card character={testProps.character} onClick={testProps.onClick} />);
    expect(screen.getByText(/Ivanov Ivan/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Character image/i)).toBeInTheDocument();
    expect(screen.getByText(/status test/i)).toBeInTheDocument();
    expect(screen.getByText(/species test/i)).toBeInTheDocument();
  });
  it('console.log the text "onClick"', () => {
    render(<Card character={testProps.character} onClick={testProps.onClick} />);
    const card = screen.getByAltText(/Character image/i);
    const consoleSpy = jest.spyOn(console, 'log');
    userEvent.click(card);
    expect(consoleSpy).toHaveBeenCalledWith('onClick');
  });
});
