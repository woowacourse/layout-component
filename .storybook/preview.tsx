import type { Preview } from '@storybook/react';
import GlobalStyle from '../src/GlobalStyle';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'gray',
      values: [
        {
          name: 'gray',
          value: '#e9efff',
        },
        {
          name: 'white',
          value: '#FFFFFF',
        },
        {
          name: 'black',
          value: '#000000',
        },
        {
          name: 'blue',
          value: '#2e54a0',
        },
      ],
    },
  },

  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
};

export default preview;
