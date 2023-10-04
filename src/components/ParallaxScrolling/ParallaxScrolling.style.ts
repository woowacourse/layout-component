import { css } from "@emotion/react";

interface bodyStylingProps {
  height: number | string;
}

interface itemStylingProps {
  image: string;
}

interface zoomContainerStylingProps {
  zoomFactor: number;
  width?: number | string;
  height?: number | string;
}

interface ContentStylingProps {
  height?: number | string;
}

interface ContentItemStylingProps {
  speed?: 0 | 1;
}

interface ContentItemBackgroundStylingProps {
  imageUrl: string;
}

export const bodyStyling = ({ height = "100vh" }: bodyStylingProps) =>
  css({
    height: typeof height === "number" ? `${height}px` : height,
    margin: 0,
  });

export const itemStyling = ({ image = "" }: itemStylingProps) =>
  css({
    height: "100vh",
    padding: "100px",
    backgroundImage: image && `url(${image})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    perspective: "50px",
    perspectiveOrigin: "0%",
  });

export const zoomContainerStyling = ({
  zoomFactor = 0,
  width = "100%",
  height = "100%",
}: zoomContainerStylingProps) =>
  css({
    height: typeof height === "number" ? `${height}px` : height,
    width: typeof width === "number" ? `${width}px` : width,
    transform: `scale(${zoomFactor}) translateX(0)`,
  });

export const zoomImageStyling = css({
  backgroundSize: "cover",
});

export const contentStyling = ({ height = "100vh" }: ContentStylingProps) => {
  return css({
    height,
    overflowX: "hidden",
    overflowY: "auto",
    perspective: "2px",

    "&>section": {
      transformStyle: "preserve-3d",
      position: "relative",
      height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });
};

export const contentItemStyling = ({ speed }: ContentItemStylingProps) =>
  css({
    "&>*": {
      width: "60%",
      fontSize: "2rem",
    },
    "&::after": {
      content: '" "',
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      transform:
        speed === 0
          ? `translateZ(-1px) scale(1.5)`
          : `translateZ(-1.25px) scale(1.75)`,
      backgroundSize: "100%",
      zIndex: -1,
    },
  });

export const contentItemBackground = ({
  imageUrl,
}: ContentItemBackgroundStylingProps) =>
  css({
    "&::after": {
      background: `url(${imageUrl})`,
      backgroundSize: "cover",
    },
  });
