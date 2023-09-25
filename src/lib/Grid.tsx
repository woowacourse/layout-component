import { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
import { CssNumberValue } from "../types";

type Props = {
  rows: number;
  columns: number;

  rowGap?: CssNumberValue;
  columnGap?: CssNumberValue;
  gap?: CssNumberValue;
} & HTMLAttributes<HTMLDivElement>;

const Grid = ({
  rows,
  columns,
  rowGap = 0,
  columnGap = 0,
  gap = 0,
  children,
  ...attributes
}: PropsWithChildren<Props>) => {
  const defaultStyle: CSSProperties = {
    display: "grid",
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,

    rowGap: rowGap,
    columnGap: columnGap,
    gap: gap,
  };

  return (
    <div style={defaultStyle} {...attributes}>
      {children}
    </div>
  );
};

export default Grid;
