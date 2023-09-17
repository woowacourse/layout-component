import styled from "styled-components";

export interface ContainerProps extends React.CSSProperties {}

const Container = styled.div<ContainerProps>`
  display: ${({ display }) => display || "block"};
  margin-left: auto;
  margin-right: auto;
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "none")};
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}px` : "0")};
  min-height: ${({ minHeight }) => minHeight || "0"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "transparent"};
  overflow: ${({ overflow }) => overflow};
`;

export default Container;
