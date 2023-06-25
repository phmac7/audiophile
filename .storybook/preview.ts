import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import '@/styles/globals.css';
import '@/styles/font-sb.css';

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    nextjs: {
      appDirectory: true,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
