import React from "react";
import type { Preview } from "@storybook/react";
import { SoroswapThemeProvider } from "../lib";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story, { parameters }) => {
      const { theme = "dark" } = parameters;
      return (
        <SoroswapThemeProvider theme={theme}>
          <Story />
        </SoroswapThemeProvider>
      );
    },
  ],

  tags: ["autodocs", "autodocs"],
};

export default preview;
