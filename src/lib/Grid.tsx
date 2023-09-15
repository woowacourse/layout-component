import { PropsWithChildren } from "react";
import { css, styled } from "styled-components";

interface GridCssProps {
  rows: string;
  columns: string;
  gap: string;
  rowFraction?: string;
  columnFraction?: string;
}

interface GridProps extends GridCssProps {
  isAutoFill?: boolean;
}

const Grid = ({
  columns,
  isAutoFill,
  rowFraction = "1fr",
  columnFraction = "1fr",
  ...props
}: PropsWithChildren<GridProps>) => {
  return (
    <Div
      columns={isAutoFill ? "auto-fill" : columns}
      columnFraction={columnFraction}
      rowFraction={rowFraction}
      {...props}
    >
      {props.children}
    </Div>
  );
};

const GridCss = css<GridCssProps>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columns},
    ${(props) => props.columnFraction}
  );
  grid-template-rows: repeat(
    ${(props) => props.rows},
    ${(props) => props.rowFraction}
  );
  gap: ${(props) => props.gap};
  background: skyblue;
`;

const Div = styled.div<GridCssProps>`
  ${GridCss}
`;

export default Grid;
