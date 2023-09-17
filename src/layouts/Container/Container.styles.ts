import styled from "styled-components";
import { ContainerProps } from "./Container.tsx";
import { container } from "./constants.ts";

export const StyledContainer = styled.div<ContainerProps>`
  margin-right: auto;
  margin-left: auto;
  ${({ maxWidth }) =>
    maxWidth &&
    `max-width: ${
      typeof maxWidth === "number"
        ? maxWidth + "px"
        : container[maxWidth].maxWidth
    };`}
  ${({ minWidth }) =>
    minWidth &&
    `min-width: ${
      typeof minWidth === "number"
        ? minWidth + "px"
        : container[minWidth].minWidth
    };`}
  padding-right: 12px;
  padding-left: 12px;
`;
