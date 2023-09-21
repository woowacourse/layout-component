import type { CSSProperties, ComponentPropsWithoutRef, ElementType } from 'react';

import { css } from '@emotion/react';

import type { ResponsiveValue } from '@type/index';

import { generateMediaQueryStyles } from '@utils/mediaQuery';

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
  rows?: string | number | ResponsiveValue;
  /**
   * Grid 컴포넌트의 열의 크기를 지정하는 방법
   */
  columns?: string | number | ResponsiveValue;
  /**
   * Grid 컴포넌트 내 아이템들 사이의 행 간격
   *
   * @default 'normal'
   */
  rowGap?: string | number | ResponsiveValue;
  /**
   * Grid 컴포넌트 내 아이템들 사이의 열 간격
   *
   * @default 'normal'
   */
  columnGap?: string | number | ResponsiveValue;
  /**
   * Grid 컴포넌트 내 아이템들 사이의 간격
   *
   * @default 'normal'
   */
  gap?: string | number | ResponsiveValue;
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

  const responsiveProperties = {
    gridTemplateRows: rows,
    gridTemplateColumns: columns,
    rowGap: rowGap,
    columnGap: columnGap,
    gap: gap,
  };

  const mediaQueries: { [key: string]: CSSProperties } =
    generateMediaQueryStyles(responsiveProperties);

  return (
    <Tag
      css={css({
        display: 'grid',
        ...mediaQueries['default'],
        ...mediaQueries,
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
  area?: string | ResponsiveValue;
  /**
   * Grid의 헹에 대한 Item 컴포넌트의 위치 설정
   *
   * @default 'auto / auto'
   */
  row?: string | number | ResponsiveValue;
  /**
   * Grid의 열에 대한 Item 컴포넌트의 위치 설정
   *
   * @default 'auto / auto'
   */
  column?: string | number | ResponsiveValue;
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

  const responsiveProperties = {
    gridArea: area,
    gridRow: row,
    gridColumn: column,
  };

  const mediaQueries: { [key: string]: CSSProperties } =
    generateMediaQueryStyles(responsiveProperties);

  return (
    <Tag css={{ ...mediaQueries['default'], ...mediaQueries }} {...attributes}>
      {children}
    </Tag>
  );
};

export default Grid;
