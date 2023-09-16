import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
  maxWidth: string;
  minWidth?: string;
  children: React.ReactNode;
}

export default function Container({
  backgroundColor,
  maxWidth,
  minWidth,
  children,
  ...props
}: ContainerProps) {
  return (
    <StyledContainer
      $maxWidth={maxWidth}
      $minWidth={minWidth ?? '270px'}
      $backgroundColor={backgroundColor ?? 'white'}
      {...props}
    >
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div<{
  $maxWidth: string;
  $minWidth: string;
  $backgroundColor: string;
}>`
  height: 90vh;
  padding: 10px;

  max-width: ${(props) => props.$maxWidth};
  min-width: ${(props) => props.$minWidth};

  background-color: ${(props) => props.$backgroundColor};
`;
