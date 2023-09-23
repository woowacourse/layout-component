import {
  CSSProperties,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

interface Common<T extends ElementType> extends PropsWithChildren {
  as?: T | ElementType;
  css?: CSSProperties;

  m?: string;
  mx?: string;
  my?: string;
  ml?: string;
  mr?: string;
  mb?: string;
  mt?: string;

  mxAuto?: boolean;
  myAuto?: boolean;

  p?: string;
  px?: string;
  py?: string;
  pl?: string;
  pr?: string;
  pb?: string;
  pt?: string;

  fontSize?: string;
  fontWeight?: CSSProperties['fontWeight'];
  textAlign?: CSSProperties['textAlign'] | string;

  border?: string;
  borderRadius?: string;

  color?: string;
  bgColor?: string;
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
