import React from 'react';
import { render, screen } from '@testing-library/react';
import Module4 from './Module4';

describe('Module4', () => {
  test('renders Module4 component with yellow button', () => {
    render(<Module4 />);
    const buttonElement = screen.getByText(/module 4/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle({
      backgroundColor: '#FFD700',
      color: 'black'
    });
  });
});