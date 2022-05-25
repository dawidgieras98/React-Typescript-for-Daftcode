import React from "react";
import { render, screen } from "@testing-library/react";
import FormInputs from "./FormInputs";

test("renders learn react link", () => {
  render(<FormInputs />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
