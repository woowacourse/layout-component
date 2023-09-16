import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface GridItemProps extends ComponentPropsWithoutRef<'div'> {
  area?: string;
  row?: number | 'auto';
  col?: number | 'auto';
  rowStart?: number | 'auto';
  rowEnd?: number | 'auto';
  colStart?: number | 'auto';
  colEnd?: number | 'auto';
  width?: string;
  height?: string;
  bgColor?: string;
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
  bgColor,
  children,
}: GridItemProps) => {
  const itemStyles = {
    gridArea: area ?? area,
    gridColumn: col === 'auto' ? 'auto' : `span ${col} / span ${col}`,
    gridRow: row === 'auto' ? 'auto' : `span ${row} / span ${row}`,
    gridColumnStart: colStart,
    gridColumnEnd: colEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd,
    width: width,
    height: height,
    backgroundColor: bgColor,
  };

  return <div style={itemStyles}>{children}</div>;
};

export default GridItem;
