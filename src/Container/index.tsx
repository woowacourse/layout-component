import React from "react";
import "./style.css";

interface ContainerProps extends React.PropsWithChildren {
  style: { minWidth: string; maxWidth: string; padding: string };
}

export default function Container({ children, style }: ContainerProps) {
  return (
    <div className="container">
      <div style={style}>{children}</div>
    </div>
  );
}
