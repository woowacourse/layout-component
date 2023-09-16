import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface GridProps extends ComponentPropsWithoutRef<'div'> {
  rows: number;
  columns: number;
  gap: number;
  children: ReactNode[];
}

const Grid = ({ rows, columns, gap, children }: GridProps) => {
  const gridStyles = {
    display: 'grid',
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
  };

  return <div style={gridStyles}>{children}</div>;
};

export default Grid;
