import { CSSProperties } from 'react';

export type StyleValue = number | string | undefined;

export type DirectionStyle = Pick<
  CSSProperties,
  'top' | 'right' | 'bottom' | 'left'
>;

export type ElementBasicStyleType = Pick<
  CSSProperties,
  'maxWidth' | 'minWidth' | 'margin'
> & {
  padding?: StyleValue | DirectionStyle;
  margin?: StyleValue | DirectionStyle;
};

export type StyleUnit = 'px' | 'rem' | 'em' | '%' | 'vh' | 'vw';

export type EasingType = 'ease-in-out' | 'ease-out' | 'ease-in' | 'ease';
