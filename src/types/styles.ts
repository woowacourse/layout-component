export type DirectionStyle = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

export type ElementBasicStyleType = {
  maxWidth?: number;
  minWidth?: number;
  padding?: number | DirectionStyle;
  margin?: number | DirectionStyle;
};

export type StyleUnit = 'px' | 'rem' | 'em' | '%' | 'vh' | 'vw';

export type StyleValue = number | string | undefined;
