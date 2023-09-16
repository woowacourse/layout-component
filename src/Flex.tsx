import React, { ReactNode } from "react";

interface Props {
  direction?: "row" | "column";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "flex-end" | "center" | "stretch";
  gap?: number;
  children?: ReactNode;
}

function Flex({
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  gap = 0,
  children,
}: Props) {
  const flexContainerStyle = {
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap: `${gap}px`,
  };

  return (
    <div style={flexContainerStyle}>
      {React.Children.map(children, (child) => (
        <>{child}</>
      ))}
    </div>
  );
}

export default Flex;
