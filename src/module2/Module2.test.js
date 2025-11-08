import React from 'react';
import { render, screen } from '@testing-library/react';
import Module2 from './Module2';

describe('Module2', () => {
  test('renders Module2 component with red button', () => {
    render(<Module2 />);
    const buttonElement = screen.getByText(/module 2/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle({
      backgroundColor: '#ff0000',
      color: 'white'
    });
  });
});