import styled from "styled-components";
import { Container, ContainerProps } from "./Container";

interface FlexProps extends ContainerProps {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  gap?: number;
}

export const Flex = styled(Container)<FlexProps>`
  display: flex;
  margin-left: ${({ marginLeft }) => marginLeft || "0"};
  margin-right: ${({ marginRight }) => marginRight || "0"};
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "stretch"};

  gap: ${({ gap }) => (gap ? `${gap}px` : null)};
`;
