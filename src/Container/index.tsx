import { ComponentPropsWithoutRef, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  minWidth: string;
  maxWidth: string;
  children?: ReactNode;
}

const Container = ({ minWidth, maxWidth, children }: ContainerProps) => {
  return (
    <Wrapper minWidth={minWidth} maxWidth={maxWidth}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<ContainerProps>`
  ${({ minWidth }) =>
    minWidth &&
    css`
      min-width: ${minWidth};
    `}

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `}
`;

export default Container;
