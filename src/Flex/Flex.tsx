import {
  CSSProperties,
  Children,
  HTMLProps,
  PropsWithChildren,
  ReactHTML,
  cloneElement,
  createElement,
  isValidElement,
} from 'react';

interface FlexProps<T extends keyof ReactHTML> extends HTMLProps<T> {
  /** 태그(tag) 프로퍼티는 ReactHTML의 키(key) 중 하나를 가질 수 있습니다. 이 프로퍼티는 Flex 컴포넌트가 렌더링될 때 사용되는 HTML 요소의 태그를 지정하는데 사용됩니다. */
  tag?: T;
  /** direction 프로퍼티는 Flex 컴포넌트의 주축 방향을 지정합니다. */
  direction?: CSSProperties['flexDirection'];
  /** justify 프로퍼티는 Flex 컴포넌트의 자식 요소들을 주축을 따라 정렬하는 방법을 지정합니다. */
  justify?: CSSProperties['justifyContent'];
  /** align 프로퍼티는 Flex 컴포넌트의 자식 요소들을 교차 축을 따라 정렬하는 방법을 지정합니다. */
  align?: CSSProperties['alignItems'];
  /** gap 프로퍼티는 Flex 컴포넌트 내의 자식 요소들 사이의 간격을 설정합니다. */
  gap?: string | number;
  /** style 프로퍼티는 Flex 컴포넌트에 적용할 CSS 스타일을 지정합니다. */
  style?: CSSProperties;
}

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
