import React from 'react';
import { render, screen } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Forms from '../components/forms/forms';
import { ICharacter } from '../types';
import { rootReducer } from '../redux/rootReducer';

const initialState = {
  form: undefined,
  search: undefined,
};
const myColback = (a: ICharacter) => console.log(a);
beforeEach(() => {
  render(
    <Provider store={createStore(rootReducer, initialState)}>
      <Forms callback={myColback} />
    </Provider>
  );
});

describe('form component', () => {
  it('renders form  component', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(4);
    expect(screen.getAllByRole('checkbox')).toHaveLength(2);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Submit button should be disabled at initialization (before the first typing)', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
    userEvent.type(screen.getByRole('textbox'), 'Ivan');
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('data input', () => {
    userEvent.type(screen.getByRole('textbox'), 'Ivan');
    expect(screen.getByRole('textbox')).toHaveValue('Ivan');
    userEvent.click(screen.getAllByRole('checkbox')[0]);
    expect(screen.getAllByRole('checkbox')[0]).toBeChecked();
    userEvent.click(screen.getAllByRole('checkbox')[1]);
    expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
  });
});
