import { PropsWithChildren } from "react";
import { css, styled } from "styled-components";

interface GridCssProps {
  rows: string;
  columns: string;
  gap: string;
}

interface GridProps extends GridCssProps {
  isAutoFill?: boolean;
}

const Grid = ({
  columns,
  isAutoFill,
  ...props
}: PropsWithChildren<GridProps>) => {
  return (
    <Div columns={isAutoFill ? "auto-fill" : columns} {...props}>
      {props.children}
    </Div>
  );
};

const GridCss = css<GridCssProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  gap: ${(props) => props.gap};
  background: skyblue;
`;

const Div = styled.div<GridCssProps>`
  ${GridCss}
`;

export default Grid;
