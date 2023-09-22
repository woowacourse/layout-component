import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';
import { CSSProperties } from 'styled-components';

interface ComponentProps<T extends ElementType> extends PropsWithChildren {
  as?: T;
  css?: CSSProperties;
}

export type CommonProps<T extends ElementType> = ComponentProps<T> &
  ComponentPropsWithoutRef<T>;
