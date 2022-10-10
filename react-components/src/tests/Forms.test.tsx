import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Forms from '../components/forms/forms';
import { ICharacter } from '../types';

const myColback = (a: ICharacter) => console.log(a);

describe('form component', () => {
  it('renders form  component', () => {
    render(<Forms colback={myColback} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(4);
    expect(screen.getAllByRole('checkbox')).toHaveLength(2);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Submit button should be disabled at initialization (before the first typing)', () => {
    render(<Forms colback={myColback} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
    userEvent.type(screen.getByRole('textbox'), 'Ivan');
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('data input', () => {
    render(<Forms colback={myColback} />);
    userEvent.type(screen.getByRole('textbox'), 'Ivan');
    expect(screen.getByRole('textbox')).toHaveValue('Ivan');
    userEvent.click(screen.getAllByRole('checkbox')[0]);
    expect(screen.getAllByRole('checkbox')[0]).toBeChecked();
    userEvent.click(screen.getAllByRole('checkbox')[1]);
    expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
  });
});
