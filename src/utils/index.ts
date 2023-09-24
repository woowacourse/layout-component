export * from './forward-ref';
export * from './object';

export const convertNumberToPx = (value?: number) =>
  typeof value === 'number' ? `${value}px` : value;
export const convertSpan = (span?: number | 'auto') =>
  typeof span === 'number' ? `span ${span} / span ${span}` : span;
