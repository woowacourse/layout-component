import styled from "styled-components";
import { FlexProps } from "./Flex.tsx";

export const StyledFlex = styled.div<{ $styles: Omit<FlexProps, "children"> }>`
  display: flex;
  ${({ $styles }) =>
    $styles.direction && `flex-direction: ${$styles.direction};`}
  ${({ $styles }) => $styles.justify && `justify-content: ${$styles.justify};`}
  ${({ $styles }) => $styles.align && `align-items: ${$styles.align};`}
  ${({ theme, $styles }) =>
    $styles.gap && `gap: ${$styles.gap * theme.spacingUnit}px;`}
`;
