import { PropsWithChildren } from 'react';
import './index.css';

interface GridProps extends PropsWithChildren {
  rows?: number;
  columns?: number;
  gap?: number;
}

const Grid = ({ children, rows = 10, columns = 10, gap = 0 }: GridProps) => {
  const applyStyle = {
    gridTemplateColumns: `repeat(${columns}, ${(100 / columns).toFixed(2)}%)`,
    gridTemplateRows: `repeat(${rows}, auto)`,
    gap: `${gap}px`,
  };
  return (
    <div className='ys-layout-components-grid' style={applyStyle}>
      {children}
    </div>
  );
};

export default Grid;
