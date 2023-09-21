import { createVar, style } from "@vanilla-extract/css";

export const vars = {
  flexDirection: createVar(),
  justifyContent: createVar(),
  alignItems: createVar(),
  alignContent: createVar(),
  flexWrap: createVar(),
  gap: createVar(),
  rowGap: createVar(),
  columnGap: createVar(),
};

export const root = style({
  display: "flex",
  ...vars,
});
