import { css } from '@emotion/react';

export const splitPaneContainerStyle = ({ width }: { width: string }) =>
  css({
    width,
    height: '100%',
  });

export const defaultDividerStyle = css({
  height: '100%',
  width: '10px',
  marginLeft: '-10px',
  borderRight: '1px solid black',

  cursor: 'col-resize',
});

export const pane1Style = css({
  height: '100%',
  flex: 1,
});

export const pane2Style = css({
  height: '100%',
  flex: 1,
  userSelect: 'none',
});
