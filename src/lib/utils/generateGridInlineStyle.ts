import { CSSProperties } from 'react';

import type { Gap } from '../types/common';
import type { Columns, Rows } from '../types/grid';
import { numToPixel } from './numToPixel';

export const generateGridInlineStyle = (
  rows: Rows,
  columns: Columns,
  gap?: Gap
): CSSProperties => ({
  display: 'grid',
  ...(rows && { gridTemplateRows: `repeat(${rows}, 1fr)` }),
  ...(columns && { gridTemplateColumns: `repeat(${columns}, 1fr)` }),
  ...(gap && { gap: numToPixel(gap) }),
});
