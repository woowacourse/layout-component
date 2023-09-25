import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

type PropsWithTag<T extends ElementType, P> = {
  as?: T;
} & P &
  ComponentPropsWithoutRef<T>;

type Props<T extends ElementType, P = {}> = PropsWithChildren<
  PropsWithTag<T, P>
>;

type PropsWithOutTag<T extends ElementType, P = {}> = Omit<Props<T, P>, 'as'>;

export type { Props, PropsWithOutTag };
