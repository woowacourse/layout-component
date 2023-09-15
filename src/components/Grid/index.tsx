import { CSSProperties, PropsWithChildren } from 'react';
import './index.css';

interface CSSGridProps extends PropsWithChildren {
  column: number;
  row: number;
  gap: number;
}

const Grid = ({ column, row, gap, children }: CSSGridProps) => {
  const gridStyle: CSSProperties = {
    gridTemplateColumns: `repeat(${column}, 1fr)`,
    gridTemplateRows: `repeat(${row}, 1fr)`,
    gap: `${gap}px`,
  };

  return (
    <div className="rgp-layout-grid" style={gridStyle}>
      {children}
    </div>
  );
};

export default Grid;
