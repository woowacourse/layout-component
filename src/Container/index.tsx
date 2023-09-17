import React from "react";
import "./style.css";

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
    <div className="container">
      <div style={style}>{children}</div>
    </div>
  );
}
