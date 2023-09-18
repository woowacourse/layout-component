import { css, styled } from 'styled-components';

type Display = 'none' | 'block' | 'inline' | 'inline-block';
type Overflow = 'auto' | 'hidden' | 'scroll' | 'visible';
type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
type Cursor =
  | 'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'grab'
  | 'grabbing'
  | 'e-resize'
  | 'n-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 's-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'w-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'col-resize'
  | 'row-resize'
  | 'all-scroll'
  | 'zoom-in'
  | 'zoom-out';

export interface Props {
  display?: Display;
  width?: string | number;
  height?: string | number;
  $minWidth?: string | number;
  $minHeight?: string | number;
  $maxWidth?: string | number;
  $maxHeight?: string | number;
  padding?: string | number;
  margin?: string | number;
  overflow?: Overflow;
  position?: Position;
  right?: string | number;
  top?: string | number;
  left?: string | number;
  bottom?: string | number;
  cursor?: Cursor;
  opacity?: string;
  $zIndex?: number;
  $backgroundColor?: string;
  responsive?: boolean;
}

const Container = styled.div<Props>`
  display: ${({ display }) => display || 'block'};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-width: ${({ $minWidth }) => $minWidth};
  min-height: ${({ $minHeight }) => $minHeight};
  max-width: ${({ $maxWidth }) => $maxWidth};
  max-height: ${({ $maxHeight }) => $maxHeight};
  overflow: ${({ overflow }) => overflow};
  position: ${({ position }) => position};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
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
