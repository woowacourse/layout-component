import React from "react";

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
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap: `${gap}px`,
  };

  return <div style={style}>{children}</div>;
}
