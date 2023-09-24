import type {
  CSSProperties,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
} from 'react';

import GridItem from './grid-item';

import { convertNumberToPx, forwardRef } from '../utils';

import styles from './grid.module.css';

type GridCSS = Omit<
  CSSProperties,
  | 'gridTemplateAreas'
  | 'gridTemplateRows'
  | 'gridTemplateColumns'
  | 'gap'
  | 'rowGap'
  | 'columnGap'
>;
type GridStyleProps = {
  areas?: CSSProperties['gridTemplateAreas'];
  rows?: number;
  columns?: number;
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  css?: GridCSS;
};

type GridProps = ComponentPropsWithoutRef<'div'> & GridStyleProps;
type GridRef = ComponentPropsWithRef<'div'>['ref'];

type CompoundGrid = {
  Item: typeof GridItem;
};

const Grid = forwardRef<GridProps, CompoundGrid>(
  (
    {
      areas,
      rows,
      columns,
      gap,
      rowGap,
      columnGap,
      css = {},
      children,
      ...props
    }: GridProps,
    ref: GridRef
  ) => {
    const style = {
      gridTemplateAreas: areas,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: convertNumberToPx(gap),
      rowGap: convertNumberToPx(rowGap),
      columnGap: convertNumberToPx(columnGap),
      ...css,
    };

    return (
      <div className={styles.grid} style={style} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

Grid.Item = GridItem;

export default Grid;
