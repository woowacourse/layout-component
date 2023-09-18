import type { CSSProperties as CSS, PropsWithChildren } from 'react';
import { type ContainerProps, stylingContainer } from './Container';

interface GridProps extends ContainerProps {
  rows?: number;
  columns?: number;
  gap?: number;
}

export const Grid = (props: PropsWithChildren<GridProps>) => {
  const { children, rows = 1, columns = 1, gap = 0 } = props;

  const style: CSS = {
    ...stylingContainer(props),

    display: 'grid',
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
  };

  return <div style={style}>{children}</div>;
};
