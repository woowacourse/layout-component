import { PropsWithChildren, Children } from 'react';

type GridProps<C extends React.ElementType> = {
  as?: C;
  rows?: React.CSSProperties['gridTemplateRows'];
  columns?: React.CSSProperties['gridTemplateColumns'];
  area?: React.CSSProperties['gridTemplateAreas'];
  rowGap?: React.CSSProperties['rowGap'];
  columnGap?: React.CSSProperties['columnGap'];
  gap?: React.CSSProperties['gap'];
} & React.ComponentPropsWithoutRef<C>;

const Grid = <C extends React.ElementType = 'div'>({
  as,
  rows,
  columns,
  area,
  rowGap,
  columnGap,
  gap,
  children,
  ...attributes
}: PropsWithChildren<GridProps<C>>) => {
  const gridTemplateRows = typeof rows === 'number' ? `repeat(${rows}, minmax(auto, 1fr))` : rows;
  const gridTemplateColumns = typeof columns === 'number' ? `repeat(${columns}, minmax(auto, 1fr))` : columns;

  const styles = {
    display: 'grid',
    gridTemplateRows,
    gridTemplateColumns,
    gridTemplateArea: area,
    rowGap,
    columnGap,
    gap,
  };

  const Component = as || 'div';

  return (
    <Component style={styles} {...attributes}>
      {children}
    </Component>
  );
};

export default Grid;
