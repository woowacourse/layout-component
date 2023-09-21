import React from "react";
import type { Gap, GapFormat } from "../types";

interface Props {
  rows: number;
  columns: number;
  gap: Gap;
  children?: React.ReactNode;
  display: "grid" | "inline-grid";
}

function Grid({ rows, columns, gap, children, display = "grid" }: Props) {
  let rowGap: GapFormat = 0;
  let columnGap: GapFormat = 0;

  if (typeof gap !== "object") {
    rowGap = gap;
    columnGap = gap;
  } else {
    ({ row: rowGap, column: columnGap } = gap);
  }

  const gridStyle = {
    display,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    rowGap: rowGap || "0",
    columnGap: columnGap || "0",
  };

  return <div style={gridStyle}>{children}</div>;
}

export default Grid;
