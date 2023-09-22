import { ComponentPropsWithoutRef, ElementType } from 'react';

interface GridProps extends ComponentPropsWithoutRef<ElementType> {
  /**
   * Grid 컴포넌트의 태그를 변경합니다.
   * @default div
   */
  as?: ElementType;
  /**
   * `grid-template-rows` 스타일 프로퍼티를 정의합니다.
   */
  rows?: number;
  /**
   * `grid-template-columns` 스타일 프로퍼티를 정의합니다.
   */
  columns?: number;
  /**
   * `grid-row-gap` 스타일 프로퍼티를 정의합니다.
   * @default 0
   */
  rowGap?: number;
  /**
   * `grid-column-gap` 스타일 프로퍼티를 정의합니다.
   * @default 0
   */
  columnGap?: number;
  /**
   * `gap` 스타일 프로퍼티를 정의합니다.
   * @default 0
   */
  gap?: number;
}

const Grid = ({ as = 'div', rows, columns, rowGap, columnGap, gap, children, ...attributes }: GridProps) => {
  const Component = as;

  const gridTemplateRows = String(rows)?.match(/^\d+$/) ? `repeat(${rows}, minmax(0, 1fr))` : rows;
  const gridTemplateColumns = String(columns)?.match(/^\d+$/) ? `repeat(${columns}, minmax(0, 1fr))` : columns;

  return (
    <Component
      css={[
        {
          display: 'grid',
          gridTemplateRows,
          gridTemplateColumns,
          rowGap,
          columnGap,
          gap,
        },
        { ...attributes },
      ]}
    >
      {children}
    </Component>
  );
};

export default Grid;
