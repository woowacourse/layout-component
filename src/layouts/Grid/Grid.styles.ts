import styled from "styled-components";
import {GridProps} from "./Grid.tsx";

export const StyledGrid = styled.div<{ styles: Omit<GridProps, 'children'> }>`
  display: grid;
  grid-template-rows: repeat(${({styles}) => styles.rows}, 1fr);
  grid-template-columns: repeat(${({styles}) => styles.columns}, 1fr);
  ${({styles, theme}) => styles.gap && `gap: ${styles.gap * theme.spacingUnit}px;`}
`;
