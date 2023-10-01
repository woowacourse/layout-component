import { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
import { CssNumberValue } from "../types";

type CommonAlignmentValues = "center" | "start" | "end" | "flex-start" | "flex-end" | "stretch";

type Props = {
  /**
   * 요소의 방향을 지정합니다.
   * @default 'row'
   */
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  /**
   * 요소의 가로축 배치 속성을 지정합니다.
   * @default 'flex-start'
   */
  justify?: CommonAlignmentValues | "space-between" | "space-around" | "space-evenly";
  /**
   * 요소의 새로축 배치 속성을 지정합니다.
   * @default 'stretch'
   */
  align?: CommonAlignmentValues;

  /**
   * 요소 사이의 간격을 지정합니다.
   * @default 0
   */
  gap?: CssNumberValue;
  /**
   * 요소간 줄바꿈 속성을 지정합니다.
   * @default 'nowrap'
   */
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
} & HTMLAttributes<HTMLDivElement>;

const Flex = ({
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  wrap = "nowrap",
  gap = 0,
  children,
  ...attributes
}: PropsWithChildren<Props>) => {
  const defaultStyle: CSSProperties = {
    display: "flex",

    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,

    gap: gap,
    flexWrap: wrap,
  };

  return (
    <div style={defaultStyle} {...attributes}>
      {children}
    </div>
  );
};

export default Flex;
