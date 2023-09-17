import { CSSProperties, PropsWithChildren } from "react";

type Props = {
  rows: number;
  columns: number;

  rowGap?: number;
  columnGap?: number;
  gap?: number;
};

const Grid = ({ rows, columns, rowGap = 0, columnGap = 0, gap = 0, children }: PropsWithChildren<Props>) => {
  const defaultStyle: CSSProperties = {
    display: "grid",
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,

    rowGap: `${rowGap}px`,
    columnGap: `${columnGap}px`,
    gap: `${gap}px`,
  };

  return <div style={defaultStyle}>{children}</div>;
};

export default Grid;
