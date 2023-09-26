import { styled } from 'styled-components';
import { Size } from '../../types';
import { stringifySize } from '../../utils/stringifySize';

export const Container = styled.div<{ $width: Size; $height: Size }>`
  width: ${({ $width }) => `${stringifySize($width)}`};
  height: ${({ $height }) => `${stringifySize($height)}`};
`;

export const Root = styled.div<{
  $direction: 'row' | 'column';
  $resizerX: number;
  $resizerY: number;
}>`
  display: inline-flex;
  position: relative;

  width: 100%;
  height: 100%;

  & > div > div:first-child {
    width: ${({ $direction, $resizerX }) =>
      $direction === 'row' ? `${$resizerX}px` : '100%'} !important;
    height: ${({ $direction, $resizerY }) =>
      $direction === 'column' ? `${$resizerY}px` : '100%'} !important;
  }

  & > div > div:nth-child(2) {
    flex-basis: 0;
    flex-grow: 1;
  }
`;

export const ChildrenContainer = styled.div<{ $direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === 'row' ? 'row' : 'column'};

  width: 100%;
  height: 100%;
`;

export const Resizer = styled.div<{
  $direction: 'row' | 'column';
  $top: number;
  $left: number;
}>`
  position: absolute;
  top: 0;
  left: 0;

  width: ${({ $direction }) => ($direction === 'row' ? '15px' : '100%')};
  height: ${({ $direction }) => ($direction === 'column' ? '15px' : '100%')};

  background-color: black;

  transform-origin: center;
  transform: ${({ $top, $left }) => `translate(${$left}px, ${$top}px)`};

  &:hover,
  &:active {
    transform: ${({ $direction, $top, $left }) =>
      $direction === 'row'
        ? `translate(${$left}px, ${$top}px) scaleX(150%)`
        : `translate(${$left}px, ${$top}px) scaleY(150%)`};
    cursor: ${({ $direction }) =>
      $direction === 'row' ? 'col-resize' : 'row-resize'};
  }
`;
