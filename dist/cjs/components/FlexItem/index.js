"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./index.css");
const FlexItem = ({ align = 'auto', children }) => {
    const applyStyle = {
        alignSelf: align,
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: 'ys-layout-components-flex-item', style: applyStyle, children: children }));
};
exports.default = FlexItem;
