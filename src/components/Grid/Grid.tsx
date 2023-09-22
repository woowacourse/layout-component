import { ComponentPropsWithoutRef, ElementType } from 'react';
import { gridBoxStyle } from './Grid.style';

export type GridProps<Tag extends ElementType> = {
  /**
   * Grid의 HTML 태그
   *
   * @default 'div'
   */
  as?: Tag;
  /**
   * Grid 의 자식요소 세로열 갯수
   *
   * @default 2
   */
  row?: number;
  /**
   * Grid 의 자식요소 가로열 갯수
   *
   * @default 2
   */
  column?: number;
  /**
   * Grid의 자식요소 사이 간격
   *
   * @default '12px'
   */
  gap?: string;
  /**
   * Grid의 자식요소 가로열 사이 간격
   *
   * @default '12px'
   */
  rowGap?: string;
  /**
   * Grid의 자식요소 세로열 사이 간격
   *
   * @default '12px'
   */
  columnGap?: string;
} & ComponentPropsWithoutRef<Tag>;

const Grid = <Tag extends ElementType>({
  as,
  row = 2,
  column = 2,
  gap = '12px',
  rowGap = '12px',
  columnGap = '12px',
  children,
  ...attribute
}: GridProps<Tag>) => {
  const Tag = as || 'div';

  return (
    <Tag
      {...attribute}
      css={gridBoxStyle({ row, column, gap, rowGap, columnGap })}
    >
      {children}
    </Tag>
  );
};

export default Grid;
