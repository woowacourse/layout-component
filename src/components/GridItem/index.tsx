import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type GridBoundary = `${number}/${number}`;
interface GridItemProps extends PropsWithChildren {
  gridCol: GridBoundary | 'auto';
  gridRow: GridBoundary | 'auto';
}

const GridItemComponent = styled.div<GridItemProps>`
  grid-column: ${({ gridCol }) => (!gridCol ? 'auto' : gridCol)};
  grid-row: ${({ gridRow }) => (!gridRow ? 'auto' : gridRow)};
`;

const GridItem = ({
  gridRow = 'auto',
  gridCol = 'auto',
  children,
}: Partial<GridItemProps>) => {
  return (
    <GridItemComponent gridRow={gridRow} gridCol={gridCol}>
      {children}
    </GridItemComponent>
  );
};

export default GridItem;
