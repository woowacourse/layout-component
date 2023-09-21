import { ComponentPropsWithoutRef, ReactNode } from 'react';
import styled from 'styled-components';

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
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
`;

export default Container;
