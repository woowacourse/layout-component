import {
  CSSProperties,
  Children,
  ElementType,
  cloneElement,
  createElement,
  isValidElement,
} from 'react';
import { Props } from '../types/props';

type FlexProps = {
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
};

const Flex = <T extends ElementType = 'div'>(props: Props<T, FlexProps>) => {
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

  const resolvedStyle: FlexProps['style'] = {
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    ...style,
  };

  const gappedChildren = Children.map(children, (child, i) => {
    if (!isValidElement<Record<'style', typeof gapStyleByDirection>>(child))
      throw new Error('Not valid children');

    if (i === 0) return child;

    return cloneElement(child, {
      style: { ...gapStyleByDirection, ...child.props.style },
    });
  });

  return createElement(
    tag,
    { style: resolvedStyle, ...restProps },
    gappedChildren
  );
};

export default Flex;

const getGapStyleByDirection = ({
  direction,
  gap,
}: Pick<FlexProps, 'direction' | 'gap'>): CSSProperties => {
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
