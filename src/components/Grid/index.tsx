import { CSSProperties } from 'react';
import { ContainerProps } from '../../types/component';
import { filterUndefinedProps } from '../../utils/css';

interface Props extends Omit<ContainerProps, 'display'> {
  display?: 'grid' | 'inline-grid' | 'none';
  grid?: CSSProperties['grid'];
  gridTemplate?: CSSProperties['gridTemplate'];
  rows?: CSSProperties['gridTemplateRows'];
  columns?: CSSProperties['gridTemplateColumns'];
  gridTemplateAreas?: CSSProperties['gridTemplateAreas'];
  gridAutoRows?: CSSProperties['gridAutoRows'];
  gridAutoColumns?: CSSProperties['gridAutoColumns'];
  gridAutoFlow?: CSSProperties['gridAutoFlow'];
  gap?: CSSProperties['gap'];
  rowGap?: CSSProperties['rowGap'];
  columnGap?: CSSProperties['columnGap'];
  placeItems?: CSSProperties['placeItems'];
  justifyItems?: CSSProperties['justifyItems'];
  alignItems?: CSSProperties['alignItems'];
  placeContent?: CSSProperties['placeContent'];
  justifyContent?: CSSProperties['justifyContent'];
  alignContent?: CSSProperties['alignContent'];
  gridColumnStart?: CSSProperties['gridColumnStart'];
  gridColumnEnd?: CSSProperties['gridColumnEnd'];
  gridRowStart?: CSSProperties['gridRowStart'];
  gridRowEnd?: CSSProperties['gridRowEnd'];
  gridColumn?: CSSProperties['gridColumn'];
  gridRow?: CSSProperties['gridRow'];
  gridArea?: CSSProperties['gridArea'];
  placeSelf?: CSSProperties['placeSelf'];
  justifySelf?: CSSProperties['justifySelf'];
  alignSelf?: CSSProperties['alignSelf'];
}

export default function Grid({
  display = 'grid',
  grid,
  gridTemplate,
  rows,
  columns,
  gridTemplateAreas,
  gridAutoRows,
  gridAutoColumns,
  gridAutoFlow,
  gap,
  rowGap,
  columnGap,
  placeItems,
  justifyItems,
  alignItems,
  placeContent,
  justifyContent,
  alignContent,
  gridColumnStart,
  gridColumnEnd,
  gridRowStart,
  gridRowEnd,
  gridColumn,
  gridRow,
  gridArea,
  placeSelf,
  justifySelf,
  alignSelf,
  position,
  top,
  right,
  bottom,
  left,
  width,
  height,
  minWidth,
  maxWidth,
  margin,
  padding,
  border,
  borderRadius,
  backgroundColor,
  color,
  overflow,
  cursor,
  opacity,
  zIndex,
  children,
  ...rest
}: Props) {
  const generateGridTemplate = (value: number | string | undefined) => {
    if (!value || typeof value === 'string') return;

    return `1fr `.repeat(value).trim();
  };

  return (
    <div
      style={filterUndefinedProps({
        display,
        grid,
        gridTemplate,
        gridTemplateRows: generateGridTemplate(rows),
        gridTemplateColumns: generateGridTemplate(columns),
        gridTemplateAreas,
        gridAutoRows,
        gridAutoColumns,
        gridAutoFlow,
        gap,
        rowGap,
        columnGap,
        placeItems,
        justifyItems,
        alignItems,
        placeContent,
        justifyContent,
        alignContent,
        gridColumnStart,
        gridColumnEnd,
        gridRowStart,
        gridRowEnd,
        gridColumn,
        gridRow,
        gridArea,
        placeSelf,
        justifySelf,
        alignSelf,
        position,
        top,
        right,
        bottom,
        left,
        width,
        height,
        minWidth,
        maxWidth,
        margin,
        padding,
        border,
        borderRadius,
        backgroundColor,
        color,
        overflow,
        cursor,
        opacity,
        zIndex,
      })}
      {...rest}
    >
      {children}
    </div>
  );
}
