import { PropsWithChildren } from 'react';
declare type GridBoundary = `${number}/${number}`;
interface GridItemProps extends PropsWithChildren {
    gridCol: GridBoundary | 'auto';
    gridRow: GridBoundary | 'auto';
}
declare const GridItem: ({ gridRow, gridCol, children, }: Partial<GridItemProps>) => import("react/jsx-runtime").JSX.Element;
export default GridItem;
