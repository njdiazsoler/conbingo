import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test('Generate button is present and working', () => {
  render(<App />);
  const buttonElement = screen.getByRole(/GenerateButton/i);
  expect(buttonElement).toBeInTheDocument();
  fireEvent.click(buttonElement);
  const textElement = screen.getByText('Button clicked!')
  expect(textElement).toBeInTheDocument();
});