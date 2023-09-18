import {
  CSSProperties,
  Children,
  PropsWithChildren,
  ReactHTML,
  cloneElement,
  createElement,
  isValidElement,
} from 'react';
import { FlexProps } from './Flex.type';

const Flex = <T extends keyof ReactHTML>(
  props: PropsWithChildren<FlexProps<T>>
) => {
  const {
    children,
    tag = 'div',
    direction = 'row',
    justify,
    align,
    gap,
    style,
    ...restProps
  } = props;

  const gapStyleByDirection = getGapStyleByDirection({ direction, gap });

  const resolvedProps: Pick<FlexProps<T>, 'style'> = {
    style: {
      display: 'flex',
      flexDirection: direction,
      justifyContent: justify,
      alignItems: align,
      ...style,
    },
    ...restProps,
  };

  const gappedChildren = Children.map(children, (child, i) => {
    if (!isValidElement<Record<'style', typeof gapStyleByDirection>>(child))
      throw new Error('Not valid children');

    if (i === 0) return child;

    return cloneElement(child, {
      style: { ...gapStyleByDirection, ...child.props.style },
    });
  });

  return createElement(tag, resolvedProps, gappedChildren);
};

export default Flex;

const getGapStyleByDirection = <T extends keyof ReactHTML>({
  direction,
  gap,
}: Pick<FlexProps<T>, 'direction' | 'gap'>): CSSProperties => {
  const gapUnit = typeof gap === 'number' ? `${gap}px` : gap;

  const isReversed = direction?.includes('reverse');

  const isColumn = direction?.includes('column');

  const marginDirection = {
    row: isReversed ? 'marginRight' : 'marginLeft',
    column: isReversed ? 'marginBottom' : 'marginTop',
  };

  return {
    [marginDirection[isColumn ? 'column' : 'row']]: gapUnit,
  };
};
