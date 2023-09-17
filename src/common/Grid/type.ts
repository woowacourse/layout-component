import { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  row: number;
  column: number;
  gap?: number;
}

export interface GridLayoutProps {
  $row: number;
  $column: number;
  $gap?: number;
}
