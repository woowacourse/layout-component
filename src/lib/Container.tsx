import { CSSProperties, PropsWithChildren } from "react";

import { CssNumberValue } from "../types";

type Props = {
  minWidth?: CssNumberValue;
  maxWidth: CssNumberValue;

  $style?: CSSProperties;
};

const Container = ({ minWidth = 0, maxWidth, $style, children }: PropsWithChildren<Props>) => {
  const defaultStyle: CSSProperties = {
    margin: "0 auto",
    minWidth: minWidth,
    maxWidth: maxWidth,

    ...$style,
  };

  return <div style={defaultStyle}>{children}</div>;
};

export default Container;
