import { CSSProperties, ElementType, ReactElement, forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef } from '../types/common';
import * as S from './style';

export interface _FlexProps {
  /**
   * justify-content 옵션입니다.
   */
  justifyContent?: CSSProperties['justifyContent'];
  /**
   * align-items 옵션입니다.
   */
  alignItems?: CSSProperties['alignItems'];
  /**
   * flex의 방향을 조정할 수 있습니다. flex-direction 옵션입니다.
   */
  direction?: CSSProperties['flexDirection'];
  /**
   * flex-wrap 옵션입니다.
   */
  flexWrap?: CSSProperties['flexWrap'];
  /**
   * Flex 안의 자식들의 간격을 조정할 수 있습니다. 50%, 300px와 같이 문자열로 입력하여 사용할 수 있습니다.
   */
  gap?: string;
}

export type FlexProps<T extends ElementType> = PolymorphicComponentProps<
  T,
  _FlexProps
>;

type FlexComponent = <T extends ElementType>(
  props: FlexProps<T>
) => ReactElement | null;

const Flex: FlexComponent = forwardRef(function Flex<
  T extends ElementType = 'div'
>({ css, as, children, ...rest }: FlexProps<T>, ref: PolymorphicRef<T>) {
  return (
    <S.Component as={as} ref={ref} style={css} {...rest}>
      {children}
    </S.Component>
  );
});

export default Flex;
