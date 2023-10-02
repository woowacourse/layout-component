import { styled } from 'styled-components';
import { Direction } from '../../types';

export const Container = styled.div<{ $direction: Direction }>`
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === 'row' ? 'row' : 'column'};

  width: 400px;
  height: 300px;
`;

export const SplitPaneItem = styled.div<{
  $direction: Direction;
  $ratio: number;
}>`
  width: ${({ $direction, $ratio }) =>
    $direction === 'row' ? `${$ratio}%` : '100%'};
  height: ${({ $direction, $ratio }) =>
    $direction === 'column' ? `${$ratio}%` : '100%'};
`;
