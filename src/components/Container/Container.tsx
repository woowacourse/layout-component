import { getCenterStyling } from "./Container.style";
import type { ComponentPropsWithoutRef, ElementType } from "react";

export interface CenterProps extends ComponentPropsWithoutRef<ElementType> {
  /**
   * Container 컴포넌트가 사용할 HTML 태그
   *
   * @default 'div'
   */
  tag?: ElementType;
  maxWidth?: number;
  minWidth?: number;
}

const Container = ({
  tag = "div",
  children,
  maxWidth,
  minWidth,
  ...attributes
}: CenterProps) => {
  const Tag = tag;

  return (
    <Tag css={getCenterStyling(minWidth, maxWidth)} {...attributes}>
      {children}
    </Tag>
  );
};

export default Container;
