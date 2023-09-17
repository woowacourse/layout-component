import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { compact } from '../utils/object';

interface GridItemProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * GridItem의 영역을 정의합니다.
   */
  area?: string;
  /**
   * GridItem의 행 수를 지정합니다.
   */
  row?: number | 'auto';
  /**
   * GridItem의 열 수를 지정합니다.
   */
  col?: number | 'auto';
  /**
   * GridItem의 행이 시작하는 위치를 지정합니다.
   */
  rowStart?: number | 'auto';
  /**
   * GridItem의 행이 끝나는 위치를 지정합니다.
   */
  rowEnd?: number | 'auto';
  /**
   * GridItem의 열이 시작하는 위치를 지정합니다.
   */
  colStart?: number | 'auto';
  /**
   * GridItem의 열이 끝나는 위치를 지정합니다.
   */
  colEnd?: number | 'auto';
  /**
   * GridItem의 너비를 지정합니다.
   */
  width?: string;
  /**
   * GridItem의 높이를 지정합니다.
   */
  height?: string;
  /**
   * GridItem의 배경 색상입니다.
   */
  backgroundColor?: string;
  /**
   * GridItem의 자식 컴포넌트입니다.
   */
  children?: ReactNode;
}

const GridItem = ({
  area,
  row,
  col,
  rowStart,
  rowEnd,
  colStart,
  colEnd,
  width,
  height,
  backgroundColor,
  children,
  ...props
}: GridItemProps) => {
  const gridColumn =
    typeof col === 'number' ? `span ${col} / span ${col}` : col;
  const gridRow = typeof row === 'number' ? `span ${row} / span ${row}` : row;

  const itemStyles = area
    ? compact({ gridArea: area, backgroundColor })
    : compact({
        gridRow,
        gridColumn,
        gridRowStart: rowStart,
        gridRowEnd: rowEnd,
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
        width,
        height,
        backgroundColor,
      });

  return (
    <div style={itemStyles} {...props}>
      {children}
    </div>
  );
};

export default GridItem;
