import { createVar, style } from "@vanilla-extract/css";

export const vars = {
  rows: createVar(),
  columns: createVar(),
  gap: createVar(),
};

export const root = style({
  display: "grid",
  gridTemplateRows: vars.rows,
  gridTemplateColumns: vars.columns,
  gap: vars.gap,
});
