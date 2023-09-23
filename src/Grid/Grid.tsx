import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';
import styles from './Grid.module.css';

interface GridProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Grid의 높이값 입니다.
   */
  height?: string | number;
  /**
   * Grid의 영역입니다.
   */
  areas?: CSSProperties['gridTemplateAreas'];
  /**
   * Grid의 row 수입니다.
   */
  rows?: number;
  /**
   * Grid의 column 수입니다.
   */
  columns?: number;
  /**
   * Grid Item들 간의 간격입니다.
   */
  gap?: number;
  /**
   * Grid의 자식 컴포넌트입니다.
   */
  children?: ReactNode;
}

const Grid = ({
  height,
  areas,
  rows,
  columns,
  gap,
  children,
  ...props
}: GridProps) => {
  const gridStyle = {
    height: typeof height === 'number' ? `${height}px` : height,
    gridTemplateAreas: areas,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridGap: `${gap}px`,
  };

  return (
    <div className={styles.grid} style={gridStyle} {...props}>
      {children}
    </div>
  );
};

export default Grid;
