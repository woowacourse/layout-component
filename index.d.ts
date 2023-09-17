declare type OverflowPosition = 'unsafe' | 'safe';

declare type BaselinePosition =
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'baseline first'
  | 'baseline last';
declare type SelfPosition =
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end';
export declare type AlignItems =
  | 'normal'
  | 'stretch'
  | BaselinePosition
  | SelfPosition
  | `${OverflowPosition} ${SelfPosition}`;

declare type ContentDistribution = 'space-between' | 'space-evenly' | 'space-around' | 'stretch';
declare type ContentPosition = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
declare type Direction = 'left' | 'right';
export declare type JustifyContent =
  | 'normal'
  | ContentDistribution
  | Direction
  | ContentPosition
  | `${OverflowPosition} ${ContentPosition}`
  | `${OverflowPosition} ${Direction}`;

export declare interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  minWidth?: string;
  maxWidth?: string;
}

export declare interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?: JustifyContent;
  align?: AlignItems;
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  gap?: string;
  inline?: boolean;
}

export declare interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  rows: number;
  columns: number;
  gap?: string;
}

declare const Container: (props: React.PropsWithChildren<ContainerProps>) => JSX.Element;
declare const Flex: (props: React.PropsWithChildren<FlexProps>) => JSX.Element;
declare const Grid: (props: React.PropsWithChildren<GridProps>) => JSX.Element;

export { Container, Flex, Grid };
