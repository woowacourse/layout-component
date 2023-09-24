import { css } from "@emotion/react";

export const getCenterStyling = (
  minWidth: number = 0,
  maxWidth: number = 2048
) =>
  css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    textAlign: "center",
    minWidth: `${minWidth}px`,
    maxWidth: `${maxWidth}px`,
  });
