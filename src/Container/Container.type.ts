import { CSSProperties, ElementType, HTMLProps, ReactHTML } from 'react';

interface ContainerProps<T extends keyof ReactHTML> extends HTMLProps<T> {
  tag?: T;
  maxWidth?: CSSProperties['maxWidth'];
  minWidth?: CSSProperties['minWidth'];
  style?: CSSProperties;
}

export type { ContainerProps };
