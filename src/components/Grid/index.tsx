import { CSSProperties, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface CSSGridProps extends PropsWithChildren {
  column: number;
  row: number;
  gap: number;
  padding?: number;
}

const Grid = ({ column, row, gap, padding, children }: CSSGridProps) => {
  return (
    <GridLayout column={column} row={row} gap={gap} padding={padding}>
      {children}
    </GridLayout>
  );
};

export default Grid;

const GridLayout = styled.div<CSSGridProps>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.column}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.row}, 1fr)`};
  gap: ${(props) => props.gap}px;

  ${(props) => props.padding && `padding: ${props.padding}px`}
`;
