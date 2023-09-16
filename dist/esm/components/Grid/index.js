import { jsx as _jsx } from "react/jsx-runtime";
import './index.css';
const Grid = ({ children, rows = 10, columns = 10, gap = 0 }) => {
    const applyStyle = {
        gridTemplateColumns: `repeat(${columns}, ${(100 / columns).toFixed(2)}%)`,
        gridTemplateRows: `repeat(${rows}, auto)`,
        gap: `${gap}px`,
    };
    return (_jsx("div", { className: 'ys-layout-components-grid', style: applyStyle, children: children }));
};
export default Grid;
