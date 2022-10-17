import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/about';

describe('About', () => {
  it('renders About  component', () => {
    render(<About />);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });
});
