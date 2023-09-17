import { HTMLProps } from 'react';
import type { CommonProps } from '../../types';
import type { Gap } from '../../types/components/common';
import type { Columns, Rows } from '../../types/components/grid';
import { generateGridInlineStyle } from '../../utils/generateGridInlineStyle';
import { parseClassName } from '../../utils/parseClassName';
import styles from './Grid.module.css';

interface GridProps extends CommonProps, HTMLProps<HTMLDivElement> {
  rows: Rows;
  columns: Columns;
  gap?: Gap;
}

const Grid = ({ rows, columns, gap, sx, children, className = '', ...rest }: GridProps) => {
  const { dynamicStyle, staticClassName } = parseClassName(className, styles);
  const gridInlineStyle = generateGridInlineStyle(rows, columns, gap);

  return (
    <div
      style={{ ...gridInlineStyle, ...dynamicStyle, ...sx }}
      className={`${staticClassName}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Grid;
