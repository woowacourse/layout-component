import { css } from '@emotion/react';

import type { FlexLayoutStyle, FlexProps } from '../FlexContainer';

export const LAYOUT = {
  topLeft: {
    justify: 'start',
    align: 'start',
  },
  topCenter: {
    justify: 'center',
    align: 'start',
  },
  topRight: {
    justify: 'end',
    align: 'start',
  },
  centerLeft: {
    justify: 'start',
    align: 'center',
  },
  center: {
    justify: 'center',
    align: 'center',
  },
  centerRight: {
    justify: 'end',
    align: 'center',
  },
  bottomLeft: {
    justify: 'start',
    align: 'end',
  },
  bottomCenter: {
    justify: 'center',
    align: 'end',
  },
  bottomRight: {
    justify: 'end',
    align: 'end',
  },
} as const;
export type Layout = keyof typeof LAYOUT;

export const layoutStyle = ({
  direction,
  layout,
  justify,
  alignItems,
  alignContent,
}: Required<Pick<FlexProps, 'direction'>> & FlexLayoutStyle) => css`
  ${layout &&
  `justify-content: ${direction === 'row' ? LAYOUT[layout].justify : LAYOUT[layout].align}`};
  ${layout &&
  `align-items: ${direction === 'row' ? LAYOUT[layout].align : LAYOUT[layout].justify}`};

  ${justify && `justify-content: ${justify}`};
  ${alignItems && `align-items: ${alignItems}`};
  ${alignContent && `align-content: ${alignContent}`};
`;

type NumberAndString = number | string;
export interface Gap {
  gap?: NumberAndString;
  rowGap?: NumberAndString;
  columnGap?: NumberAndString;
}

export const gapStyle = ({ gap, rowGap, columnGap }: Gap) => css`
  ${gap && `gap: ${typeof gap === 'string' ? gap : `${gap}px`}`};
  ${rowGap && `row-gap: ${typeof rowGap === 'string' ? rowGap : `${rowGap}px`}`};
  ${columnGap && `column-gap: ${typeof columnGap === 'string' ? columnGap : `${columnGap}px`}`};
`;
