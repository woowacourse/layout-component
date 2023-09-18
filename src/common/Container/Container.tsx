import type { Spacing } from '../styles/spacing';
import { spacingStyle } from '../styles/spacing';
import type { CommonProps } from '../types/common';
import type { Alignment, Size } from './style';
import { positionStyle, widthStyle } from './style';

export interface WidthStyle {
  maxWidth?: Size;
  minWidth?: Size;
  fluid?: boolean;
  gutter?: boolean;
}
export interface ContainerProps extends WidthStyle, Spacing, CommonProps {
  position?: Alignment;
}

const Container = ({
  tag = 'div',
  position = 'center',
  maxWidth,
  minWidth,
  fluid = false,
  gutter = false,
  children,
  ...attributes
}: ContainerProps) => {
  const Tag = tag;

  return (
    <Tag
      css={[
        positionStyle(position),
        widthStyle({ maxWidth, minWidth, fluid, gutter }),
        spacingStyle({ ...attributes }),
      ]}
      {...attributes}
    >
      {children}
    </Tag>
  );
};

export default Container;
