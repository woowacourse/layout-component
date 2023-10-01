import { PropsWithChildren } from 'react';

type GridProps<C extends React.ElementType> = {
  as?: C;
  rows?: React.CSSProperties['gridTemplateRows'];
  columns?: React.CSSProperties['gridTemplateColumns'];
  areas?: React.CSSProperties['gridTemplateAreas'];
  rowGap?: React.CSSProperties['rowGap'];
  columnGap?: React.CSSProperties['columnGap'];
  gap?: React.CSSProperties['gap'];
  css?: React.CSSProperties;
} & React.ComponentPropsWithoutRef<C>;

const Grid = <C extends React.ElementType = 'div'>({
  as,
  rows,
  columns,
  areas,
  rowGap,
  columnGap,
  gap,
  css,
  children,
  ...attributes
}: PropsWithChildren<GridProps<C>>) => {
  const gridTemplateRows = typeof rows === 'number' ? `repeat(${rows}, minmax(auto, 1fr))` : rows;
  const gridTemplateColumns = typeof columns === 'number' ? `repeat(${columns}, minmax(auto, 1fr))` : columns;

  const styles = {
    display: 'grid',
    gridTemplateRows,
    gridTemplateColumns,
    gridTemplateAreas: areas,
    rowGap,
    columnGap,
    gap,
    ...css,
  };

  const Component = as || 'div';

  return (
    <Component style={styles} {...attributes}>
      {children}
    </Component>
  );
};

type ItemProps<C extends React.ElementType> = {
  as?: C;
  area?: React.CSSProperties['gridArea'];
  css?: React.CSSProperties;
} & React.ComponentPropsWithoutRef<C>;

const Item = <C extends React.ElementType = 'div'>({ as, area, css, children }: PropsWithChildren<ItemProps<C>>) => {
  const Component = as || 'div';

  const styles = {
    gridArea: area,
    ...css,
  };

  return <Component style={styles}>{children}</Component>;
};

Grid.Item = Item;

export default Grid;
