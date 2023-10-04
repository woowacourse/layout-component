import { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
import { CssNumberValue } from "../types";

type Props = {
  /**
   * 격자의 행 수를 지정합니다.
   */
  rows: number;
  /**
   * 격자의 열 수를 지정합니다.
   */
  columns: number;

  /**
   * 행 사이 간격을 지정합니다.
   * @default 0
   */
  rowGap?: CssNumberValue;
  /**
   * 열 사이 간격을 지정합니다.
   * @default 0
   */
  columnGap?: CssNumberValue;
  /**
   * 행과 열 사이 간격을 지정합니다.
   * @default 0
   */
  gap?: CssNumberValue;
} & HTMLAttributes<HTMLDivElement>;

/**
 * 컨텐츠들을 격자 형태로 배치하는 레이아웃 컴포넌트
 */
const Grid = ({
  rows,
  columns,
  rowGap = 0,
  columnGap = 0,
  gap = 0,
  children,
  ...attributes
}: PropsWithChildren<Props>) => {
  const defaultStyle: CSSProperties = {
    display: "grid",
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,

    rowGap: rowGap,
    columnGap: columnGap,
    gap: gap,
  };

  return (
    <div style={defaultStyle} {...attributes}>
      {children}
    </div>
  );
};

export default Grid;
