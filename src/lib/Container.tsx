import { CSSProperties, PropsWithChildren } from "react";

type Props = {
  minWidth?: number;
  maxWidth: number;

  $style?: CSSProperties;
};

const Container = ({ minWidth = 0, maxWidth, $style, children }: PropsWithChildren<Props>) => {
  const defaultStyle: CSSProperties = {
    margin: "0 auto",
    minWidth: `${minWidth}px`,
    maxWidth: `${maxWidth}px`,

    ...$style,
  };

  return <div style={defaultStyle}>{children}</div>;
};

export default Container;
