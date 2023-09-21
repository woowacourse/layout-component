import React from 'react';

import type { Preview } from '@storybook/react';

import LayoutProvider from '../src/LayoutProvider';

const preview: Preview = {
  parameters: {
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

export const decorators = [
  (Story) => (
    <LayoutProvider>
      <Story />
    </LayoutProvider>
  ),
];
