import { PropsWithChildren } from 'react';
import { CSSProp } from 'styled-components';

export interface Props extends PropsWithChildren {
  minWidth: number | string;
  maxWidth: number | string;
  css?: CSSProp;
}

export interface ContainerLayoutProps {
  $minWidth: number | string;
  $maxWidth: number | string;
  css?: CSSProp;
}
