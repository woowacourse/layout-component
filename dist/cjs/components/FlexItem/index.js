"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var FlexItemComponent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-self: ", ";\n"], ["\n  align-self: ", ";\n"])), function (_a) {
    var align = _a.align;
    return align;
});
var FlexItem = function (_a) {
    var _b = _a.align, align = _b === void 0 ? 'auto' : _b, children = _a.children;
    return (0, jsx_runtime_1.jsx)(FlexItemComponent, { align: align, children: children });
};
exports.default = FlexItem;
var templateObject_1;
//# sourceMappingURL=index.js.map