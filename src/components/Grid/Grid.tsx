import { getGridItemStyling, getGridStyling } from "./Grid.style";
import type {
  AreaType,
  ColumnsType,
  RowsType,
  GapType,
  RowGapType,
  TemplateAreasType,
  TemplateColumnsType,
  TemplateRowsType,
  ColumnGapType,
} from "./Grid.style";
import type { ComponentPropsWithoutRef, ElementType } from "react";

export interface CenterProps extends ComponentPropsWithoutRef<ElementType> {
  /**
   * Grid 컴포넌트가 사용할 HTML 태그
   *
   * @default 'div'
   */
  tag?: ElementType;
  templateAreas?: TemplateAreasType;
  templateRows?: TemplateRowsType;
  templateColumns?: TemplateColumnsType;
  rowGap?: RowGapType;
  columnGap?: ColumnGapType;
  gap?: GapType;
}

const Grid = ({
  tag = "div",
  children,
  templateAreas,
  templateRows,
  templateColumns,
  rowGap,
  columnGap,
  gap,
  ...attributes
}: CenterProps) => {
  const Tag = tag;

  return (
    <Tag
      css={getGridStyling(
        templateAreas,
        templateRows,
        templateColumns,
        rowGap,
        columnGap,
        gap
      )}
      {...attributes}
    >
      {children}
    </Tag>
  );
};

export interface GridItemProps extends ComponentPropsWithoutRef<ElementType> {
  tag?: ElementType;
  area?: AreaType;
  rows?: RowsType;
  columns?: ColumnsType;
}

Grid.Item = ({
  tag = "div",
  children,
  area,
  rows,
  column,
  ...attributes
}: GridItemProps) => {
  const Tag = tag;

  return <Tag css={getGridItemStyling(area, rows, column)}>{children}</Tag>;
};

export default Grid;
