import { styled } from 'styled-components';
import type { Direction, HexColor } from '../../types';

export const Container = styled.div<{
  $direction: Direction;
  $themeColor: HexColor;
  $borderThickness: number;
  $horizontalMargin: number;
  $verticalMargin: number;
}>`
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === 'row' ? 'row' : 'column'};

  width: 100%;
  height: 100%;
  margin: ${({ $horizontalMargin, $verticalMargin }) =>
    `${$verticalMargin}px ${$horizontalMargin}px`};

  border: ${({ $themeColor, $borderThickness }) =>
    `${$borderThickness}px solid ${$themeColor}`};

  box-sizing: border-box;
`;

export const SplitPaneItem = styled.div<{
  $direction: Direction;
  $ratio: number;
}>`
  position: relative;
  overflow: hidden;

  width: ${({ $direction, $ratio }) =>
    $direction === 'row' ? `${$ratio}%` : '100%'};
  height: ${({ $direction, $ratio }) =>
    $direction === 'column' ? `${$ratio}%` : '100%'};
`;
