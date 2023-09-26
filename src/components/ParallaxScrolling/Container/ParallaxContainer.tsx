import { bodyStyling, itemStyling } from "../ParallaxScrolling.style";
import type { ComponentPropsWithoutRef } from "react";

export interface ParallaxContainerProps
  extends ComponentPropsWithoutRef<"div"> {
  bodyHeight?: number | string;
  imageUrl?: string;
}

const ParallaxContainer = ({
  bodyHeight = 100,
  children,
}: ParallaxContainerProps) => {
  return <div css={[bodyStyling({ height: bodyHeight })]}>{children}</div>;
};

export default ParallaxContainer;
