import { style, createVar } from '@vanilla-extract/css';

export const rowCount = createVar();
export const columnCount = createVar();
export const gridGap = createVar();

export const grid = style({
  display: 'grid',
  gridTemplateRows: `repeat(${rowCount}, auto)`,
  gridTemplateColumns: `repeat(${columnCount}, auto)`,
  gap: gridGap,

  padding: gridGap,
  width: 'max-content',
  height: 'max-content',
});
