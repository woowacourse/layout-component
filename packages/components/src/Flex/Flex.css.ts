import { createVar, style } from "@vanilla-extract/css";

export const vars = {
  flexDirection: createVar(),
  justifyContent: createVar(),
  alignItems: createVar(),
  alignContent: createVar(),
  flexWrap: createVar(),
  gap: createVar(),
};

export const root = style({
  display: "flex",
  ...vars,
});
