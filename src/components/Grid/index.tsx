import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface GridProps extends PropsWithChildren {
  rows: number;
  columns: number;
  gap: number;
}

const GridComponent = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    `repeat(${columns}, ${(100 / columns).toFixed(2)}%)`};
  gap: ${({ gap }) => `${gap}px`};
  grid-template-rows: ${({ rows }) => `repeat(${rows}, auto)`};
`;

const Grid = ({
  children,
  rows = 10,
  columns = 10,
  gap = 0,
}: Partial<GridProps>) => {
  return (
    <GridComponent rows={rows} columns={columns} gap={gap}>
      {children}
    </GridComponent>
  );
};

export default Grid;
