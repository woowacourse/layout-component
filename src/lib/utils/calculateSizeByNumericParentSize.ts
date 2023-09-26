import { Size } from '../types';

export const calculateSizeByNumericParentSize = (
  size: Size,
  numericParentSize: number
) => {
  if (typeof size === 'number') {
    return size;
  }

  if (size.endsWith('px')) {
    return Number(size.replace('px', ''));
  }

  if (size.endsWith('%')) {
    const percentNumericValue = Number(size.replace('%', ''));

    return (numericParentSize / 100) * percentNumericValue;
  }

  return 0;
};
