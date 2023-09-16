import { PropsWithChildren } from 'react';
interface GridProps extends PropsWithChildren {
    rows: number;
    columns: number;
    gap: number;
}
declare const Grid: ({ children, rows, columns, gap, }: Partial<GridProps>) => import("react/jsx-runtime").JSX.Element;
export default Grid;
