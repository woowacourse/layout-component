import { PropsWithChildren } from 'react';
import { CSSProp } from 'styled-components';

export interface Props extends PropsWithChildren {
  direction?: 'row' | 'column';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  gap?: number | string;
  css?: CSSProp;
}

export interface FlexBoxLayoutProps {
  $direction?: 'row' | 'column';
  $justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  $align?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  $gap?: number | string;
  css?: CSSProp;
}
