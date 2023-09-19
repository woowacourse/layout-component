import React from "react";
import type { GapFormat } from "../types";

type Gap =
  | {
      row: GapFormat;
      column: GapFormat;
    }
  | GapFormat;

interface Props {
  rows: number;
  columns: number;
  gap: Gap;
  children?: React.ReactNode;
}

function Grid({ rows, columns, gap, children }: Props) {
  let rowGap: GapFormat = 0;
  let columnGap: GapFormat = 0;

  if (typeof gap !== "object") {
    rowGap = gap;
    columnGap = gap;
  } else {
    ({ row: rowGap, column: columnGap } = gap);
  }

  const gridStyle = {
    display: "grid",
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    rowGap: rowGap ? `${rowGap}px` : "0",
    columnGap: columnGap ? `${columnGap}px` : "0",
  };

  return <div style={gridStyle}>{children}</div>;
}

export default Grid;
