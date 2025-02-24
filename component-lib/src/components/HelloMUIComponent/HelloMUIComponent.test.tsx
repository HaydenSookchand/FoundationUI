import React from "react";
import { screen, renderWithTheme } from "../../tests/test-utils"; // ✅ Use shared test utility
import "@testing-library/jest-dom";
import HelloMUIComponent from "./HelloMUIComponent";

describe("HelloMUIComponent", () => {
  it("renders the component with correct text", () => {
    renderWithTheme(<HelloMUIComponent />);
    expect(screen.getByText("Hello World MUI JSX")).toBeInTheDocument();
  });

  it("applies correct typography color", () => {
    renderWithTheme(<HelloMUIComponent />);
    const textElement = screen.getByText("Hello World MUI JSX");
    expect(textElement).toHaveStyle({ color: "#FFB900" }); // Uses mock theme
  });

  it("matches snapshot", () => {
    const { asFragment } = renderWithTheme(<HelloMUIComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
