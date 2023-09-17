declare type PositionalAlignment = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
declare type AlignItemsPositionalAlignment = PositionalAlignment | 'self-start' | 'self-end';
declare type JustifyContentPositionalAlignment = PositionalAlignment | 'left' | 'right';

declare interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  minWidth?: string;
  maxWidth?: string;
}

declare interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?:
    | JustifyContentPositionalAlignment
    | `safe ${JustifyContentPositionalAlignment}`
    | `unsafe ${JustifyContentPositionalAlignment}`
    | 'normal'
    | 'space-between'
    | 'space-evenly'
    | 'space-around'
    | 'stretch';
  align?:
    | AlignItemsPositionalAlignment
    | `first ${AlignItemsPositionalAlignment}`
    | `last ${AlignItemsPositionalAlignment}`
    | `safe ${AlignItemsPositionalAlignment}`
    | `unsafe ${AlignItemsPositionalAlignment}`
    | 'normal'
    | 'stretch'
    | 'baseline';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  gap?: string;
  inline?: boolean;
}

declare interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  rows: number;
  columns: number;
  gap?: string;
}

declare const LayoutComponent: {
  Container: (props: React.PropsWithChildren<ContainerProps>) => JSX.Element;
  Flex: (props: React.PropsWithChildren<FlexProps>) => JSX.Element;
  Grid: (props: React.PropsWithChildren<GridProps>) => JSX.Element;
};

export default LayoutComponent;
