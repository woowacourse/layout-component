import { css } from '@emotion/react';
import { GridProps } from './Grid';

export const gridBoxStyle = ({
  row,
  column,
  gap,
  rowGap,
  columnGap,
}: GridProps) => {
  return css({
    display: 'grid',
    gridTemplateRows: `repeat(${row}, auto)`,
    gridTemplateColumns: `repeat(${column}, auto)`,
    rowGap,
    columnGap,
    gap,
  });
};
