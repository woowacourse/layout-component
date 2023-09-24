import { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
import { CssNumberValue } from "../types";

type CommonAlignmentValues = "center" | "start" | "end" | "flex-start" | "flex-end";

type Props = {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?: CommonAlignmentValues | "space-between" | "space-around" | "space-evenly" | "stretch";
  align?: CommonAlignmentValues;

  gap?: CssNumberValue;
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
} & HTMLAttributes<HTMLDivElement>;

const Flex = ({ direction, justify, align, gap = 0, wrap, children, ...attributes }: PropsWithChildren<Props>) => {
  const defaultStyle: CSSProperties = {
    display: "flex",

    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,

    gap: gap,
    flexWrap: wrap,
  };

  return (
    <div style={defaultStyle} {...attributes}>
      {children}
    </div>
  );
};

export default Flex;
