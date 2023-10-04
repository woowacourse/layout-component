import { styled } from 'styled-components';
import type { Direction, HexColor } from '../../../types';

export const Container = styled.div<{
  $direction: Direction;
  $thickness: number;
  $themeColor: HexColor;
}>`
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === 'row' ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: ${({ $thickness }) => `${$thickness / 3}px`};

  width: ${({ $thickness, $direction = 'row' }) =>
    $direction === 'row' ? `${$thickness}px` : '100%'};
  height: ${({ $thickness, $direction = 'row' }) =>
    $direction === 'column' ? `${$thickness}px` : '100%'};

  border: ${({ $thickness, $themeColor = '#be33ff' }) =>
    `${$thickness / 15}px solid ${$themeColor}`};
  background-color: black;

  filter: brightness(0.65);
  cursor: ${({ $direction }) =>
    $direction === 'row' ? 'ew-resize' : 'ns-resize'};
  box-sizing: border-box;
  transition: 0.2s;

  &:hover,
  &:active {
    filter: brightness(1);
    box-shadow: ${({ $thickness, $themeColor }) =>
      `0 0 ${$thickness / 2}px ${$themeColor}`};
  }

  &:active {
    box-shadow: ${({ $thickness, $themeColor }) =>
      `0 0 ${$thickness / 2}px ${$themeColor}`};
  }
`;

export const Diamond = styled.span<{ $size: number; $themeColor: HexColor }>`
  display: inline-block;

  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};

  background-color: ${({ $themeColor }) => $themeColor};
  transform: rotate(45deg);
`;
