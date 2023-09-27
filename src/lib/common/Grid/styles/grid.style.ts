import { css } from '@emotion/react';

import { addUnit } from '@utils/addUnit';

import type { GridProps } from '../Grid';

interface GridRepeatStyleProps {
  itemCount?: number | string;
  axios?: 'rows' | 'columns';
  size?: number | string;
}
const getGridItemRepeatStyle = ({ itemCount, axios, size }: GridRepeatStyleProps) => {
  if (itemCount === undefined) return;

  const template = `grid-template-${axios}:`;

  if (typeof itemCount === 'string' || itemCount === 0) return `${template} ${itemCount}`;
  return `${template} repeat(${itemCount}, ${size !== undefined ? addUnit(size) : '1fr'}); `;
};

export const gridItemRepeatStyle = ({ rows, columns, columnSize, rowSize }: GridProps) => css`
  ${getGridItemRepeatStyle({ itemCount: rows, axios: 'rows', size: rowSize })};

  ${getGridItemRepeatStyle({ itemCount: columns, axios: 'columns', size: columnSize })};

  ${columns !== undefined && rows === undefined && `grid-auto-rows: auto`};
  ${rows !== undefined && columns === undefined && `grid-auto-flow: column`};
`;
