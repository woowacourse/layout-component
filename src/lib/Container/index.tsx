import { ElementType } from 'react';
import { PolymorphicComponentProps } from '../types/common';
import * as S from './style';

export interface _ContainerProps {
  minWidth?: string;
  maxWidth?: string;
}

export type ContainerProps<T extends ElementType> = PolymorphicComponentProps<
  T,
  _ContainerProps
>;

export default function Container<T extends ElementType = 'div'>({
  css,
  as,
  children,
  ...rest
}: ContainerProps<T>) {
  return (
    <>
      <S.Component as={as} style={{ ...css }} {...rest}>
        {children}
      </S.Component>
    </>
  );
}
