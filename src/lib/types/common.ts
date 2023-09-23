import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

interface ComponentProps<T extends ElementType> extends PropsWithChildren {
  as?: T;
  css?: CSSProperties;
}

export type CommonProps<T extends ElementType> = ComponentProps<T> &
  ComponentPropsWithoutRef<T>;
