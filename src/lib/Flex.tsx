import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

type DirectionType = "row" | "column";
type OrderWayType =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

interface FlexCssProps {
  direction?: DirectionType;
  justify?: OrderWayType;
  align?: OrderWayType;
  gap?: string;
}

const Flex = ({
  direction = "row",
  justify = "flex-start",
  align = "flex-start",
  ...props
}: PropsWithChildren<FlexCssProps>) => {
  return (
    <Div direction={direction} justify={justify} align={align} {...props}>
      {props.children}
    </Div>
  );
};

const FlexCss = css<FlexCssProps>`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
`;

const Div = styled.div<FlexCssProps>`
  ${FlexCss}
`;

export default Flex;
