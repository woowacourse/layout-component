import { styled } from 'styled-components';
import { Direction } from '../../../types';

export const Container = styled.div<{
  $direction: Direction;
  $thickness: number;
}>`
  flex-shrink: 0;

  width: ${({ $thickness, $direction = 'row' }) =>
    $direction === 'row' ? `${$thickness}px` : '100%'};
  height: ${({ $thickness, $direction = 'row' }) =>
    $direction === 'column' ? `${$thickness}px` : '100%'};

  background-color: black;

  cursor: ${({ $direction }) =>
    $direction === 'row' ? 'col-resize' : 'row-resize'};
`;
