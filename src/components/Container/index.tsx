import type { ContainerProps } from '../../types/component';
import { filterUndefinedProps } from '../../utils/css';

export default function Container({
  display,
  position,
  top,
  right,
  bottom,
  left,
  width = '100%',
  height = '100%',
  minWidth,
  maxWidth = '100%',
  margin = '0 auto',
  padding,
  border,
  borderRadius,
  backgroundColor,
  color,
  overflow,
  cursor,
  opacity,
  zIndex,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      style={filterUndefinedProps({
        display,
        position,
        top,
        right,
        bottom,
        left,
        width,
        height,
        minWidth,
        maxWidth,
        margin,
        padding,
        border,
        borderRadius,
        backgroundColor,
        color,
        overflow,
        cursor,
        opacity,
        zIndex,
      })}
      {...rest}
    >
      {children}
    </div>
  );
}
