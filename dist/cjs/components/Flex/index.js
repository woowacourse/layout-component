"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./index.css");
var Flex = function (_a) {
    var _b = _a.direction, direction = _b === void 0 ? 'row' : _b, _c = _a.justify, justify = _c === void 0 ? 'start' : _c, _d = _a.align, align = _d === void 0 ? 'start' : _d, _e = _a.gap, gap = _e === void 0 ? 0 : _e, children = _a.children;
    var applyStyle = {
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap: "".concat(gap, "px"),
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: 'ys-layout-components-flex', style: applyStyle, children: children }));
};
exports.default = Flex;
//# sourceMappingURL=index.js.map