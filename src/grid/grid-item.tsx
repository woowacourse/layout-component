import type { CSSProperties, ComponentPropsWithoutRef } from 'react';
import { compact } from '../utils';

type GridItemStyleProps = Pick<
  CSSProperties,
  'width' | 'height' | 'backgroundColor'
> & {
  area?: CSSProperties['gridArea'];
  row?: number | 'auto';
  rowStart?: number | 'auto';
  rowEnd?: number | 'auto';
  col?: number | 'auto';
  colStart?: number | 'auto';
  colEnd?: number | 'auto';
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
  const gridColumn =
    typeof col === 'number' ? `span ${col} / span ${col}` : col;
  const gridRow = typeof row === 'number' ? `span ${row} / span ${row}` : row;

  const style = area
    ? compact({ gridArea: area, backgroundColor })
    : compact({
        gridRow,
        gridRowStart: rowStart,
        gridRowEnd: rowEnd,
        gridColumn,
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
        width,
        height,
        backgroundColor,
      });

  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};

export default GridItem;
