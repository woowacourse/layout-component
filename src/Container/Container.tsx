import { CSSProperties, ElementType, PropsWithChildren } from 'react';
import { ContainerProps } from './Container.type';
import Flex from '../Flex/Flex';

const Container = <T extends ElementType>(
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
