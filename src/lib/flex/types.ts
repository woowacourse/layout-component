import { ReactNode } from 'react';

export type FlexProps = {
  direction?:
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse'
    | 'inherit'
    | 'initial'
    | 'unset';
  justify?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'stretch' | 'center' | 'start' | 'end';
  gap?: number | string;
  children: ReactNode;
};
