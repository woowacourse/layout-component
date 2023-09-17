import { ReactNode } from 'react';

export type GridProps = {
  rows?: number | string;
  columns?: number | string;
  gap?: number | string;
  children: ReactNode;
};
