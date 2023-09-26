import { css } from "@emotion/react";

interface bodyStylingProps {
  height: number | string;
}

interface itemStylingProps {
  image?: string;
  speed?: number;
}

interface zoomContainerStylingProps {
  zoomFactor: number;
  width?: number | string;
  height?: number | string;
}

export const bodyStyling = ({ height = "100vh" }: bodyStylingProps) =>
  css({
    height: typeof height === "number" ? `${height}px` : height,
    margin: 0,
  });

export const itemStyling = ({ image }: itemStylingProps) =>
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
