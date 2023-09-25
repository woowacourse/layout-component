import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
  rows: number;
  columns: number;
  gap?: string;
  children: React.ReactNode;
}

export default function Grid({
  backgroundColor = 'white',
  rows,
  columns,
  gap = '0',
  children,
  ...props
}: GridProps) {
  return (
    <StyledGrid
      $rows={rows}
      $columns={columns}
      $gap={gap}
      $backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </StyledGrid>
  );
}

const StyledGrid = styled.div<{
  $rows: number;
  $columns: number;
  $gap: string;
  $backgroundColor: string;
}>`
  display: grid;
  grid-template-rows: ${({ $rows }) => `repeat(${$rows}, 1fr)`};
  grid-template-columns: ${({ $columns }) => `repeat(${$columns}, 1fr)`};
  gap: ${({ $gap }) => ($gap ? $gap : 0)};
  padding: 10px;

  background-color: ${(props) => props.$backgroundColor};
`;
