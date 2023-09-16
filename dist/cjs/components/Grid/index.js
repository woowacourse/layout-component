"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./index.css");
const Grid = ({ children, rows = 10, columns = 10, gap = 0 }) => {
    const applyStyle = {
        gridTemplateColumns: `repeat(${columns}, ${(100 / columns).toFixed(2)}%)`,
        gridTemplateRows: `repeat(${rows}, auto)`,
        gap: `${gap}px`,
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: 'ys-layout-components-grid', style: applyStyle, children: children }));
};
exports.default = Grid;
