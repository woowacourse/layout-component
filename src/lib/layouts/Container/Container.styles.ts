import styled from "styled-components";
import { ContainerProps } from "./Container.tsx";
import { container } from "./constants.ts";

export const StyledContainer = styled.div<{
  $styles: Omit<ContainerProps, "children">;
}>`
  margin-right: auto;
  margin-left: auto;
  ${({ $styles }) =>
    $styles.maxWidth &&
    `max-width: ${
      typeof $styles.maxWidth === "number"
        ? $styles.maxWidth + "px"
        : container[$styles.maxWidth].maxWidth
    };`}
  ${({ $styles }) =>
    $styles.minWidth &&
    `min-width: ${
      typeof $styles.minWidth === "number"
        ? $styles.minWidth + "px"
        : container[$styles.minWidth].minWidth
    };`}
  padding-right: 12px;
  padding-left: 12px;
`;
