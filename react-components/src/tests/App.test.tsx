import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  test('rooter test', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About/i);
    userEvent.click(aboutLink);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    userEvent.click(homeLink);
    expect(screen.getByText(/Rick and Morty/i)).toBeInTheDocument();
  });
  test('Error page rooter test', () => {
    render(
      <MemoryRouter initialEntries={['/testpage']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
