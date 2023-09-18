import { CSSProperties, HTMLProps, PropsWithChildren, ReactHTML } from 'react';
import Flex from '../Flex/Flex';

interface ContainerProps<T extends keyof ReactHTML> extends HTMLProps<T> {
  /** 태그(tag) 프로퍼티는 ReactHTML의 키(key) 중 하나를 가질 수 있습니다. */
  tag?: T;
  /** maxWidth 프로퍼티는 Flex 컴포넌트 내용물의 최대 너비를 제한합니다. */
  maxWidth?: CSSProperties['maxWidth'];
  /** minWidth 프로퍼티는 Flex 컴포넌트 내용물의 최소 너비를 지정합니다. */
  minWidth?: CSSProperties['minWidth'];
  /** style 프로퍼티는 Flex 컴포넌트에 적용할 CSS 스타일을 지정합니다. */
  style?: CSSProperties;
}

const Container = <T extends keyof ReactHTML>(
  props: PropsWithChildren<ContainerProps<T>>
) => {
  const {
    children,
    tag = 'div',
    maxWidth,
    minWidth,
    style,
    ...restProps
  } = props;

  const resolvedStyle: CSSProperties = {
    maxWidth,
    minWidth,
    ...style,
  };

  return (
    <Flex tag={tag} justify="center" style={resolvedStyle} {...restProps}>
      {children}
    </Flex>
  );
};

export default Container;
