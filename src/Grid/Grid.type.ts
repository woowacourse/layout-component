import { CSSProperties, HTMLProps, ReactHTML } from 'react';

interface GridProps<T extends keyof ReactHTML> extends HTMLProps<T> {
  tag?: T;
  row?: CSSProperties['gridTemplateRows'];
  column?: CSSProperties['gridTemplateColumns'];
  rowGap?: CSSProperties['rowGap'];
  columnGap?: CSSProperties['columnGap'];
  style?: CSSProperties;
}

export type { GridProps };
