import { ElementType, ReactNode, forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef } from '../types/common';
import * as S from './style';

interface ContainerProps {
  /**
   * This prop is used when you want to specify the minimum width
   * ${minWidth}px
   */
  minWidth?: string;
  /**
   * This prop is used when you want to specify the maximum width
   * ${manWidth}px
   */
  maxWidth?: string;
}

type ContainerComponent = <T extends ElementType>(
  props: PolymorphicComponentProps<T, ContainerProps>
) => ReactNode | null;

/**
 * This is the container layout
 */
const Container: ContainerComponent = forwardRef(function Container<
  T extends ElementType = 'div'
>(
  { css, as, children, ...rest }: PolymorphicComponentProps<T, ContainerProps>,
  ref: PolymorphicRef<T>
) {
  return (
    <S.Component ref={ref} as={as} style={{ ...css }} {...rest}>
      {children}
    </S.Component>
  );
});

export default Container;
