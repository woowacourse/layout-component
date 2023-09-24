import { ElementType, ReactNode, forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef } from '../types/common';
import * as S from './style';

export interface ContainerProps {
  minWidth?: string;
  maxWidth?: string;
}

type ContainerComponent = <T extends ElementType>(
  props: PolymorphicComponentProps<T, ContainerProps>
) => ReactNode | null;

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
