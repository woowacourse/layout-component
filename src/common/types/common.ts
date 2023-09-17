import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export interface CommonProps extends HTMLAttributes<HTMLElement> {
  tag?: ElementType;
  children?: ReactNode;
}
