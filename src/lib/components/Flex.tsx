import React, { ReactNode } from "react";
import type { GapFormat } from "../types";

interface Props {
  direction?: "row" | "column";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "flex-end" | "center" | "stretch";
  gap?: GapFormat;
  children?: ReactNode;
}

function Flex({
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  gap = 0,
  children,
}: Props) {
  const flexContainerStyle = {
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap: `${gap}px`,
  };

  return <div style={flexContainerStyle}>{children}</div>;
}

export default Flex;
