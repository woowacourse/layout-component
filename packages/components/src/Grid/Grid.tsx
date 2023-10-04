import { root, vars } from "./Grid.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import asCssLength from "../asCssLength";
import { Gap, PropsWithHTMLElement } from "../types";

export type GridProps<TElementType extends React.ElementType> =
  PropsWithHTMLElement<
    {
      rows?: number | string;
      columns?: number | string;
      gap?: Gap;
    },
    TElementType
  >;

const Grid = <TElementType extends React.ElementType = 'div'>(props: GridProps<TElementType>) => {
  const { as: Element = 'div', rows, columns, gap, ...restProps } = props;

  return (
    <Element
      {...restProps}
      className={root}
      style={{
        ...restProps.style,
        ...assignInlineVars({
          [vars.rows]: String((typeof rows === 'number' && `repeat(${rows}, 1fr)`) || "initial"),
          [vars.columns]: String((typeof columns === 'number' && `repeat(${columns}, 1fr)`) || "initial"),
          [vars.gap]: asCssLength((typeof gap === 'number' && gap) || "initial"),
          [vars.rowGap]: asCssLength((typeof gap === 'object' && 'row' in gap && gap.row) || "initial"),
          [vars.columnGap]: asCssLength((typeof gap === 'object' && 'column' in gap && gap.column) || "initial"),
        }),
      }}
    />
  );
};

export default Grid;
