import React from "react";
import { createArrayOfArrays, findIndexOfSmallest } from "../utils";
import type { Gap, GapFormat } from "../types";

interface Props {
  direction?: "column" | "row";
  gap: Gap;
  line: number;
  children: React.ReactElement[];
}

interface MasonryChild {
  height: number;
  child: React.ReactElement;
}

function MasonryLayout({ direction = "column", gap, line, children }: Props) {
  const layoutArrayList = createArrayOfArrays<MasonryChild>(line);
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
    gridTemplateColumns: `repeat(${line}, 1fr)`,
    gap: columnGap || "0",
  };

  const lineStyle = {
    display: "flex",
    flexDirection: direction,
    gap: rowGap || "0",
  };

  children.forEach((child) => {
    const heightSumArray = layoutArrayList.map((array: MasonryChild[]) =>
      array.reduce((sum, item) => sum + item.height, 0)
    );
    const targetIndex = findIndexOfSmallest(heightSumArray);
    const value = { height: parseInt(child.props.style.height, 10), child };
    layoutArrayList[targetIndex].push(value);
  });

  return (
    <div style={gridStyle}>
      {Array.from({ length: line }, (_, index) => (
        <div key={index} style={lineStyle}>
          {layoutArrayList[index].map((item) => item.child)}
        </div>
      ))}
    </div>
  );
}

export default MasonryLayout;
