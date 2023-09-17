import React from "react";
import "./style.css";

interface FlexProps extends React.PropsWithChildren {
  direction: "row" | "column";
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "center" | "flex-start" | "flex-end" | "stretch";
  flexWrap?: "nowrap" | "wrap";
  gap: number;
}

export default function Flex({
  direction,
  justify,
  align,
  gap,
  children,
}: FlexProps) {
  const style = {
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap: `${gap}px`,
  };

  return (
    <div className="flex" style={style}>
      {children}
    </div>
  );
}
