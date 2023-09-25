import { PropsWithChildren } from "react";
import { CSSProp } from "styled-components";

export interface ContainerProps extends PropsWithChildren {
  minWidth: number;
  maxWidth: number;
  css?: CSSProp;
}

export interface ContainerLayoutProps {
  $minWidth: number;
  $maxWidth: number;
  css?: CSSProp;
}
