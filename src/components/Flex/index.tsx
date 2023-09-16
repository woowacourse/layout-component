import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface FlexProps extends PropsWithChildren {
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align: 'center' | 'start' | 'end';
  gap: number;
}

const FlexComponent = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => `${gap}px`};
`;

const Flex = ({
  direction = 'row',
  justify = 'start',
  align = 'start',
  gap = 0,
  children,
}: Partial<FlexProps>) => {
  return (
    <FlexComponent
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
    >
      {children}
    </FlexComponent>
  );
};

export default Flex;
