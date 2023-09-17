import { CSSProperties, ElementType, HTMLProps } from 'react';

interface FlexProps<T extends ElementType> extends HTMLProps<T> {
  tag?: T;
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  gap?: string | number;
  style?: CSSProperties;
}

export type { FlexProps };
