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
