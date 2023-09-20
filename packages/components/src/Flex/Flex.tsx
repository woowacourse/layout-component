import type * as CSS from "csstype";
import { root, vars } from "./Flex.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import asCssLength from "../asCssLength";
import { PropsWithHTMLElement } from "../types";

export type FlexProps<TElementType extends React.ElementType> =
  PropsWithHTMLElement<
    {
      direction?: CSS.StandardLonghandProperties["flexDirection"];
      justify?: CSS.StandardLonghandProperties["justifyContent"];
      align?: CSS.StandardLonghandProperties["alignItems"];
      gap?: number | string;
    },
    TElementType
  >;

const Flex = <TElementType extends React.ElementType = 'div',>(props: FlexProps<TElementType>) => {
  const { as: Element = 'div', direction, justify, align, gap, ...divProps } = props;

  return (
    <Element
      {...divProps}
      className={root}
      style={{
        ...divProps.style,
        ...assignInlineVars({
          [vars.flexDirection]: direction ?? "initial",
          [vars.justifyContent]: justify ?? "initial",
          [vars.alignItems]: align ?? "initial",
          [vars.gap]: asCssLength(gap ?? "initial"),
        }),
      }}
    />
  );
};

export default Flex;
