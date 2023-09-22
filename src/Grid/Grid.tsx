import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface GridProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Grid의 영역을 정의합니다.
   */
  areas?: string;
  /**
   * Grid의 행 수를 지정합니다.
   */
  rows?: number;
  /**
   * Grid의 열 수를 지정합니다.
   */
  columns?: number;
  /**
   * Grid Item 사이의 간격을 지정합니다.
   */
  gap?: number;
  /**
   * Grid의 높이를 지정합니다.
   */
  height?: string;
  /**
   * Grid의 자식 컴포넌트입니다.
   */
  children: ReactNode[];
}

const Grid = ({
  areas,
  rows,
  columns,
  gap,
  height,
  children,
  ...props
}: GridProps) => {
  const gridStyles = {
    display: 'grid',
    gridTemplateAreas: areas,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridGap: `${gap}px`,
    height,
  };

  return (
    <div style={gridStyles} {...props}>
      {children}
    </div>
  );
};

export default Grid;
