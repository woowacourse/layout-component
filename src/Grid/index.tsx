import type { CSSProperties } from 'react';
import type { PolymorphicElementPropsWithRef } from '../types';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { grid, rowCount, columnCount, gridGap } from './Grid.css';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  rows: number;
  columns: number;
  gap?: CSSProperties['gap'];
}

const Grid = <E extends React.ElementType = 'div'>(
  props: PolymorphicElementPropsWithRef<E, GridProps>
) => {
  const {
    as: Element = 'div',
    gap = '',
    ref,
    rows,
    columns,
    children,
    className,
    style,
    ...rest
  } = props;
  return (
    <Element
      ref={ref}
      className={`${className} ${grid}`}
      style={{
        ...style,
        ...assignInlineVars({
          [rowCount]: rows.toString(),
          [columnCount]: columns.toString(),
          [gridGap]: gap.toString(),
        }),
      }}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Grid;
