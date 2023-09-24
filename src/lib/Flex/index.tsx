import { PropsWithChildren } from "react";
import { styled } from "styled-components";
import { CSS } from "styled-components/dist/types";
import { NumberUnitType } from "../../types";

type DirectionType = CSS.Property.FlexDirection;
type JustifyType = CSS.Property.JustifyContent;
type AlignType = CSS.Property.AlignItems;

interface FlexCssProps {
  direction?: DirectionType;
  justify?: JustifyType;
  align?: AlignType;
  gap?: NumberUnitType;
}

const Flex = ({
  direction = "row",
  justify = "flex-start",
  align = "flex-start",
  ...props
}: PropsWithChildren<FlexCssProps>) => {
  return (
    <FlexBox direction={direction} justify={justify} align={align} {...props}>
      {props.children}
    </FlexBox>
  );
};

const FlexBox = styled.div<FlexCssProps>`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
`;

export default Flex;
