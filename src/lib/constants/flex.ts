import { CSSProperties } from 'react';

export const flexCssPropMappings = {
  direction: {
    row: 'row',
    'row-reverse': 'row-reverse',
    col: 'column',
    'col-reverse': 'column-reverse',
  } as Record<string, CSSProperties['flexDirection']>,
  justify: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
  } as Record<string, CSSProperties['justifyContent']>,
  align: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    baseline: 'baseline',
    stretch: 'stretch',
  } as Record<string, CSSProperties['alignItems']>,
};
