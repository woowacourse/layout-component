import { sizeStyle, type Size } from '../styles/size';
import type { Spacing } from '../styles/spacing';
import { spacingStyle } from '../styles/spacing';
import type { CommonProps } from '../types/common';
import type { Alignment } from './style';
import { positionStyle, widthStyle } from './style';

export interface WidthStyle {
  fluid?: boolean;
  gutter?: boolean;
}
export interface ContainerProps extends WidthStyle, Size, Spacing, CommonProps {
  position?: Alignment;
}

const Container = ({
  tag = 'div',
  position = 'center',
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
        widthStyle({ fluid, gutter }),
        sizeStyle({ ...attributes }),
        spacingStyle({ ...attributes }),
      ]}
      {...attributes}
    >
      {children}
    </Tag>
  );
};

export default Container;
