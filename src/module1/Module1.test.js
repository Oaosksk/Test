import { render, screen } from '@testing-library/react';
import Module1 from './Module1';

describe('Module1', () => {
  test('renders Module 1 button correctly', () => {
    render(<Module1 />);
    const buttonElement = screen.getByText(/module 1/i);
    expect(buttonElement).toBeInTheDocument();
  });
});