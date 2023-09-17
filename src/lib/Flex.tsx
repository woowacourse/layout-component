import { CSSProperties, PropsWithChildren } from "react";

type CommonAlignmentProperties = "center" | "start" | "end" | "flex-start" | "flex-end";

type Props = {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?: CommonAlignmentProperties | "space-between" | "space-around" | "space-evenly" | "stretch";
  align?: CommonAlignmentProperties;

  gap?: number;
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
};

const Flex = ({ direction, justify, align, gap = 0, wrap, children }: PropsWithChildren<Props>) => {
  const defaultStyle: CSSProperties = {
    display: "flex",

    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,

    gap: `${gap}px`,
    flexWrap: wrap,
  };

  return <div style={defaultStyle}>{children}</div>;
};

export default Flex;
