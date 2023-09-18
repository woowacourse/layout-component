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
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={style}>{children}</div>
    </div>
  );
}
