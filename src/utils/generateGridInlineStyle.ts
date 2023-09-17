import { CSSProperties } from 'react';
import { Gap } from '../types/components/common';
import { Columns, Rows } from '../types/components/grid';

export const generateGridInlineStyle = (
  rows: Rows,
  columns: Columns,
  gap?: Gap
): CSSProperties => ({
  display: 'grid',
  ...(rows && { gridTemplateRows: `repeat(${rows}, 1fr)` }),
  ...(columns && { gridTemplateColumns: `repeat(${columns}, 1fr)` }),
  ...(gap && { gap }),
});
