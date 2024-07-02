import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
test("Should load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Should load contact us component", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Should load contact us component", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("Should load contact us component", () => {
  render(<Contact />);
  const inputText = screen.getByPlaceholderText("Enter Name");
  expect(inputText).toBeInTheDocument();
});

test("Should load contact us component", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(2);
});
