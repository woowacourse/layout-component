import {
  CSSProperties,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

interface Common<T extends ElementType> extends PropsWithChildren {
  as?: T;
  css?: CSSProperties;
}

export type CommonProps<T extends ElementType> = Common<T> &
  ComponentPropsWithoutRef<T>;

export type PolymorphicRef<T extends ElementType> =
  ComponentPropsWithRef<T>['ref'];

export type PolymorphicComponentProps<
  T extends ElementType,
  Props
> = Common<T> &
  ComponentPropsWithoutRef<T> &
  Props & {
    ref?: PolymorphicRef<T>;
  };
