import { Global } from '@emotion/react';
import type { Preview } from '@storybook/react';

import React from 'react';

import { common } from '../src/styles/common';
import { reset } from '../src/styles/reset';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      defaultViewport: 'desktop',
      viewports: {
        iphone6: {
          name: 'iPhone SE',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        ipad: {
          name: 'IPad',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#fff',
        },
        {
          name: 'black',
          value: '#000',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <React.Fragment>
        <Global styles={[reset, common]} />
        <Story />
      </React.Fragment>
    ),
  ],
};

export default preview;
