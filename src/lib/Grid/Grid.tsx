import { PropsWithChildren } from 'react';

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
  ...atributtes
}: PropsWithChildren<GridProps<C>>) => {
  const styles = {
    display: 'grid',
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateArea: area,
    rowGap,
    columnGap,
    gap,
  };

  const Component = as || 'div';

  return (
    <Component style={styles} {...atributtes}>
      {children}
    </Component>
  );
};

export default Grid;
