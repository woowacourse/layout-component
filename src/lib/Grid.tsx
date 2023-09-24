import { CSSProperties, PropsWithChildren } from "react";
import { CssNumberValue } from "../types";

type Props = {
  rows: number;
  columns: number;

  rowGap?: CssNumberValue;
  columnGap?: CssNumberValue;
  gap?: CssNumberValue;

  $style?: CSSProperties;
};

const Grid = ({ rows, columns, rowGap = 0, columnGap = 0, gap = 0, $style, children }: PropsWithChildren<Props>) => {
  const defaultStyle: CSSProperties = {
    display: "grid",
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,

    rowGap: rowGap,
    columnGap: columnGap,
    gap: gap,

    ...$style,
  };

  return <div style={defaultStyle}>{children}</div>;
};

export default Grid;
