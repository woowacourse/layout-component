import { css } from '@emotion/react';

import type { WidthStyle } from '../Container';

export const ALIGNMENT = {
  left: '0',
  center: '0 auto',
  right: '0 0 0 auto',
};
export type Alignment = keyof typeof ALIGNMENT;

export const positionStyle = (position: Alignment) => css`
  ${position && `margin: ${ALIGNMENT[position]}`}
`;

export const CONTAINER_WIDTH = {
  xs: '320px',
  sm: '425px',
  md: '768px',
  lg: '960px',
  xl: '1140px',
  xxl: '1440px',
};
export type Size = keyof typeof CONTAINER_WIDTH;

export const widthStyle = ({ maxWidth, minWidth, fluid, gutter }: WidthStyle) => css`
  ${gutter && 'margin: 0 24px'};
  ${fluid && `width: ${gutter ? 'calc(100% - 48px)' : '100%'}`};

  ${maxWidth && `max-width: ${CONTAINER_WIDTH[maxWidth]}`};
  ${minWidth && `min-width: ${CONTAINER_WIDTH[minWidth]}`};
`;
