import { ElementType, PropsWithChildren, createElement } from 'react';
import { GridProps } from './Grid.type';

const Grid = <T extends ElementType>(
  props: PropsWithChildren<GridProps<T>>
) => {
  const {
    children,
    tag = 'div',
    row,
    column,
    rowGap,
    columnGap,
    style,
    ...restProps
  } = props;

  const resolvedProps: Pick<GridProps<ElementType>, 'style'> = {
    style: {
      display: 'grid',
      gridTemplateRows: row,
      gridTemplateColumns: column,
      rowGap,
      columnGap,
      ...style,
    },
    ...restProps,
  };

  return createElement(tag, resolvedProps, children);
};

export default Grid;
