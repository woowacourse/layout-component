import { css } from '@emotion/react';

export const splitPaneContainerStyle = css({
  width: '500px',
  height: '500px',
  border: '1px solid black',
});

export const dividerStyle = css({
  height: '100%',
  width: '10px',
  marginLeft: '-10px',
  borderRight: '1px solid black',

  cursor: 'col-resize',
});

export const pan1Style = css({
  height: '100%',
  backgroundColor: 'skyblue',
  flex: 1,
});

export const pan2Style = css({
  height: '100%',
  backgroundColor: 'lightgreen',
  flex: 1,
  userSelect: 'none',
});
