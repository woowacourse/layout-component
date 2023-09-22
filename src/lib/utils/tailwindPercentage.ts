import { Slash } from '../@types';

export const tailwindPercentage = (value: Slash) => {
  switch (value) {
    case '1/2':
      return '50%';
    case '1/3':
      return '33.3%';
    case '2/3':
      return '66.6%';
    case '1/4':
      return '25%';
    case '3/4':
      return '75%';
    case '1/5':
      return '20%';
    case '2/5':
      return '40%';
    case '3/5':
      return '60%';
    case '4/5':
      return '80%';
  }
};
