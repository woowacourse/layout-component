import { itemStyling } from "../ParallaxScrolling.style";
import type { ComponentPropsWithoutRef } from "react";

interface ParallaxItemProps extends ComponentPropsWithoutRef<"div"> {
  imageUrl?: string;
}

const ParallaxItem = ({ imageUrl = "", children }: ParallaxItemProps) => {
  return <div css={itemStyling({ image: imageUrl })}>{children}</div>;
};

export default ParallaxItem;
