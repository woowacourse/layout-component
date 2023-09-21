import type { CSSProperties, ComponentPropsWithoutRef } from 'react';

import { compact } from '../utils';

type GridItemCSS = Omit<
  CSSProperties,
  | 'gridArea'
  | 'gridRow'
  | 'gridColumn'
  | 'gridRowStart'
  | 'gridRowEnd'
  | 'gridColumnStart'
  | 'gridColumnEnd'
>;
type GridItemStyleProps = {
  area?: CSSProperties['gridArea'];
  row?: number | 'auto';
  rowStart?: number | 'auto';
  rowEnd?: number | 'auto';
  col?: number | 'auto';
  colStart?: number | 'auto';
  colEnd?: number | 'auto';
  css?: GridItemCSS;
};

type GridItemProps = ComponentPropsWithoutRef<'div'> & GridItemStyleProps;

const convertSpan = (span?: number | 'auto') =>
  typeof span === 'number' ? `span ${span} / span ${span}` : span;

const GridItem = ({
  area,
  row,
  rowStart,
  rowEnd,
  col,
  colStart,
  colEnd,
  css = {},
  children,
  ...props
}: GridItemProps) => {
  const style = area
    ? compact({ gridArea: area, ...css })
    : compact({
        gridRow: convertSpan(row),
        gridRowStart: rowStart,
        gridRowEnd: rowEnd,
        gridColumn: convertSpan(col),
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
        ...css,
      });

  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};

export default GridItem;
