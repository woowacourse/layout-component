import { style } from "@vanilla-extract/css";

export const root = style({
  padding: "12px 24px",
  background: "none",
  border: "none",
  cursor: "pointer",
  boxSizing: "border-box",
  borderBottom: "3px solid transparent",
  marginBottom: "-1px",
  height: "100%",
});

export const active = style({
  borderBottom: "3px solid #00e9f5",
});
