"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./index.css");
const Container = ({ minWidth, maxWidth, customStyle = {}, children, }) => {
    const applyStyle = Object.assign(Object.assign({}, customStyle), { minWidth: `${!minWidth ? maxWidth : minWidth}px`, width: `${maxWidth}px` });
    return ((0, jsx_runtime_1.jsx)("div", { className: 'ys-layout-components-container', children: (0, jsx_runtime_1.jsx)("div", { className: 'ys-layout-components-content', style: applyStyle, children: children }) }));
};
exports.default = Container;
