import type { Preview } from "@storybook/react";
import {themes} from "@storybook/theming"
import '@/styles/globals.css'
import '@/styles/font-sb.css'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    docs: {
        theme: themes.dark
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
