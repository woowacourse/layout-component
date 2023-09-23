import { CSSProperties, css, styled } from 'styled-components';

type Display = 'none' | 'block' | 'inline' | 'inline-block';

export interface ContainerProps {
  display?: Display;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  $minWidth?: CSSProperties['minWidth'];
  $minHeight?: CSSProperties['minHeight'];
  $maxWidth?: CSSProperties['maxWidth'];
  $maxHeight?: CSSProperties['maxHeight'];
  padding?: CSSProperties['padding'];
  margin?: CSSProperties['margin'];
  overflow?: CSSProperties['overflow'];
  position?: CSSProperties['position'];
  right?: CSSProperties['right'];
  top?: CSSProperties['top'];
  left?: CSSProperties['left'];
  bottom?: CSSProperties['bottom'];
  cursor?: CSSProperties['cursor'];
  opacity?: CSSProperties['opacity'];
  $zIndex?: CSSProperties['zIndex'];
  $backgroundColor?: CSSProperties['backgroundColor'];
  responsive?: boolean;
}

const getWidth = (width: number | string) =>
  typeof width === 'number' ? `${width}px` : width;
const getHeight = (height: number | string) =>
  typeof height === 'number' ? `${height}px` : height;
const getPositionOption = (option: number | string) =>
  typeof option === 'number' ? `${option}px` : option;

const Container = styled.div<ContainerProps>`
  display: ${({ display }) => display || 'block'};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin || '0 auto'};
  width: ${({ width }) => width && getWidth(width)};
  height: ${({ height }) => height && getHeight(height)};
  min-width: ${({ $minWidth }) => $minWidth && getWidth($minWidth)};
  min-height: ${({ $minHeight }) => $minHeight && getHeight($minHeight)};
  max-width: ${({ $maxWidth }) => $maxWidth && getWidth($maxWidth)};
  max-height: ${({ $maxHeight }) => $maxHeight && getHeight($maxHeight)};
  overflow: ${({ overflow }) => overflow};
  position: ${({ position }) => position};
  right: ${({ right }) => right && getPositionOption(right)};
  top: ${({ top }) => top && getPositionOption(top)};
  left: ${({ left }) => left && getPositionOption(left)};
  bottom: ${({ bottom }) => bottom && getPositionOption(bottom)};
  cursor: ${({ cursor }) => cursor};
  opacity: ${({ opacity }) => opacity};
  z-index: ${({ $zIndex }) => $zIndex};
  background-color: ${({ $backgroundColor }) => $backgroundColor};

  ${({ responsive, $minWidth, width, $maxWidth }) =>
    responsive &&
    css`
      @media (max-width: ${$minWidth || width || $maxWidth}) {
        width: 100%;
      }
    `};
`;

export default Container;
