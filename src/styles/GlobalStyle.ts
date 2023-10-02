import { css } from '@emotion/react';

export const GlobalStyle = css({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },

  body: {
    fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, 'Open Sans', 'Helvetica Neue'`,
    fontSize: '16px',
  },

  'ul, ol, li': {
    listStyle: 'none',
  },
});
