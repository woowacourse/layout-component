interface FlexProps {
  children: React.ReactNode;
  direction: "row" | "column";
  justify:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  align: "flex-start" | "flex-end" | "center" | "stretch";
  gap?: number;
}

const Flex = ({ children, direction, justify, align, gap = 0 }: FlexProps) => {
  const flexStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap: `${gap}px`,
  };

  return <div style={flexStyle}>{children}</div>;
};

export default Flex;
