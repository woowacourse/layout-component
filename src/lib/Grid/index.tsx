import { ElementType, ReactNode, forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef } from '../types/common';
import * as S from './style';

export interface _GridProps {
  rows?: string | number;
  columns?: string | number;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
}

export type GridProps<T extends ElementType> = PolymorphicComponentProps<
  T,
  _GridProps
>;

type GridComponent = <T extends ElementType>(
  props: GridProps<T>
) => ReactNode | null;

const Grid: GridComponent = forwardRef(function Grid<
  T extends ElementType = 'div'
>({ css, as, children, ...rest }: GridProps<T>, ref: PolymorphicRef<T>) {
  return (
    <S.Component as={as} ref={ref} style={css} {...rest}>
      {children}
    </S.Component>
  );
});

export default Grid;
