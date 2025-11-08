import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Module 1 button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/module 1/i);
  expect(buttonElement).toBeInTheDocument();
});
