import React from "react";

interface GridProps extends React.PropsWithChildren {
  rows: number;
  columns: number;
  gap: number;
}

export default function Grid({ rows, columns, gap, children }: GridProps) {
  const style = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gap: `${gap}px`,
  };

  return <div style={style}>{children}</div>;
}
