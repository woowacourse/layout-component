import type { CSSProperties, ComponentPropsWithoutRef } from 'react';

type GridItemStyleProps = Pick<
  CSSProperties,
  'width' | 'height' | 'backgroundColor'
> & {
  area?: CSSProperties['gridArea'];
  row?: CSSProperties['gridRow'];
  rowStart?: CSSProperties['gridRowStart'];
  rowEnd?: CSSProperties['gridRowEnd'];
  col?: CSSProperties['gridColumn'];
  colStart?: CSSProperties['gridColumnStart'];
  colEnd?: CSSProperties['gridColumnEnd'];
};

type GridItemProps = ComponentPropsWithoutRef<'div'> & GridItemStyleProps;

const GridItem = ({
  area,
  row,
  rowStart,
  rowEnd,
  col,
  colStart,
  colEnd,
  width,
  height,
  backgroundColor,
  children,
  ...props
}: GridItemProps) => {
  const gridColumn = `${col === 'auto' ? 'auto' : `span ${col}`}`;
  const gridRow = `${row === 'auto' ? 'auto' : `span ${row}`}`;

  const style = {
    gridArea: area,
    gridRow,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd,
    gridColumn,
    gridColumnStart: colStart,
    gridColumnEnd: colEnd,
    width,
    height,
    backgroundColor,
  };

  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};

export default GridItem;
