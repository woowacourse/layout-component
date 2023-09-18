import styled from "styled-components";
import {GridProps} from "./Grid.tsx";

export const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-rows: repeat(${({rows}) => rows}, 1fr);
  grid-template-columns: repeat(${({columns}) => columns}, 1fr);
  ${({theme, gap}) => gap && `gap: ${gap * theme.spacingUnit}px;`}
`;
