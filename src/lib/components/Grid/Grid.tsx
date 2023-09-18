import { HTMLAttributes, ReactNode, CSSProperties } from 'react';
import styles from './Grid.module.css';

type GridProps = HTMLAttributes<HTMLDivElement> & {
  rows: number;
  columns: number;
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  children: ReactNode;
};

const Grid = (props: GridProps) => {
  const {
    rows,
    columns,
    gap,
    rowGap,
    columnGap,
    verticalPadding,
    horizontalPadding,
    children,
    ...rest
  } = props;

  const gridStyles: CSSProperties = {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap ?? 0}px`,
    rowGap: `${rowGap ? rowGap : gap ? gap : 0}px`,
    columnGap: `${columnGap ? columnGap : gap ? gap : 0}px`,
    paddingTop: `${verticalPadding}px`,
    paddingBottom: `${verticalPadding}px`,
    paddingLeft: `${horizontalPadding}px`,
    paddingRight: `${horizontalPadding}px`,
    ...rest,
  };

  return (
    <div className={styles.grid} style={gridStyles} role="grid">
      {children}
    </div>
  );
};

export default Grid;
