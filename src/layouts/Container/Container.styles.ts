import styled from "styled-components";
import {ContainerProps} from "./Container.tsx";
import {container} from "./constants.ts";

export const StyledContainer = styled.div<{ style: Omit<ContainerProps,'children'> }>`
  margin-right: auto;
  margin-left: auto;
  ${({style}) => style.maxWidth && `max-width: ${typeof style.maxWidth === "number" ? style.maxWidth + "px" : container[style.maxWidth].maxWidth};`}
  ${({style}) => style.minWidth && `min-width: ${typeof style.minWidth === "number" ? style.minWidth + "px" : container[style.minWidth].minWidth};`}
  padding-right: 12px;
  padding-left: 12px;
`;
