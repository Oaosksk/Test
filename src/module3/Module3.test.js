import React from 'react';
import { render, screen } from '@testing-library/react';
import Module3 from './Module3';

describe('Module3', () => {
  test('renders Module3 component with green button', () => {
    render(<Module3 />);
    const buttonElement = screen.getByText(/module 3/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle({
      backgroundColor: '#4CAF50',
      color: 'white'
    });
  });
});