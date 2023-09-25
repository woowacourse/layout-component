export type StyleValue = number | string | undefined;

export type DirectionStyle = {
  top?: StyleValue;
  left?: StyleValue;
  right?: StyleValue;
  bottom?: StyleValue;
};

export type ElementBasicStyleType = {
  maxWidth?: StyleValue;
  minWidth?: StyleValue;
  padding?: StyleValue | DirectionStyle;
  margin?: StyleValue | DirectionStyle;
};

export type StyleUnit = 'px' | 'rem' | 'em' | '%' | 'vh' | 'vw';
