import { ElementType, ReactNode, forwardRef } from 'react';
import {
  CommonProps,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '../types/common';

interface GridProps {
  /**
   * This prop is used when you want to specify the rows,
   * repeat(${rows}, 1fr)
   */
  rows?: number;
  /**
   * This prop is used when you want to specify the columns,
   * repeat(${columns}, 1fr)
   */
  columns?: number;
  /**
   * This prop is used when you want to specify the columns,
   * ${gapX}px
   */
  gapX?: number;
  /**
   * This prop is used when you want to specify the columns,
   * ${gapY}px
   */
  gapY?: number;
}

type GridComponent = <T extends ElementType>(
  props: PolymorphicComponentProps<T, GridProps>
) => ReactNode | null;

const Grid: GridComponent = forwardRef(function Grid<
  T extends ElementType = 'div'
>(
  {
    css,
    rows = 1,
    columns = 1,
    gapX = 0,
    gapY = 0,
    children,
  }: GridProps & CommonProps<T>,
  ref: PolymorphicRef<T>
) {
  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: `${gapY}px ${gapX}px`,
        ...css,
      }}>
      {children}
    </div>
  );
});

export default Grid;
