import { CSSProperties } from 'react';

export const filterUndefinedProps = (cssProps: object): CSSProperties => {
  return Object.fromEntries(Object.entries(cssProps).filter(([, value]) => value !== undefined));
};
