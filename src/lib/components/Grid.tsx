import { generateGridInlineStyle } from '../utils/generateGridInlineStyle';
import { parseClassName } from '../utils/parseClassName';
import styles from '../styles/Grid.module.css';

import type { CommonProps } from '../types';
import type { Gap } from '../types/common';
import type { Columns, Rows } from '../types/grid';

interface GridProps<C extends React.ElementType> extends CommonProps {
  as?: C;
  rows: Rows;
  columns: Columns;
  gap?: Gap;
}

const Grid = <C extends React.ElementType = 'div'>({
  as,
  rows,
  columns,
  gap,
  sx,
  children,
  className = '',
  ...attributes
}: GridProps<C>) => {
  const { dynamicStyle, staticClassName } = parseClassName(className, styles);
  const gridInlineStyle = generateGridInlineStyle(rows, columns, gap);

  const Component = as || 'div';

  return (
    <Component
      style={{ ...gridInlineStyle, ...dynamicStyle, ...sx }}
      className={`${staticClassName}`}
      {...attributes}
    >
      {children}
    </Component>
  );
};

export default Grid;
