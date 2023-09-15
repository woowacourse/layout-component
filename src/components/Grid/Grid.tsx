import { ComponentPropsWithoutRef, ElementType } from 'react';
import { gridBoxStyle } from './Grid.style';

export interface GridProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Grid의 HTML 태그
   *
   * @default 'div'
   */
  as?: ElementType;
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
}

const Grid = ({
  as = 'div',
  row = 2,
  column = 2,
  gap = '12px',
  rowGap = '12px',
  columnGap = '12px',
  children,
  ...attribute
}: GridProps) => {
  const Tag = as;
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
