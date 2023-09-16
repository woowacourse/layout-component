"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./index.css");
var FlexItem = function (_a) {
    var _b = _a.align, align = _b === void 0 ? 'auto' : _b, children = _a.children;
    var applyStyle = {
        alignSelf: align,
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: 'ys-layout-components-flex-item', style: applyStyle, children: children }));
};
exports.default = FlexItem;
//# sourceMappingURL=index.js.map