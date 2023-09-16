import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface GridItemProps extends PropsWithChildren {}

const GridItemComponent = styled.div``;

const GridItem = ({ children }: GridItemProps) => {
  return <GridItemComponent>{children}</GridItemComponent>;
};

export default GridItem;
