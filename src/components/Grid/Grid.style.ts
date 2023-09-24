import { css } from "@emotion/react";

export type RowsType = number | string;
export type ColumnsType = number | string;

export type TemplateAreasType = string;
export type TemplateRowsType = string;
export type TemplateColumnsType = string;

export type AreaType = string;
export type GapType = number | string;
export type RowGapType = number | string;
export type ColumnGapType = number | string;

export const getGridStyling = (
  templateAreas: TemplateAreasType = "none",
  templateRows: TemplateRowsType = "none",
  templateColumns: TemplateColumnsType = "none",
  rowGap: RowGapType = 0,
  columnGap: ColumnGapType = 0,
  gap: GapType = 0
) =>
  css({
    display: "grid",
    gridTemplateAreas: templateAreas,
    gridTemplateRows: templateRows,
    gridTemplateColumns: templateColumns,
    gap: `${gap}px`,
    rowGap,
    columnGap,
  });

export const getGridItemStyling = (
  area: AreaType = "auto",
  rows: RowsType = "auto",
  columns: ColumnsType = "auto"
) =>
  css({
    gridArea: area,
    gridRow: rows,
    gridColumn: columns,
  });
