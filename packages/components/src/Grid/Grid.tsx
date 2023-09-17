import { HTMLAttributes } from "react";
import { root, vars } from "./Grid.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import cssLength from "../cssLength";

export type GridProps = HTMLAttributes<HTMLDivElement> & {
  rows?: number;
  columns?: number;
  gap?: number;
};

const Grid = (props: GridProps) => {
  const { rows, columns, gap, ...divProps } = props;

  return (
    <div
      {...divProps}
      className={root}
      style={{
        ...divProps.style,
        ...assignInlineVars({
          [vars.rows]: String((rows && `repeat(${rows}, 1fr)`) ?? "initial"),
          [vars.columns]: String((columns && `repeat(${columns}, 1fr)`) ?? "initial"),
          [vars.gap]: cssLength(gap ?? "initial"),
        }),
      }}
    />
  );
};

export default Grid;
