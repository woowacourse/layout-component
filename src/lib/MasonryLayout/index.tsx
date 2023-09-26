import { ElementType, ReactElement, createElement, forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef } from '../types/common';
import * as S from './style';
import MasonryLayoutItem from './MasonryLayoutItem';

export interface _MasonryLayoutProps {
  itemSize: string;
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
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <S.Component as={as} ref={ref} style={css} {...rest}>
      {childArray.map((child) => (
        <MasonryLayoutItem rowGap={rest.rowGap} gap={rest.gap}>
          {createElement(child.type, {
            ...{
              ...child.props,
            },
          })}
        </MasonryLayoutItem>
      ))}
    </S.Component>
  );
});

export default MasonryLayout;
