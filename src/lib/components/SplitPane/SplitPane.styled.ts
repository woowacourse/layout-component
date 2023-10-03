import { styled } from 'styled-components';
import type { Direction, HexColor, Size } from '../../types';
import { stringifySize } from '../utils/stringifySize';

export const Container = styled.div<{
  $direction: Direction;
  $themeColor: HexColor;
  $borderThickness: number;
  $horizontalMargin: Size;
  $verticalMargin: Size;
  $width: Size;
  $height: Size;
}>`
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === 'row' ? 'row' : 'column'};

  width: ${({ $width }) => stringifySize($width)};
  height: ${({ $height }) => stringifySize($height)};
  margin: ${({ $horizontalMargin, $verticalMargin }) =>
    `${stringifySize($verticalMargin)} ${stringifySize($horizontalMargin)}`};

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
