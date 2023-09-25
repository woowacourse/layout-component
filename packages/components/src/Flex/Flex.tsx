import type * as CSS from "csstype";
import { root, vars } from "./Flex.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import asCssLength from "../asCssLength";
import { Gap, PropsWithHTMLElement } from "../types";

export type FlexProps<TElementType extends React.ElementType> =
  PropsWithHTMLElement<
    {
      direction?: CSS.StandardLonghandProperties["flexDirection"];
      justify?: CSS.StandardLonghandProperties["justifyContent"];
      align?: CSS.StandardLonghandProperties["alignItems"];
      wrap?: CSS.StandardLonghandProperties['flexWrap'];
      alignContent?: CSS.StandardLonghandProperties['alignContent'];
      gap?: Gap;
    },
    TElementType
  >;

const Flex = <TElementType extends React.ElementType = 'div'>(props: FlexProps<TElementType>) => {
  const { as: Element = 'div', direction, justify, align, alignContent, wrap, gap, ...restProps } = props;

  return (
    <Element
      {...restProps}
      className={root}
      style={{
        ...restProps.style,
        ...assignInlineVars({
          [vars.flexDirection]: direction ?? "initial",
          [vars.justifyContent]: justify ?? "initial",
          [vars.alignItems]: align ?? "initial",
          [vars.alignContent]: alignContent ?? 'initial',
          [vars.flexWrap]: wrap ?? 'initial',
          [vars.gap]: asCssLength((typeof gap === 'number' && gap) || "initial"),
          [vars.rowGap]: asCssLength((typeof gap === 'object' && 'row' in gap && gap.row) || "initial"),
          [vars.columnGap]: asCssLength((typeof gap === 'object' && 'column' in gap && gap.column) || "initial"),
        }),
      }}
    />
  );
};

export default Flex;
