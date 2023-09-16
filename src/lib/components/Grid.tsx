import React from "react";

interface Gap {
  row: number;
  column: number;
}

interface Props {
  rows: number;
  columns: number;
  gap: Gap | number;
  children?: React.ReactNode;
}

function Grid({ rows, columns, gap, children }: Props) {
  let rowGap = 0;
  let columnGap = 0;

  if (typeof gap === "number") {
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

  return (
    <div style={gridStyle}>
      {React.Children.map(children, (child) => (
        <>{child}</>
      ))}
    </div>
  );
}

export default Grid;
