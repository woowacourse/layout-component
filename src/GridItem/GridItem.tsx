import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';
import { compact } from '../utils';

interface GridItemProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * GridItem의 너비값입니다.
   */
  width?: string | number;
  /**
   * GridItem의 높이값입니다.
   */
  height?: string | number;
  /**
   * GridItem의 영역을 정의합니다.
   */
  area?: CSSProperties['gridArea'];
  /**
   * GridItem의 row 값 입니다.
   */
  row?: number | 'auto';
  /**
   * GridItem의 column 값 입니다.
   */
  col?: number | 'auto';
  /**
   * GridItem의 row가이시작하는 위치입니다.
   */
  rowStart?: number | 'auto';
  /**
   * GridItem의 row가 끝나는 위치입니다.
   */
  rowEnd?: number | 'auto';
  /**
   * GridItem의 column이 시작하는 위치입니다.
   */
  colStart?: number | 'auto';
  /**
   * GridItem의 column이 끝나는 위치입니다.
   */
  colEnd?: number | 'auto';
  /**
   * GridItem의 배경색입니다.
   */
  backgroundColor?: string;
  /**
   * GridItem의 자식 컴포넌트입니다.
   */
  children?: ReactNode;
}

const GridItem = ({
  width,
  height,
  area,
  row,
  col,
  rowStart,
  rowEnd,
  colStart,
  colEnd,
  backgroundColor,
  children,
  ...props
}: GridItemProps) => {
  const itemStyles = area
    ? compact({ gridArea: area, backgroundColor })
    : compact({
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        gridRow: typeof row === 'number' ? `span ${row} / span ${row}` : row,
        gridColumn: typeof col === 'number' ? `span ${col} / span ${col}` : col,
        gridRowStart: rowStart,
        gridRowEnd: rowEnd,
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
        backgroundColor,
      });

  return (
    <div style={itemStyles} {...props}>
      {children}
    </div>
  );
};

export default GridItem;
