import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type DIRECTION = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type JUSTIFY = 'center' | 'flex-start' | 'flex-end' | 'space-between';
type ALIGN = 'center' | 'flex-start' | 'flex-end';

interface CSSFlexProps extends PropsWithChildren {
  direction?: DIRECTION;
  justify?: JUSTIFY;
  align?: ALIGN;
  gap?: number;
  padding?: number;
}

const Flex = ({
  direction = 'row',
  justify = 'center',
  align = 'center',
  gap,
  padding,
  children,
}: CSSFlexProps) => {
  return (
    <FlexLayout direction={direction} justify={justify} align={align} gap={gap} padding={padding}>
      {children}
    </FlexLayout>
  );
};

const FlexLayout = styled.div<CSSFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap}px;

  width: 100%;
  height: 100%;
  padding: ${(props) => props.padding}px;
`;
export default Flex;
