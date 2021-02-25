import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';


test('Page content is present', async () => {
  render(<App />);
  const buttonElement = screen.getByRole(/generate-button/i);
  const cardContainer = screen.getByTestId(/card-container/i)
  const headerElement = screen.getByTestId(/page-header/i)
  expect(buttonElement).toBeInTheDocument();
  expect(cardContainer).toBeInTheDocument();
  expect(headerElement).toBeInTheDocument();
});

test('Generate button is present and working', async () => {
  render(<App />);
  const generateButton = screen.getByRole(/generate-button/i);
  const downloadButton = screen.getByRole(/download-button/i);
  expect(generateButton).toBeInTheDocument();
  expect(downloadButton).toBeDisabled();
  fireEvent.click(generateButton);
  expect(downloadButton).toBeEnabled();
});