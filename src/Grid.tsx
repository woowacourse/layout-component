import { ElementType, CSSProperties, isValidElement, Children } from 'react';
import { Props } from './@type/props.type';

interface GridProps {
  gap?: CSSProperties['gap'];
  placeItems?: CSSProperties['placeItems'];
}

interface GridItemProps {
  xs?: 1 | 2 | 3 | 4 | 6 | 8 | 12;
}

const GridItem = <T extends ElementType = 'div'>({
  as,
  children,
  style,
  xs,
}: Props<T, GridItemProps>) => {
  const Element = as || 'div';

  const styledElement: CSSProperties = {
    ...style,
    gridColumn: `auto / span ${xs || 4}`,
  };

  return <Element style={{ ...styledElement }}>{children}</Element>;
};

const GridLayout = <T extends ElementType = 'div'>({
  as,
  gap,
  placeItems,
  children,
  style,
  rest,
}: Props<T, GridProps>) => {
  const Element = as || 'div';

  const styledElement: CSSProperties = {
    gridTemplateColumns: `repeat(12, minmax(0, 1fr))`,
    ...style,
    display: 'grid',
    gap: gap || '4px',
    placeItems: placeItems || 'center',
  };

  const styledChildren = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === GridItem) {
      return child;
    }

    throw new Error('Gird 자식 요소에는 반드시 GridItem이 들어와야 합니다!!');
  });

  return (
    <Element style={{ ...styledElement }} {...rest}>
      {styledChildren}
    </Element>
  );
};

const Grid = Object.assign(GridLayout, {
  Item: GridItem,
});

export default Grid;
