import { createVar, style } from "@vanilla-extract/css";

export const vars = {
  flexDirection: createVar(),
  justifyContent: createVar(),
  alignItems: createVar(),
  gap: createVar(),
};

export const root = style({
  display: "flex",
  flexDirection: vars.flexDirection,
  justifyContent: vars.justifyContent,
  alignItems: vars.alignItems,
});
