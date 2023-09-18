import type { CSSProperties } from 'react';

export declare interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  minWidth?: CSSProperties['minWidth'];
  maxWidth?: CSSProperties['maxWidth'];
}

export declare interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  wrap?: CSSProperties['flexWrap'];
  gap?: CSSProperties['gap'];
  inline?: boolean;
}

export declare interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  rows: number;
  columns: number;
  gap?: CSSProperties['gap'];
}

declare const Container: (props: React.PropsWithChildren<ContainerProps>) => JSX.Element;
declare const Flex: (props: React.PropsWithChildren<FlexProps>) => JSX.Element;
declare const Grid: (props: React.PropsWithChildren<GridProps>) => JSX.Element;

export { Container, Flex, Grid };
