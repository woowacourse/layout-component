import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { CSS } from "styled-components/dist/types";

type DirectionType = CSS.Property.FlexDirection;
type JustifyType = CSS.Property.JustifyContent;
type AlignType = CSS.Property.AlignItems;

interface FlexCssProps {
  direction?: DirectionType;
  justify?: JustifyType;
  align?: AlignType;
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
