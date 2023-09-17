import styled from "styled-components";
import { ReactNode } from "react";

interface GridProps {
  rows: number;
  columns: number;
  gap: number;
  children: ReactNode;
}

const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  gap: ${({ gap }) => gap}px;
`;

const Grid = ({ rows, columns, gap, children }: GridProps) => {
  return (
    <StyledGrid rows={rows} columns={columns} gap={gap}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
