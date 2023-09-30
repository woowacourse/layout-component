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
  rows: number | 'auto-fill' | 'auto-fit';
  columns: number | 'auto-fill' | 'auto-fit';
  gap?: CSSProperties['gap'];
};

declare type MasonryContextProps = {
  /** 행 사이의 간격 */
  rowGap?: React.CSSProperties['rowGap'];
  /** 열 사이의 간격 */
  columnGap?: React.CSSProperties['columnGap'];
};

type BoardPolymorphTags = 'div' | 'main' | 'section' | 'article';

export interface MasonryPolymorphProp extends ElementPolymorphProp<BoardPolymorphTags> {
  /** Masonry에 적용할 semantic tag */
  as?: BoardPolymorphTags;
}

export declare type MasonryProps = MasonryContextProps & {
  /** Masonry.Item의 너비 */
  itemSize?: React.CSSProperties['width'];
  /** true일 경우 Masonry의 너비에 따라 Item의 너비가 유동적으로 변함 */
  fluidResize?: boolean;
};

export declare type ItemProps = {
  /** 각 Item의 rowGap을 개별적으로 설정 */
  rowGap?: React.CSSProperties['rowGap'];
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

declare const Board: (
  props: React.PropsWithChildren<MasonryPolymorphProp & MasonryProps>
) => JSX.Element;
declare const Item: (props: React.PropsWithChildren<ItemProps>) => JSX.Element;
declare const Masonry: typeof Board & { Item: typeof Item };

export { Container, Flex, Grid, Masonry };
