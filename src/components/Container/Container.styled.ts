import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ContainerProps } from '~/components/Container/Container';
import { toPx } from '~/utils/toPx';

export const ContainerRoot = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  ${({ maxWidth }) => {
    if (maxWidth) {
      const maxWidthToPx = toPx(maxWidth);

      return css`
        max-width: ${maxWidthToPx};

        @media (min-width: ${maxWidthToPx}) {
          max-width: ${maxWidthToPx};
        }
      `;
    }
  }}
  ${({ minWidth }) => {
    if (minWidth) {
      return css`
        min-width: ${toPx(minWidth)};
      `;
    }
  }}
  ${({ css }) => css}
`;
