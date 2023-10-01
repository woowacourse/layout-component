import { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";

import { CssNumberValue } from "../types";

type Props = {
  /**
   * 컨텐츠들의 최대 너비를 정합니다.
   * @default 0
   */
  minWidth?: CssNumberValue;
  /**
   * 컨텐츠들의 최소 너비를 정합니다.
   */
  maxWidth: CssNumberValue;
} & HTMLAttributes<HTMLDivElement>;

const Container = ({ minWidth = 0, maxWidth, children, ...attributes }: PropsWithChildren<Props>) => {
  const defaultStyle: CSSProperties = {
    margin: "0 auto",
    minWidth: minWidth,
    maxWidth: maxWidth,
  };

  return (
    <div style={defaultStyle} {...attributes}>
      {children}
    </div>
  );
};

export default Container;
