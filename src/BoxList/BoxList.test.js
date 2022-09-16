import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new box", () => {
  const { queryByText, getByLabelText } = render(<BoxList />);
  const color = getByLabelText("Color");
  const width = getByLabelText("Width");
  const height = getByLabelText("Height");
  const btn = queryByText("Add New Box");
  expect(queryByText("X")).not.toBeInTheDocument();
  fireEvent.change(color, { target: { value: "#000000" } });
  fireEvent.change(width, { target: { value: 16 } });
  fireEvent.change(height, { target: { value: 16 } });
  fireEvent.click(btn);
  expect(queryByText("X")).toBeInTheDocument();
});
