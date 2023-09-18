import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { FlexProps } from '~/components/Flex/Flex';
import { toPx } from '~/utils/toPx';

export const FlexRoot = styled.div<FlexProps>`
  display: flex;
  ${({ direction }) =>
    css`
      flex-direction: ${direction};
    `}
  ${({ justify }) =>
    css`
      justify-content: ${justify};
    `}
  ${({ align }) =>
    css`
      align-items: ${align};
    `}
  ${({ wrap }) =>
    css`
      flex-wrap: ${wrap};
    `}
  ${({ gap }) => {
    if (gap) {
      return css`
        gap: ${toPx(gap)};
      `;
    }
  }}
  ${({ css }) => css}
`;
