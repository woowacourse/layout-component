import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
  direction: 'row' | 'column';
  justify: string;
  align: string;
  gap?: string;
  children: React.ReactNode;
}

export default function Flex({
  backgroundColor = 'white',
  direction = 'row',
  justify,
  align,
  gap = '0',
  children,
  ...props
}: FlexProps) {
  return (
    <StyledFlex
      $direction={direction}
      $justify={justify}
      $align={align}
      $gap={gap}
      $backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </StyledFlex>
  );
}

const StyledFlex = styled.div<{
  $direction: string;
  $justify: string;
  $align: string;
  $gap: string;
  $backgroundColor: string;
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
  gap: ${({ $gap }) => ($gap ? $gap : 0)};

  height: 100px;
  padding: 10px;

  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;
