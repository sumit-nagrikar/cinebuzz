import { render, screen } from "@testing-library/react"; // Importing render and screen utilities from testing-library/react
import App from "./App"; // Importing the main App component to test

test("renders learn react link", () => {
  render(<App />); // Rendering the entire App component
  const linkElement = screen.getByText(/learn react/i); // Finding an element in the rendered output that contains 'learn react'
  expect(linkElement).toBeInTheDocument(); // Asserting that the 'learn react' link element is present in the document
});
