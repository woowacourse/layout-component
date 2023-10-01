import { ComponentPropsWithoutRef, CSSProperties } from 'react';

export interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  display?: 'inline' | 'block' | 'inline-block' | 'none';
  position?: CSSProperties['position'];
  top?: CSSProperties['top'];
  right?: CSSProperties['right'];
  bottom?: CSSProperties['bottom'];
  left?: CSSProperties['left'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  minWidth?: CSSProperties['minWidth'];
  maxWidth?: CSSProperties['maxWidth'];
  margin?: CSSProperties['margin'];
  padding?: CSSProperties['padding'];
  border?: CSSProperties['border'];
  borderRadius?: CSSProperties['borderRadius'];
  backgroundColor?: CSSProperties['backgroundColor'];
  color?: CSSProperties['color'];
  overflow?: CSSProperties['overflow'];
  cursor?: CSSProperties['cursor'];
  opacity?: CSSProperties['opacity'];
  zIndex?: CSSProperties['zIndex'];
}
