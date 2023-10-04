import { ElementType, ReactElement, createElement, forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef } from '../types/common';
import * as S from './style';
import MasonryLayoutItem from './MasonryLayoutItem';

export interface _MasonryLayoutProps {
  /**
   * 아이템의 최소 너비를 숫자로 입력할 수 있습니다. 단위는 px입니다.
   */
  itemSize: number;
  /**
   * @media (min-width: 640px) 아이템의 최소 너비를 숫자로 입력할 수 있습니다. 단위는 px입니다.
   */
  smallItemSize?: number;
  /**
   * @media (min-width: 768px) 아이템의 최소 너비를 숫자로 입력할 수 있습니다. 단위는 px입니다.
   */
  mediumItemSize?: number;
  /**
   * @media (min-width: 1024px) 아이템의 최소 너비를 숫자로 입력할 수 있습니다. 단위는 px입니다.
   */
  largeItemSize?: number;
  /**
   * @media (min-width: 1280px) 아이템의 최소 너비를 숫자로 입력할 수 있습니다. 단위는 px입니다.
   */
  xLargeItemSize?: number;
  /**
   * @media (min-width: 1536px) 아이템의 최소 너비를 숫자로 입력할 수 있습니다. 단위는 px입니다.
   */
  doubleXLargeItemSize?: number;
  /**
   * 아이템들의 row, column의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
  gap?: string;
  /**
   * @media (min-width: 640px) 아이템들의 row, column의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
  smallGap?: string;
  /**
   * @media (min-width: 768px) 아이템들의 row, column의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
  mediumGap?: string;
  /**
   * @media (min-width: 1024px) 아이템들의 row, column의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
  largeGap?: string;
  /**
   * @media (min-width: 1280px) 아이템들의 row, column의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
  xLargeGap?: string;
  /**
   * @media (min-width: 1536px) 아이템들의 row, column의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
  doubleXLargeGap?: string;
  /**
   * row 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
  rowGap?: string;
  /**
   * @media (min-width: 640px) row 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
  smallRowGap?: string;
  /**
   * @media (min-width: 768px) row 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
  mediumRowGap?: string;
  /**
   * @media (min-width: 1024px) row 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
  largeRowGap?: string;
  /**
   * @media (min-width: 1280px) row 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
  xLargeRowGap?: string;
  /**
   * @media (min-width: 1536px) row 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
  doubleXLargeRowGap?: string;
  /**
   * column 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
  columnGap?: string;
  /**
   * @media (min-width: 640px) column 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
  smallColumnGap?: string;
  /**
   * @media (min-width: 768px) column 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
  mediumColumnGap?: string;
  /**
   * @media (min-width: 1024px) column 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
  largeColumnGap?: string;
  /**
   * @media (min-width: 1280px) column 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
  xLargeColumnGap?: string;
  /**
   * @media (min-width: 1536px) column 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%
   */
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
      {childArray.map(child => (
        <MasonryLayoutItem {...rest}>
          {createElement(child.type, child.props)}
        </MasonryLayoutItem>
      ))}
    </S.Component>
  );
});

export default MasonryLayout;
