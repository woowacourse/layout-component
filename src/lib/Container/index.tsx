import { ElementType, ReactNode, forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef } from '../types/common';
import * as S from './style';

export interface _ContainerProps {
  minWidth?: string;
  maxWidth?: string;
}

export type ContainerProps<T extends ElementType> = PolymorphicComponentProps<
  T,
  _ContainerProps
>;

type ContainerComponent = <T extends ElementType>(
  props: ContainerProps<T>
) => ReactNode | null;

const Container: ContainerComponent = forwardRef(
  <T extends ElementType = 'div'>(
    { css, as, children, ...rest }: ContainerProps<T>,
    ref: PolymorphicRef<T>
  ) => {
    return (
      <>
        <S.Component ref={ref} as={as} style={{ ...css }} {...rest}>
          {children}
        </S.Component>
      </>
    );
  }
);

export default Container;
