import { style, createVar } from '@vanilla-extract/css';

export const rowGapVar = createVar();
export const volumeVar = createVar();

export const columnFlow = style({
  boxSizing: 'content-box',
  paddingBottom: rowGapVar,
  gridRowEnd: `span ${volumeVar}`,
  height: 'max-content',
});
