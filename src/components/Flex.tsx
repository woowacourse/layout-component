import {
  CSSProperties,
  type HTMLAttributes,
  type PropsWithChildren,
} from "react";

export interface FlexProps
  extends HTMLAttributes<HTMLDivElement>,
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

  const defaultStyle: CSSProperties = {
    display: "flex",
  };

  return (
    <div
      style={{
        ...defaultStyle,
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
    </div>
  );
};

export default Flex;
