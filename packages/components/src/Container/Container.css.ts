import { createVar, style } from "@vanilla-extract/css";

export const vars = {
  minWidth: createVar(),
  maxWidth: createVar(),
};

export const root = style({
  width: "100%",
});

export const content = style({
  margin: "0 auto",
  width: "100%",
  ...vars,
});
