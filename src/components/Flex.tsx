import type { ComponentPropsWithoutRef, ElementType } from 'react';

import { css } from '@emotion/react';

import type {
  ContentDistribution,
  ContentPosition,
  FlexContentPosition,
  SelfPosition,
} from '@type/index';

interface FlexProps extends ComponentPropsWithoutRef<ElementType> {
  /**
   * Flex 컴포넌트가 사용할 HTML 태그
   *
   * @default 'div'
   */
  tag?: ElementType;
  /**
   * Flex 컴포넌트 내 아이템을 배치할 때 사용할 주축 및 방향
   *
   * @default 'row'
   */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  /**
   * Flex 컴포넌트 내 아이템을 한 줄 또는 여러 줄로 배열 방법
   *
   * @default 'nowrap'
   */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /**
   * Flex 컴포넌트 내 아이템의 수평 방향 정렬 방식
   *
   * @default 'flex-start'
   */
  justify?:
    | ContentDistribution
    | ContentPosition
    | FlexContentPosition
    | 'left'
    | 'normal'
    | 'right';
  /**
   * Flex 컴포넌트 내 아이템의 수직 방향 정렬 방식
   *
   * @default 'stretch'
   */
  align?: SelfPosition | FlexContentPosition | 'baseline' | 'normal' | 'stretch';
  /**
   * Flex 컴포넌트 내 아이템들 사이의 행 간격
   *
   * @default 'normal'
   */
  rowGap?: string | number;
  /**
   * Flex 컴포넌트 내 아이템들 사이의 열 간격
   *
   * @default 'normal'
   */
  columnGap?: string | number;
  /**
   * Flex 컴포넌트 내 아이템들 사이의 간격
   *
   * @default 'normal'
   */
  gap?: string | number;
}

function Flex({
  tag = 'div',
  direction,
  wrap,
  justify,
  align,
  rowGap,
  columnGap,
  gap,
  children,
  ...attributes
}: FlexProps) {
  const Tag = tag;

  return (
    <Tag
      css={css({
        display: 'flex',
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent: justify,
        alignItems: align,
        rowGap,
        columnGap,
        gap,
      })}
      {...attributes}
    >
      {children}
    </Tag>
  );
}

export default Flex;
