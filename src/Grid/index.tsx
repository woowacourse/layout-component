import React from "react";
import "./style.css";

interface GridProps extends React.PropsWithChildren {
  rows: number;
  columns: number;
  gap: number;
}

export default function Grid({ rows, columns, gap, children }: GridProps) {
  const style = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gap: `${gap}px`,
  };

  return (
    <div className="grid" style={style}>
      {children}
    </div>
  );
}
