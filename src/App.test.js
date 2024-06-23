import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Responsive Web Developer Starter/i);
  expect(linkElement).toBeInTheDocument();
});
