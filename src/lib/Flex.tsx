import { CSSProperties, PropsWithChildren } from "react";
import { CssNumberValue } from "../types";

type CommonAlignmentValues = "center" | "start" | "end" | "flex-start" | "flex-end";

type Props = {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?: CommonAlignmentValues | "space-between" | "space-around" | "space-evenly" | "stretch";
  align?: CommonAlignmentValues;

  gap?: CssNumberValue;
  wrap?: "wrap" | "nowrap" | "wrap-reverse";

  $style?: CSSProperties;
};

const Flex = ({ direction, justify, align, gap = 0, wrap, $style, children }: PropsWithChildren<Props>) => {
  const defaultStyle: CSSProperties = {
    display: "flex",

    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,

    gap: gap,
    flexWrap: wrap,

    ...$style,
  };

  return <div style={defaultStyle}>{children}</div>;
};

export default Flex;
