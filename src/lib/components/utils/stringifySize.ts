import { Size } from '../../types';

export const stringifySize = (size: Size): Size => {
  if (typeof size === 'number') {
    return `${size}px`;
  }

  return size;
};
