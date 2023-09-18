import { CSSObject } from 'styled-components';
import { DirectionStyle, StyleValue, StyleUnit } from './types/styles';

const convertToStyleUnit = (value: StyleValue, unit: StyleUnit) => {
  if (typeof value === 'number') return `${value}${unit}`;

  return value;
};

export const convertToPixel = (value: StyleValue) => {
  return convertToStyleUnit(value, 'px');
};

export const generateDirectionStyle = (
  style: 'padding' | 'margin',
  value: number | DirectionStyle | undefined
): CSSObject => {
  if (typeof value === 'object') {
    const { top, left, right, bottom } = value;

    return {
      [`${style}Top`]: convertToPixel(top),
      [`${style}Left`]: convertToPixel(left),
      [`${style}Right`]: convertToPixel(right),
      [`${style}Bottom`]: convertToPixel(bottom),
    };
  }

  return { [style]: convertToPixel(value) };
};
