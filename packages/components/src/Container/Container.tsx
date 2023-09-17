import { HTMLAttributes } from "react";
import { content, root, vars } from "./Container.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import cssLength from "../cssLength";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  minWidth?: number;
  maxWidth?: number;
};

const Container = (props: ContainerProps) => {
  const { minWidth, maxWidth, ...divProps } = props;

  return (
    <div className={root}>
      <div
        {...divProps}
        className={content}
        style={{
          ...divProps.style,
          ...assignInlineVars({
            [vars.minWidth]: cssLength(minWidth ?? "initial"),
            [vars.maxWidth]: cssLength(maxWidth ?? "initial"),
          }),
        }}
      />
    </div>
  );
};

export default Container;
