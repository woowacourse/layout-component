import styled from 'styled-components';
import { GridLayoutProps, Props } from './type';

const Grid = ({ row, column, gap, css, children }: Props) => {
  return (
    <GridLayout $row={row} $column={column} $gap={gap} $css={css}>
      {children}
    </GridLayout>
  );
};

const GridLayout = styled.div<GridLayoutProps>`
  ${({ $css }) => $css}

  width: 100%;

  display: grid;
  grid-template-columns: repeat(${({ $column }) => $column}, 1fr);
  grid-template-rows: repeat(${({ $row }) => $row}, 1fr);
  gap: ${({ $gap }) => ($gap ? $gap : 0)}px;
`;

export default Grid;
