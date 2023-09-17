import {ReactNode} from "react";
import {StyledFlex} from "./Flex.styles.ts";

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

const Flex = ({children, align, justify, direction, gap}: FlexProps) => {
  return <StyledFlex align={align} justify={justify} direction={direction} gap={gap}>{children}</StyledFlex>;
};

export default Flex;
