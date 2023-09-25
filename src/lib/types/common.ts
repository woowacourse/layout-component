import {
  CSSProperties,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';
import { CommonStyleProps } from '../style/common';

interface Common<T extends ElementType>
  extends CommonStyleProps,
    PropsWithChildren {
  as?: T;
  css?: CSSProperties;
}

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
