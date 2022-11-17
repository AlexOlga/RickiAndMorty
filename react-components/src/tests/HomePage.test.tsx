import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../components/home-page';
import { Provider } from 'react-redux';
import store from '../redux/store';
import * as reduxHooks from '../redux/hooks';
import { MemoryRouter } from 'react-router-dom';

describe('HomePage', () => {
  it('renders HomePage  component', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search character/i)).toBeInTheDocument();
  });
  it('fetches ', () => {
    const fakeRes = {
      out: 20,
      page: 1,
      typeSorting: '',
      loading: false,
      error: null,
      searchQuery: '',
      searchResults: [
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
    jest.spyOn(reduxHooks, 'useAppSelector').mockReturnValue(fakeRes);
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Rick and Morty/i)).toBeInTheDocument();
    expect(screen.getAllByAltText(/Character image/i)).toHaveLength(3);
  });
});
