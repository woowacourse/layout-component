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
var ContainerComponent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n"])));
var ContainerContentComponent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-width: ", ";\n  width: ", ";\n  height: 100%;\n"], ["\n  min-width: ", ";\n  width: ", ";\n  height: 100%;\n"])), function (_a) {
    var maxWidth = _a.maxWidth, minWidth = _a.minWidth;
    var maxWidthParams = !maxWidth ? '100%' : "".concat(maxWidth, "px");
    return "".concat(!minWidth ? maxWidthParams : "".concat(minWidth, "px"));
}, function (_a) {
    var maxWidth = _a.maxWidth;
    return (!maxWidth ? '100%' : "".concat(maxWidth, "px"));
});
var Container = function (_a) {
    var minWidth = _a.minWidth, maxWidth = _a.maxWidth, children = _a.children;
    return ((0, jsx_runtime_1.jsx)(ContainerComponent, { children: (0, jsx_runtime_1.jsx)(ContainerContentComponent, { maxWidth: maxWidth, minWidth: minWidth, children: children }) }));
};
exports.default = Container;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map