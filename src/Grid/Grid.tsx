import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface GridProps extends ComponentPropsWithoutRef<'div'> {
  areas?: string;
  rows?: number;
  columns?: number;
  gap?: number;
  height?: string;
  children: ReactNode[];
}

const Grid = ({ areas, rows, columns, gap, height, children }: GridProps) => {
  const gridStyles = {
    display: 'grid',
    gridTemplateAreas: areas,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridGap: `${gap}px`,
    height: height,
  };

  return <div style={gridStyles}>{children}</div>;
};

export default Grid;
