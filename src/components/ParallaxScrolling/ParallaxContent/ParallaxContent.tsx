import {
  contentItemBackground,
  contentItemStyling,
  contentStyling,
} from "../ParallaxScrolling.style";
import type { ComponentPropsWithRef, ElementType, ForwardedRef } from "react";

export interface ParallaxContentProps extends ComponentPropsWithRef<"div"> {
  height?: number | string;
}

export interface ParallaxContentItemProps
  extends ComponentPropsWithRef<ElementType> {
  imageUrl?: string;
  speed?: 0 | 1;
}

const ParallaxContent = (
  { height = "100vh", children }: ParallaxContentProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return <div css={contentStyling({ height })}>{children}</div>;
};

ParallaxContent.Item = ({
  imageUrl = "",
  speed = 0,
  children,
}: ParallaxContentItemProps) => {
  return (
    <section
      css={[contentItemStyling({ speed }), contentItemBackground({ imageUrl })]}
    >
      <div>{children}</div>
    </section>
  );
};

export default ParallaxContent;
