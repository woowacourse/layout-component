import styled from "styled-components";

export interface ContainerProps {
  display?: "block" | "inline-block" | "flex" | "inline-flex";
  padding?: string;
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  backgroundColor?: string;
  overflow?: "hidden" | "scroll" | "auto" | "visible";
  marginLeft?: number;
  marginRight?: number;
}

const Container = styled.div<ContainerProps>`
  display: ${({ display }) => display || "block"};
  margin-left: auto;
  margin-right: auto;
  padding: ${({ padding }) => padding};
  width: ${({ width }) =>
    typeof width === "number" ? `${width}px` : width || "auto"};
  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height || "auto"};
  max-width: ${({ maxWidth }) =>
    typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth || "none"};
  min-width: ${({ minWidth }) =>
    typeof minWidth === "number" ? `${minWidth}px` : minWidth || "0"};
  min-height: ${({ minHeight }) =>
    typeof minHeight === "number" ? `${minHeight}px` : minHeight || "0"};
  max-height: ${({ maxHeight }) =>
    typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight || "none"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "transparent"};
  overflow: ${({ overflow }) => overflow};
`;

export default Container;
