import { CSSProperties, PropsWithChildren } from "react";

type Props = {
  minWidth?: number;
  maxWidth: number;
};

const Container = ({ minWidth = 0, maxWidth, children }: PropsWithChildren<Props>) => {
  const defaultStyle: CSSProperties = {
    margin: "0 auto",
    minWidth: `${minWidth}px`,
    maxWidth: `${maxWidth}px`,
  };

  return <div style={defaultStyle}>{children}</div>;
};

export default Container;
