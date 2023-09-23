import type { CSSProperties } from 'react';

declare type ElementPolymorphProp<Element extends React.ElementType> = {
  as?: Element;
};

declare type PolymorphicElementPropsWithoutRef<
  Element extends React.ElementType,
  Props = Record<string, never>,
> = Omit<Props, keyof ElementPolymorphProp<Element>> &
  ElementPolymorphProp<Element> &
  Omit<React.ComponentPropsWithoutRef<Element>, keyof Props>;

declare type PolymorphicElementPropsWithRef<
  Element extends React.ElementType,
  Props = Record<string, never>,
> = PolymorphicElementPropsWithoutRef<Element, Props> & {
  ref?: React.ComponentPropsWithRef<Element>['ref'];
};

export declare type ContainerProps = {
  minWidth?: CSSProperties['minWidth'];
  maxWidth?: CSSProperties['maxWidth'];
};

export declare type FlexProps = {
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  wrap?: CSSProperties['flexWrap'];
  gap?: CSSProperties['gap'];
  inline?: boolean;
};

export declare type GridProps = {
  rows: number;
  columns: number;
  gap?: CSSProperties['gap'];
};

declare const Container: <E extends React.ElementType = 'div'>(
  props: PolymorphicElementPropsWithRef<E, ContainerProps>
) => JSX.Element;
declare const Flex: <E extends React.ElementType = 'div'>(
  props: PolymorphicElementPropsWithRef<E, FlexProps>
) => JSX.Element;
declare const Grid: <E extends React.ElementType = 'div'>(
  props: PolymorphicElementPropsWithRef<E, GridProps>
) => JSX.Element;

export { Container, Flex, Grid };
