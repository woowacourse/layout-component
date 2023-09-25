import type { FlexBasicLayout } from '../FlexContainer/FlexContainer';
import type { Size } from '../styles/size';
import type { Spacing } from '../styles/spacing';
import type { CommonProps } from '../types/common';
import { flexItemStyle } from './style';

export interface FlexItemProps extends Size, Spacing, CommonProps {
  /** Flex Item 순서 변경 가능 */
  order?: number;
  /** Flex Item 크기를 줄일 수 있음 */
  shrink?: number;
  /** Flex Item 크기를 늘릴 수 있음 */
  grow?: number;
  /** Flex Item 크기를 조절할 수 있음 */
  flex?: string;
  /**
   * Flex Item 배치 변경 가능
    - Flex Container Direction Row: column 축 기준
    - Flex Container Direction Column: row 축 기준
   */
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
