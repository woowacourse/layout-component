import {ReactNode} from "react";
import {StyledGrid} from "./Grid.styles.ts";

export interface GridProps {
  rows: number;
  columns: number;
  gap?: number;
  children: ReactNode;
}

const Grid = ({rows, columns, gap, children}: GridProps) => {
  return (
    <StyledGrid rows={rows} columns={columns} gap={gap}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
