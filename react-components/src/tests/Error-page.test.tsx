import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorPage from '../components/error-page';

describe('ErrorPage', () => {
  it('renders ErrorPage  component', () => {
    render(<ErrorPage />);
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
