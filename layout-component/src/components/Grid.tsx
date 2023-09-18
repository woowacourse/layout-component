import styled from "styled-components";
import Container, { ContainerProps } from "./Container";

interface GridProps extends ContainerProps {
  rows: number;
  columns: number;
  gap: number;
}

const Grid = styled(Container)<GridProps>`
  display: grid;

  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}px` : "0")};
  margin-right: ${({ marginRight }) =>
    marginRight ? `${marginRight}px` : "0"};

  grid-template-rows: ${({ rows }) => `repeat(${rows}, auto)`};
  grid-template-columns: ${({ columns }) => `repeat(${columns}, auto)`};

  gap: ${({ gap }) => `${gap}px`};
`;

export default Grid;
