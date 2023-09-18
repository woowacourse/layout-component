import { PropsWithChildren, ReactHTML, createElement } from 'react';
import { GridProps } from './Grid.type';

const Grid = <T extends keyof ReactHTML>(
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

  const resolvedProps: Pick<GridProps<T>, 'style'> = {
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
