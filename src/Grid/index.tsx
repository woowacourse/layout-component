import type { CSSProperties } from 'react';
import type { PolymorphicElementPropsWithRef } from '../types';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { grid, rowCount, columnCount, gridGap } from './Grid.css';
import { toPixelIfNumber } from '../utils/toPixelIfNumber';

interface GridProps {
  rows: number | 'auto-fill' | 'auto-fit';
  columns: number | 'auto-fill' | 'auto-fit';
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
      className={`${grid}` + (className ? ` ${className}` : '')}
      style={{
        ...style,
        ...assignInlineVars({
          [rowCount]: rows.toString(),
          [columnCount]: columns.toString(),
          [gridGap]: toPixelIfNumber(gap),
        }),
      }}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Grid;
