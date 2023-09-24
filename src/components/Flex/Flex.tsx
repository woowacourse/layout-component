import { getFlexStyling } from "@components/Flex/Flex.style";
import type {
  AlignType,
  DirectionType,
  GapType,
  JustifyType,
} from "@components/Flex/Flex.style";
import type { ComponentPropsWithoutRef, ElementType } from "react";

export interface CenterProps extends ComponentPropsWithoutRef<ElementType> {
  /**
   * Flex 컴포넌트가 사용할 HTML 태그
   *
   * @default 'div'
   */
  tag?: ElementType;
  direction?: DirectionType;
  justify?: JustifyType;
  align?: AlignType;
  gap?: GapType;
}

const Container = ({
  tag = "div",
  children,
  direction,
  justify,
  align,
  gap,
  ...attributes
}: CenterProps) => {
  const Tag = tag;

  return (
    <Tag css={getFlexStyling(direction, justify, align, gap)} {...attributes}>
      {children}
    </Tag>
  );
};

export default Container;
