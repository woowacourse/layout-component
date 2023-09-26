import {
  zoomContainerStyling,
  zoomImageStyling,
} from "../ParallaxScrolling.style";
import {
  ComponentPropsWithRef,
  ForwardedRef,
  useLayoutEffect,
  useState,
} from "react";

export interface ParallaxZoomProps extends ComponentPropsWithRef<"div"> {
  imageURL: string;
  speed?: number;
  width?: number | string;
  height?: number | string;
}

const ParallaxZoom = (
  { imageURL, speed = 1, width, height, children }: ParallaxZoomProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const zoomFactor = 1 + scrollPosition * (speed / 100); // 조절 가능한 줌 인/아웃 정도

  return (
    <div
      style={{
        height: `${typeof height === "number" ? height + "px" : height}`,
        overflow: "hidden",
      }}
      css={zoomContainerStyling({ zoomFactor, width, height })}
      ref={ref}
    >
      <img src={imageURL} alt="parllax zoom image" css={zoomImageStyling} />
      {children}
    </div>
  );
};

export default ParallaxZoom;
