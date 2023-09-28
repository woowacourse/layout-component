import React from "react";
import { createArrayOfArrays, findIndexOfSmallest, parseGap } from "../utils";

import type { Gap } from "../types";

interface Props {
  direction?: "column" | "row";
  gap: Gap;
  lane: number;
  children: React.ReactElement[];
}

interface MasonryChild {
  height: number;
  child: React.ReactElement;
}

function MasonryLayout({ direction = "column", gap, lane, children }: Props) {
  const dimensionProperty = direction === "column" ? "height" : "width";
  const layoutArrayList = createArrayOfArrays<MasonryChild>(lane);
  const { rowGap, columnGap } = parseGap(gap);

  const rowGrid = { gridTemplateRows: `repeat(${lane}, 1fr)`, height: "100%" };
  const columnGrid = { gridTemplateColumns: `repeat(${lane}, 1fr)` };

  const gridStyle = {
    display: "grid",
    gap: direction === "column" ? columnGap : rowGap,
    ...(direction === "row" && rowGrid),
    ...(direction === "column" && columnGrid),
  };

  const laneStyle = {
    display: "flex",
    flexDirection: direction,
    gap: direction === "column" ? rowGap : columnGap,
  };

  children.forEach((child) => {
    const height = parseInt(child.props.style[dimensionProperty], 10);
    const heightSumArray = layoutArrayList.map((children: MasonryChild[]) =>
      children.reduce((sum, child) => sum + child.height, 0)
    );
    const targetIndex = findIndexOfSmallest(heightSumArray);
    layoutArrayList[targetIndex].push({ height, child });
  });

  return (
    <div style={gridStyle}>
      {Array.from({ length: lane }, (_, index) => (
        <div key={index} style={laneStyle}>
          {layoutArrayList[index].map((item) => item.child)}
        </div>
      ))}
    </div>
  );
}

export default MasonryLayout;
