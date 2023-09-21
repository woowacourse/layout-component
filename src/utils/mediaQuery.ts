import type { CSSProperties } from 'react';

import type { BreakPoints, ResponsiveValue } from '@type/index';

import { BREAK_POINTS } from '@constants/index';

export const generateMediaQueryStyles = (responsiveProperties: {
  [key: string]: string | number | ResponsiveValue | undefined;
}) => {
  const mediaQueries: { [key: string]: CSSProperties } = {};

  Object.keys(responsiveProperties).forEach((propName) => {
    const value = responsiveProperties[propName];

    if (typeof value === 'object') {
      const breakpoints = Object.keys(value) as BreakPoints[];

      breakpoints.forEach((breakpoint, index) => {
        const mediaQuery = `@media (min-width: ${BREAK_POINTS[breakpoint]})`;
        const responsiveValue = value[breakpoint];

        mediaQueries[mediaQuery] = {
          ...mediaQueries[mediaQuery],
          [propName]: responsiveValue,
        };

        if (index === breakpoints.length - 1) {
          mediaQueries['default'] = {
            ...mediaQueries['default'],
            [propName]: responsiveValue,
          };
        }
      });

      return;
    }

    mediaQueries['default'] = {
      ...mediaQueries['default'],
      [propName]: value,
    };
  });

  return mediaQueries;
};
