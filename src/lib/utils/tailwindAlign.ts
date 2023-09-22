import { Align } from '../@types';

export const tailwindAlign = (align: Align) => {
  switch (align) {
    case 'start':
      return 'items-start';
    case 'end':
      return 'items-end';
    case 'center':
      return 'items-center';
    case 'baseline':
      return 'items-baseline';
    case 'stretch':
      return 'items-stretch';
  }
};
