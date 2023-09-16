import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
  maxWidth: string;
  minWidth?: string;
  children: React.ReactNode;
}

export default function Container({
  backgroundColor = 'white',
  maxWidth,
  minWidth = '270px',
  children,
  ...props
}: ContainerProps) {
  return (
    <StyledContainer
      $maxWidth={maxWidth}
      $minWidth={minWidth}
      $backgroundColor={backgroundColor}
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
