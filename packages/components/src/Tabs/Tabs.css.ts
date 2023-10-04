import { createVar, style } from "@vanilla-extract/css";

export const vars = {
  flexWrap: createVar(),
};

export const root = style({});

export const tabButtons = style({
  outline: "none",
  background: "none",
  border: "none",
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  overflowX: "auto",
  borderBottom: "1px solid #cccccc",
  flexWrap: vars.flexWrap,
});
