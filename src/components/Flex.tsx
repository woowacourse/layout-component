import {
  CSSProperties,
  type HTMLAttributes,
  type PropsWithChildren,
} from "react";
import styled from "styled-components";

export interface FlexProps
  extends HTMLAttributes<HTMLDivElement>,
    Partial<
      Pick<
        CSSProperties,
        | "flexDirection"
        | "flexWrap"
        | "justifyContent"
        | "alignItems"
        | "alignContent"
        | "alignSelf"
        | "flexGrow"
        | "flexShrink"
        | "order"
      >
    > {}

const Flex = (props: PropsWithChildren<FlexProps>) => {
  const {
    flexDirection = "row",
    flexWrap = "nowrap",
    justifyContent = "start",
    alignItems = "stretch",
    alignContent = "start",
    alignSelf = "stretch",
    order,
    flexGrow,
    flexShrink,
    children,
    style,
    ...rest
  } = props;

  return (
    <FlexWrapper
      style={{
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
        alignSelf,
        order,
        flexGrow,
        flexShrink,
        ...style,
      }}
      {...rest}
    >
      {children}
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div<FlexProps>`
  display: flex;
`;

export default Flex;
