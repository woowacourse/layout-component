import { CSSProperties, ReactNode, createElement } from "react";
import { Unit } from "../types";
interface ContainerProps {
  children: ReactNode;
  minWidth: `${number}${Unit}`;
  maxWidth: `${number}${Unit}`;
  style?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

const Container = ({
  children,
  minWidth,
  maxWidth,
  style,
  as: Element = "div",
}: ContainerProps) => {
  const containerStyle: CSSProperties = {
    minWidth,
    maxWidth,
    ...style,
  };

  return createElement(Element, { style: containerStyle }, children);
};

export default Container;
