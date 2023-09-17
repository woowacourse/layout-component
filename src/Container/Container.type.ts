import { CSSProperties, ElementType, HTMLProps } from 'react';

interface ContainerProps<T extends ElementType> extends HTMLProps<T> {
  tag?: T;
  maxWidth?: CSSProperties['maxWidth'];
  minWidth?: CSSProperties['minWidth'];
  style?: CSSProperties;
}

export type { ContainerProps };
