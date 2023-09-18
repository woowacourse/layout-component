// Flex.tsx
import styled from 'styled-components';

interface FlexProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  gap?: number;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  gap: ${(props) => (props.gap ? `${props.gap}px` : 0)};
`;

export default Flex;
