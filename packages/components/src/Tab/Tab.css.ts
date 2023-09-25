import { createVar, globalStyle, style } from "@vanilla-extract/css";

export const vars = {
  focusedTab: createVar(),
};

export const root = style({});

export const tabs = style({});

export const tabControls = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

globalStyle(`${tabs} > &:not(:nth-child(${vars.focusedTab}))`, {
  display: "none",
});

export const tabControl = style({
  padding: "12px 24px",
  background: "none",
  border: "none",
  borderBottom: "1px solid #cccccc",
  cursor: "pointer",
  boxSizing: "border-box",
  height: "100%",
});

export const activeTabControl = style({
  borderBottom: "3px solid #00e9f5",
});
