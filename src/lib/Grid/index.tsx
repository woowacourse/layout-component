import { PropsWithChildren } from "react";
import { styled } from "styled-components";
import { NumberUnitType } from "../../types";

interface GridCssProps {
  rows: string;
  columns: string;
  gap?: NumberUnitType;
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
    <GridBox columns={isAutoFill ? "auto-fill" : columns} {...props}>
      {props.children}
    </GridBox>
  );
};

const GridBox = styled.div<GridCssProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  gap: ${(props) => props.gap};
`;

export default Grid;
