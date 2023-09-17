import type { ComponentPropsWithoutRef, ElementType } from 'react';

import { css } from '@emotion/react';

interface GridProps extends ComponentPropsWithoutRef<ElementType> {
  /**
   * Grid 컴포넌트가 사용할 HTML 태그
   *
   * @default 'div'
   */
  tag?: ElementType;
  /**
   * Grid 컴포넌트의 행의 크기를 지정하는 방법
   */
  rows?: string | number;
  /**
   * Grid 컴포넌트의 열의 크기를 지정하는 방법
   */
  columns?: string | number;
  /**
   * Grid 컴포넌트 내 아이템들 사이의 행 간격
   *
   * @default 'normal'
   */
  rowGap?: string | number;
  /**
   * Grid 컴포넌트 내 아이템들 사이의 열 간격
   *
   * @default 'normal'
   */
  columnGap?: string | number;
  /**
   * Grid 컴포넌트 내 아이템들 사이의 간격
   *
   * @default 'normal'
   */
  gap?: string | number;
}

function Grid({
  tag = 'div',
  rows,
  columns,
  rowGap,
  columnGap,
  gap,
  children,
  ...attributes
}: GridProps) {
  const Tag = tag;

  const gridTemplateRows = String(rows)?.match(/^\d+$/) ? `repeat(${rows}, minmax(0, 1fr))` : rows;
  const gridTemplateColumns = String(columns)?.match(/^\d+$/)
    ? `repeat(${columns}, minmax(0, 1fr))`
    : columns;

  return (
    <Tag
      css={css({
        display: 'grid',
        gridTemplateRows,
        gridTemplateColumns,
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

interface ItemProps extends ComponentPropsWithoutRef<ElementType> {
  /**
   * Item 컴포넌트가 사용할 HTML 태그
   *
   * @default 'div'
   */
  tag?: ElementType;
  /**
   * Grid에 대한 Item 컴포넌트의 위치 설정
   *
   * @default 'auto / auto'
   */
  area?: string;
  /**
   * Grid의 헹에 대한 Item 컴포넌트의 위치 설정
   *
   * @default 'auto / auto'
   */
  row?: string | number;
  /**
   * Grid의 열에 대한 Item 컴포넌트의 위치 설정
   *
   * @default 'auto / auto'
   */
  column?: string | number;
}

Grid.Item = function GridItem({
  tag = 'div',
  area,
  row,
  column,
  children,
  ...attributes
}: ItemProps) {
  const Tag = tag;

  return (
    <Tag css={{ gridArea: area, gridRow: row, gridColumn: column }} {...attributes}>
      {children}
    </Tag>
  );
};

export default Grid;
