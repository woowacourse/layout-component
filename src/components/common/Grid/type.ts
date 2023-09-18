import { PropsWithChildren } from "react";

export interface GridProps extends PropsWithChildren {
  row: number;
  column: number;
  gap?: number;
}

export interface GridLayoutProps {
  $row: number;
  $column: number;
  $gap?: number;
}
