import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type DIRECTION = 'row' | 'column';
type JUSTIFY =
  | 'center'
  | 'baseline'
  | 'flex-start'
  | 'flex-end'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';
type ALIGN = 'center' | 'flex-start' | 'flex-end';

interface CSSFlexProps extends PropsWithChildren {
  direction: DIRECTION;
  justify: JUSTIFY;
  align: ALIGN;
  gap: number;
  padding?: number;
}

const Flex = ({ direction, justify, align, gap, padding, children }: CSSFlexProps) => {
  return (
    <FlexLayout direction={direction} justify={justify} align={align} gap={gap} padding={padding}>
      {children}
    </FlexLayout>
  );
};

export default Flex;

const FlexLayout = styled.div<CSSFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap}px;

  width: 100%;
  height: 100%;
  ${(props) => props.padding && `padding: ${props.padding}px`}
`;
