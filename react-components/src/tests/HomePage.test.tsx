import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import HomePage from '../components/home-page';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../redux/rootReducer';

const initialState = {
  form: undefined,
  search: undefined,
};

describe('HomePage', () => {
  it('renders HomePage  component', () => {
    render(
      <Provider store={createStore(rootReducer, initialState)}>
        <HomePage />
      </Provider>
    );
    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search character/i)).toBeInTheDocument();
  });
  it('fetches ', async () => {
    const fakeRes = {
      results: [
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
    global.fetch = jest.fn().mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolve({
            json: () =>
              new Promise((resolve) => {
                resolve(fakeRes);
              }),
          });
        })
    );
    await act(async () => {
      render(
        <Provider store={createStore(rootReducer, initialState)}>
          <HomePage />
        </Provider>
      );
    });

    expect(screen.getByText(/Rick and Morty/i)).toBeInTheDocument();
    expect(screen.getAllByAltText(/Character image/i)).toHaveLength(3);
  });
});
