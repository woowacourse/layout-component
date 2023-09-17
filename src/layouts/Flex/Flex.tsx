import styled from 'styled-components';
import {ReactNode} from "react";

export interface FlexProps {
  children: ReactNode;
  direction?: DirectionOptions;
  justify?: JustifyContentOptions;
  align?: AlignItemsOptions;
  gap?: number;
}

type JustifyContentOptions = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right'
type AlignItemsOptions = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end';
type DirectionOptions = 'row' | 'row-reverse' | 'column' | 'column-reverse';

const FlexContainer = styled.div<FlexProps>`
  display: flex;
  ${({direction}) => direction && `flex-direction: ${direction};`}
  ${({justify}) => justify && `justify-content: ${justify};`}
  ${({align}) => align && `align-items: ${align};`}
  ${({gap}) => gap && `gap: ${gap}px;`}
`;

const Flex = ({children, align, justify, direction, gap}: FlexProps) => {
  return <FlexContainer align={align} justify={justify} direction={direction} gap={gap}>{children}</FlexContainer>;
};

export default Flex;
