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

export type { Props };
