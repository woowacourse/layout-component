import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export interface CommonProps extends HTMLAttributes<HTMLDivElement> {
  tag?: ElementType;
  children?: ReactNode;
}
