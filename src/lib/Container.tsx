import { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";

import { CssNumberValue } from "../types";

type Props = {
  minWidth?: CssNumberValue;
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
