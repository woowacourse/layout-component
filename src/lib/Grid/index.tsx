import { ElementType, ReactNode, forwardRef } from 'react';
import {
  CommonProps,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '../types/common';
import * as S from './style';

export interface GridProps {
  rows?: string | number;
  columns?: string | number;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
}

type GridComponent = <T extends ElementType>(
  props: PolymorphicComponentProps<T, GridProps>
) => ReactNode | null;

const Grid: GridComponent = forwardRef(function Grid<
  T extends ElementType = 'div'
>(
  { css, as, children, ...rest }: GridProps & CommonProps<T>,
  ref: PolymorphicRef<T>
) {
  return (
    <S.Component as={as} ref={ref} style={css} {...rest}>
      {children}
    </S.Component>
  );
});

export default Grid;
