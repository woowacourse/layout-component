import { ElementType, ReactElement, createElement, forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef } from '../types/common';
import * as S from './style';
import MasonryLayoutItem from './MasonryLayoutItem';

export interface _MasonryLayoutProps {
  itemSize: number;
  smallItemSize?: number;
  mediumItemSize?: number;
  largeItemSize?: number;
  xLargeItemSize?: number;
  doubleXLargeItemSize?: number;
  gap?: string;
  smallGap?: string;
  mediumGap?: string;
  largeGap?: string;
  xLargeGap?: string;
  doubleXLargeGap?: string;
  rowGap?: string;
  smallRowGap?: string;
  mediumRowGap?: string;
  largeRowGap?: string;
  xLargeRowGap?: string;
  doubleXLargeRowGap?: string;
  columnGap?: string;
  smallColumnGap?: string;
  mediumColumnGap?: string;
  largeColumnGap?: string;
  xLargeColumnGap?: string;
  doubleXLargeColumnGap?: string;
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
  const isChildrenArray = Array.isArray(children);

  const childArray: ReactElement[] = isChildrenArray ? children : [children];

  if (!isChildrenArray) {
    return (
      <S.Component as={as} ref={ref} style={css} {...rest}>
        {children}
      </S.Component>
    );
  }

  return (
    <S.Component as={as} ref={ref} style={css} {...rest}>
      {childArray.map((child) => (
        <MasonryLayoutItem {...rest}>
          {createElement(child.type, child.props)}
        </MasonryLayoutItem>
      ))}
    </S.Component>
  );
});

export default MasonryLayout;
