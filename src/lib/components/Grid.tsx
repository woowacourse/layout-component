import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  rows: number;
  columns?: number;
  gap?: number;
  rowGap?: number;
  colGap?: number;
  justifyItems?: 'flex-start' | 'flex-end' | 'center';
  children: ReactNode;
};

const Grid = ({
  rows,
  columns,
  gap,
  rowGap,
  colGap,
  justifyItems = 'flex-start',
  children,
}: Props) => {
  return (
    <Layout
      rows={rows}
      columns={columns}
      gap={gap}
      rowGap={rowGap}
      colGap={colGap}
      justifyItems={justifyItems}
    >
      {children}
    </Layout>
  );
};

export default Grid;

type LayoutProps = Omit<Props, 'children'>;

const Layout = styled.div<LayoutProps>`
  display: grid;
  grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
  grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};

  justify-items: ${props => `${props.justifyItems}`};

  row-gap: ${props => `${props.rowGap ? `${props.rowGap}px` : 'none'}`};
  column-gap: ${props => `${props.colGap ? `${props.colGap}px` : 'none'}`};
  gap: ${props => `${props.gap ? `${props.gap}px` : 'none'}`};
`;
