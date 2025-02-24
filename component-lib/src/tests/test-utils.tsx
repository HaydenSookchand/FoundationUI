import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";

// Define a shared mock theme
export const mockTheme: Theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
    background: { default: "#f4f4f4" },
    text: { primary: "#FFB900" }, // Default color for tests
  },
});

//  Utility function to wrap components with ThemeProvider
const renderWithTheme = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(<ThemeProvider theme={mockTheme}>{ui}</ThemeProvider>, options);

// Re-export everything from RTL + renderWithTheme for easy usage
export * from "@testing-library/react";
export { renderWithTheme };
