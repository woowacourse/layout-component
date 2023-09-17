import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { GridProps } from '~/components/Grid/Grid';
import { toPx } from '~/utils/toPx';

export const GridRoot = styled.div<GridProps>`
  display: grid;
  ${({ rows }) => css`
    grid-template-rows: ${`repeat(${rows}, 1fr)`};
  `}
  ${({ columns }) => css`
    grid-template-columns: ${`repeat(${columns}, 1fr)`};
  `}
  ${({ gap }) => {
    if (gap) {
      return css`
        gap: ${toPx(gap)};
      `;
    }
  }}
`;
