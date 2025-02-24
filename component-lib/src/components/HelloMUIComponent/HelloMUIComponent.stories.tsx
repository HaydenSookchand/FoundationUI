import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HelloMUIComponent from "./HelloMUIComponent"; // Adjust path accordingly

export default {
  title: "An Example/HelloMUIComponent",
  component:HelloMUIComponent,
  parameters: {
    docs: {
      description: {
        component: "A simple MUI Typography component inside a Storybook story.",
      },
    },
  },
};

const theme = createTheme();

const Template = () => (
  <ThemeProvider theme={theme}>
    <HelloMUIComponent />
  </ThemeProvider>
);

export const Default = Template.bind({});
