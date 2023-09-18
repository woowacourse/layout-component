import { CSSProperties, createElement } from "react";
import { Unit } from "../types";

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
  gap: `${number}${Unit}`;
  style?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

const Flex = ({
  children,
  direction,
  justify,
  align,
  gap,
  style,
  as: Element = "div",
}: FlexProps) => {
  const flexStyle: CSSProperties = {
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap,
    ...style,
  };

  return createElement(Element, { style: flexStyle }, children);
};

export default Flex;
