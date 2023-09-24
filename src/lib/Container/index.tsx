import React from "react";

interface ContainerProps extends React.PropsWithChildren {
  minWidth: string;
  maxWidth: string;
  padding: number;
}

export default function Container({
  children,
  minWidth,
  maxWidth,
  padding,
}: ContainerProps) {
  const style = {
    minWidth,
    maxWidth,
    padding: `${padding}px`,
    margin: "0 auto",
  };

  return <div style={style}>{children}</div>;
}
