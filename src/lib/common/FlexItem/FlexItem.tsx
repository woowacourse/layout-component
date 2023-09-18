import type { FlexBasicLayout } from '../FlexContainer/FlexContainer';
import type { Spacing } from '../styles/spacing';
import type { CommonProps } from '../types/common';
import { flexItemStyle } from './style';

export interface FlexItemProps extends Spacing, CommonProps {
  order?: number;
  shrink?: number;
  grow?: number;
  flex?: string;
  alignSelf?: FlexBasicLayout | 'stretch';
}

const FlexItem = ({
  order,
  shrink,
  grow,
  flex,
  alignSelf,
  tag = 'div',
  children,
  ...attributes
}: FlexItemProps) => {
  const Tag = tag;

  return (
    <Tag css={flexItemStyle({ order, shrink, grow, flex, alignSelf })} {...attributes}>
      {children}
    </Tag>
  );
};

export default FlexItem;
