import { CSSProperties, ElementType, createElement } from 'react';
import Flex from '../Flex/Flex';
import { Props } from '../types/props';

type ContainerProps = {
  /** maxWidth 프로퍼티는 Flex 컴포넌트 내용물의 최대 너비를 제한합니다. */
  maxWidth?: CSSProperties['maxWidth'];
  /** minWidth 프로퍼티는 Flex 컴포넌트 내용물의 최소 너비를 지정합니다. */
  minWidth?: CSSProperties['minWidth'];
  /** style 프로퍼티는 Flex 컴포넌트에 적용할 CSS 스타일을 지정합니다. */
  style?: CSSProperties;
};

const Container = <T extends ElementType = 'div'>(
  props: Props<T, ContainerProps>
) => {
  const {
    children,
    tag = 'div',
    maxWidth,
    minWidth,
    style,
    ...restProps
  } = props;

  const resolvedStyle: ContainerProps['style'] = {
    maxWidth,
    minWidth,
    ...style,
  };

  return createElement(
    Flex,
    { tag, justify: 'center', style: resolvedStyle, ...restProps },
    children
  );
};

export default Container;
