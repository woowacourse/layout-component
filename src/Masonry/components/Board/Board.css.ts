import { style, createVar } from '@vanilla-extract/css';

export const itemSizeVar = createVar();
export const columnGapVar = createVar();

export const masonryBoard = style({
  display: 'grid',
  gridAutoRows: '1px',
  gridTemplateColumns: `repeat(auto-fill, ${itemSizeVar})`,
  columnGap: columnGapVar,
});
