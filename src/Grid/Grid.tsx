import { CSSProperties, ReactNode, createElement } from "react";
import { Unit } from "../types";

interface GridProps {
  children: ReactNode;
  rows: string;
  columns: string;
  gap: `${number}${Unit}`;
  style?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

const Grid = ({
  children,
  rows,
  columns,
  gap,
  style,
  as: Element = "div",
}: GridProps) => {
  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateRows: rows,
    gridTemplateColumns: columns,
    gap,
    ...style,
  };

  return createElement(Element, { style: gridStyle }, children);
};

export default Grid;
