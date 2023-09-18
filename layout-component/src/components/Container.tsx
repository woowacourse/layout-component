import styled from "styled-components";

export interface ContainerProps {
  display?: "block" | "inline-block" | "flex" | "inline-flex";
  padding?: string;
  width?: number;
  height?: number;
  maxWidth?: number;
  minWidth?: number;
  minHeight?: string;
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
  width: ${({ width }) => (width ? `${width}px` : "auto")};
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "none")};
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}px` : "0")};
  min-height: ${({ minHeight }) => minHeight || "0"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "transparent"};
  overflow: ${({ overflow }) => overflow};
`;

export default Container;
