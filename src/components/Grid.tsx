import type { HTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  rows?: number | string;
  columns?: number | string;
  gap?: number | string;
  rowGap?: number | string;
  columnGap?: number | string;
}

const Grid = (props: PropsWithChildren<GridProps>) => {
  const {
    rows = 1,
    columns = 1,
    rowGap,
    columnGap,
    gap,
    children,
    style,
    ...rest
  } = props;

  const rowTemplate = !isNaN(Number(rows))
    ? `repeat(${rows}, minmax(0, 1fr))`
    : rows;
  const columnTemplate = !isNaN(Number(columns))
    ? `repeat(${columns}, minmax(0, 1fr))`
    : columns;

  return (
    <GridWrapper
      rows={rowTemplate}
      columns={columnTemplate}
      style={{ gap, rowGap, columnGap, ...style }}
    >
      {children}
    </GridWrapper>
  );
};

const GridWrapper = styled.div<{
  rows: number | string;
  columns: number | string;
}>`
  display: grid;
  grid-template-rows: ${({ rows }) => rows};
  grid-template-columns: ${({ columns }) => columns};
`;

export default Grid;
