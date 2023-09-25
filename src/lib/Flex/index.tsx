import { CSSProperties, ElementType, ReactNode, forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef } from '../types/common';
import * as S from './style';

export interface _FlexProps {
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  direction?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  gap?: string;
}

export type FlexProps<T extends ElementType> = PolymorphicComponentProps<
  T,
  _FlexProps
>;

type FlexComponent = <T extends ElementType>(
  props: FlexProps<T>
) => ReactNode | null;

const Flex: FlexComponent = forwardRef(function Flex<
  T extends ElementType = 'div'
>({ css, as, children, ...rest }: FlexProps<T>, ref: PolymorphicRef<T>) {
  return (
    <>
      <S.Component as={as} ref={ref} style={css} {...rest}>
        {children}
      </S.Component>
    </>
  );
});

export default Flex;
