import { Direction } from '../@types';

export const tailwindDirection = (direction: Direction) => {
  switch (direction) {
    case 'row':
      return 'row';
    case 'row-reverse':
      return 'row-reverse';
    case 'col':
      return 'column';
    case 'col-reverse':
      return 'column-reverse';
  }
};
