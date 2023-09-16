import { PropsWithChildren } from 'react';
import './index.css';
interface GridProps extends PropsWithChildren {
    rows?: number;
    columns?: number;
    gap?: number;
}
declare const Grid: ({ children, rows, columns, gap }: GridProps) => import("react/jsx-runtime").JSX.Element;
export default Grid;
