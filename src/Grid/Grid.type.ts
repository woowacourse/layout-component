import { CSSProperties, ElementType, HTMLProps } from 'react';

interface GridProps<T extends ElementType> extends HTMLProps<T> {
  tag?: T;
  row?: CSSProperties['gridTemplateRows'];
  column?: CSSProperties['gridTemplateColumns'];
  rowGap?: CSSProperties['rowGap'];
  columnGap?: CSSProperties['columnGap'];
  style?: CSSProperties;
}

export type { GridProps };
