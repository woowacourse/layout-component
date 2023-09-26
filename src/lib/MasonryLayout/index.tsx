import { ElementType, ReactElement, forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef } from '../types/common';
import * as S from './style';

export interface _MasonryLayoutProps {
  rows?: number;
  columns?: number;
  rowSize?: string;
  columnSize?: string;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
}

export type MasonryLayoutProps<T extends ElementType> =
  PolymorphicComponentProps<T, _MasonryLayoutProps>;

type MasonryLayoutComponent = <T extends ElementType>(
  props: MasonryLayoutProps<T>
) => ReactElement | null;

const MasonryLayout: MasonryLayoutComponent = forwardRef(function MasonryLayout<
  T extends ElementType = 'div'
>(
  { css, as, children, ...rest }: MasonryLayoutProps<T>,
  ref: PolymorphicRef<T>
) {
  return (
    <S.Component as={as} ref={ref} style={css} {...rest}>
      {children}
    </S.Component>
  );
});

export default MasonryLayout;
