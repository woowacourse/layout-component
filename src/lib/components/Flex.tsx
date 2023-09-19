import React, { CSSProperties, ReactNode } from "react";
import type { GapFormat } from "../types";
interface Props {
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  wrap?: CSSProperties["flexWrap"];
  gap?: GapFormat;
  children?: ReactNode;
}

function Flex({
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  gap = 0,
  wrap = "nowrap",
  children,
}: Props) {
  const flexContainerStyle = {
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap,
    flexWrap: wrap,
  };

  return <div style={flexContainerStyle}>{children}</div>;
}

export default Flex;
