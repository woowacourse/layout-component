import { PropsWithChildren } from 'react';
import './index.css';

interface GridItemProps extends PropsWithChildren {}
const GridItem = ({ children }: GridItemProps) => {
  return <div className='ys-layout-components-grid-item'>{children}</div>;
};

export default GridItem;
