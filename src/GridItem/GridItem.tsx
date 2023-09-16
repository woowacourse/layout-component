import type { ComponentPropsWithoutRef, ReactNode } from 'react';

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
  bgColor?: string;
  /**
   * GridItem의 배경 색상입니다.
   */
  children?: ReactNode;
}

const GridItem = ({
  area,
  row,
  col,
  rowStart = 'auto',
  rowEnd = 'auto',
  colStart = 'auto',
  colEnd = 'auto',
  width,
  height,
  bgColor,
  children,
  ...props
}: GridItemProps) => {
  const itemStyles = {
    gridArea: area || 'auto',
    gridColumn: `${col && col !== 'auto' ? `span ${col} / span ${col}` : ''} ${
      colStart && colEnd ? `${colStart} / ${colEnd}` : ''
    }`,
    gridRow: `${row && row !== 'auto' ? `span ${row} / span ${row}` : ''} ${
      rowStart && rowEnd ? `${rowStart} / ${rowEnd}` : ''
    }`,
    width: width,
    height: height,
    backgroundColor: bgColor,
  };

  return (
    <div style={itemStyles} {...props}>
      {children}
    </div>
  );
};

export default GridItem;
