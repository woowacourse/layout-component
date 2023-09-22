import type { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Grid 컴포넌트의 열 개수
   */
  rows?: number | string;
  /**
   * Grid 컴포넌트의 행 개수
   */
  columns?: number | string;
  /**
   * Grid 컴포넌트의 gap 크기
   */
  gap?: number | string;
  /**
   * Grid 컴포넌트의 row gap 크기
   */
  rowGap?: number | string;
  /**
   * Grid 컴포넌트의 column gap 크기
   */
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
      {...rest}
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
  grid-template-rows: ${({ rows = 1 }) => rows};
  grid-template-columns: ${({ columns = 1 }) => columns};
`;

export default Grid;
