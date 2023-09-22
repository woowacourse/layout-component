import { ReactNode } from 'react';

export type ContainerProps = {
  minWidth?: number | string;
  maxWidth?: number | string;
  children: ReactNode;
};
