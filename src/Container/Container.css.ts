import { style, createVar } from '@vanilla-extract/css';

export const maxWidthVar = createVar();
export const minWidthVar = createVar();

export const center = style({
  display: 'block',
  minWidth: minWidthVar,
  maxWidth: maxWidthVar,
  margin: 'auto',
});
