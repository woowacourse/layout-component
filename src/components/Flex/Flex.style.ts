import { css } from "@emotion/react";

export type DirectionType = "row" | "column";
export type AlignType =
  | "normal"
  | "stretch"
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "self-start"
  | "self-end"
  | "baseline"
  | "inherit"
  | "initial"
  | "unset";

export type JustifyType =
  | "center"
  | "start"
  | "flex-start"
  | "end"
  | "flex-end"
  | "left"
  | "right"
  | "normal"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | "inherit"
  | "initial"
  | "revert"
  | "unset";

export type GapType = number;

export const getFlexStyling = (
  direction: DirectionType = "row",
  justify: JustifyType = "start",
  align: AlignType = "start",
  gap: GapType = 0
) =>
  css({
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap: `${gap}px`,
  });
