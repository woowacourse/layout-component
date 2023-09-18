import { CSSProperties, HTMLProps, ReactHTML } from 'react';

interface FlexProps<T extends keyof ReactHTML> extends HTMLProps<T> {
  tag?: T;
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  gap?: string | number;
  style?: CSSProperties;
}

export type { FlexProps };
