import type * as CSS from "csstype";
import { HTMLAttributes } from "react";
import { root, vars } from "./Flex.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import cssLength from "../cssLength";

export type FlexProps = HTMLAttributes<HTMLDivElement> & {
  direction?: CSS.StandardLonghandProperties["flexDirection"];
  justify?: CSS.StandardLonghandProperties["justifyContent"];
  align?: CSS.StandardLonghandProperties["alignItems"];
  gap?: number;
};

const Flex = (props: FlexProps) => {
  const { direction, justify, align, gap, ...divProps } = props;

  return (
    <div
      {...divProps}
      className={root}
      style={{
        ...divProps.style,
        ...assignInlineVars({
          [vars.flexDirection]: direction ?? "initial",
          [vars.justifyContent]: justify ?? "initial",
          [vars.alignItems]: align ?? "initial",
          [vars.gap]: cssLength(gap ?? "initial"),
        }),
      }}
    />
  );
};

export default Flex;
