import { ComponentPropsWithoutRef, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { tailwindDirection } from '../utils/tailwindDirection';
import { tailwindJustify } from '../utils/tailwindJustify';
import { tailwindAlign } from '../utils/tailwindAlign';

import type { Align, Direction, Justify } from '../@types';

interface FlexProps extends ComponentPropsWithoutRef<'div'> {
  direction?: Direction;
  justify?: Justify;
  align?: Align;
  gap?: string;
  children?: ReactNode;
}

const Flex = ({ direction, justify, align, children, gap }: FlexProps) => {
  return (
    <Wrapper direction={direction} justify={justify} align={align} gap={gap}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<FlexProps>`
  display: flex;
  width: 100%;
  height: 100%;

  ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${tailwindDirection(direction)};
    `}

  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${tailwindJustify(justify)};
    `}

  ${({ align }) =>
    align &&
    css`
      align-items: ${tailwindAlign(align)};
    `}

  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `}
`;

export default Flex;
