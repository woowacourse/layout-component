import { ComponentPropsWithoutRef, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface FlexProps extends ComponentPropsWithoutRef<'div'> {
  direction?: string;
  justify?: string;
  align?: string;
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

  ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction};
    `}

  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}

  ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}

  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `}
`;

export default Flex;
