"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./index.css");
const Flex = ({ direction = 'row', justify = 'start', align = 'start', gap = 0, wrap = false, children, }) => {
    const applyStyle = {
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap: `${gap}px`,
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: 'ys-layout-components-flex', style: applyStyle, children: children }));
};
exports.default = Flex;
