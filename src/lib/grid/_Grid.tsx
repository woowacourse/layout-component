import styled from 'styled-components';

interface GridProps {
  rows: number;
  columns: number;
  gap: number;
}

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: ${(props) => props.gap}px;
`;

export default Grid;
