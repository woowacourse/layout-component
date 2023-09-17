import styled from "styled-components";
import {FlexProps} from "./Flex.tsx";

export const StyledFlex = styled.div<FlexProps>`
  display: flex;
  ${({direction}) => direction && `flex-direction: ${direction};`}
  ${({justify}) => justify && `justify-content: ${justify};`}
  ${({align}) => align && `align-items: ${align};`}
  ${({gap}) => gap && `gap: ${gap}px;`}
`;
