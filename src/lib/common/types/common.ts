import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export interface CommonProps extends ComponentPropsWithoutRef<ElementType> {
  tag?: ElementType;
  children?: ReactNode;
}
