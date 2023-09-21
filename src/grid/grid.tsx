import type {
  CSSProperties,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
} from 'react';

import GridItem from './grid-item';

import { forwardRef } from '../utils';

import styles from './grid.module.css';

type GridCSS = Omit<
  CSSProperties,
  'gridTemplateAreas' | 'gridTemplateRows' | 'gridTemplateColumns' | 'gap'
>;
type GridStyleProps = {
  areas?: CSSProperties['gridTemplateAreas'];
  rows?: number;
  columns?: number;
  gap?: number;
  css?: GridCSS;
};

type GridProps = ComponentPropsWithoutRef<'div'> & GridStyleProps;
type GridRef = ComponentPropsWithRef<'div'>['ref'];

type CompoundGrid = {
  Item: typeof GridItem;
};

const Grid = forwardRef<GridProps, CompoundGrid>(
  (
    { areas, rows, columns, gap, css = {}, children, ...props }: GridProps,
    ref: GridRef
  ) => {
    const style = {
      gridTemplateAreas: areas,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: `${gap}px`,
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
