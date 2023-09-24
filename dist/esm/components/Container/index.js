var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
var ContainerComponent = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n"])));
var ContainerContentComponent = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-width: ", ";\n  width: ", ";\n  background-color: ", ";\n  height: 100%;\n"], ["\n  min-width: ", ";\n  width: ", ";\n  background-color: ", ";\n  height: 100%;\n"])), function (_a) {
    var maxwidth = _a.maxwidth, minwidth = _a.minwidth;
    var maxWidthParams = !maxwidth ? '100%' : "".concat(maxwidth, "px");
    return "".concat(!minwidth ? maxWidthParams : "".concat(minwidth, "px"));
}, function (_a) {
    var maxwidth = _a.maxwidth;
    return (!maxwidth ? '100%' : "".concat(maxwidth, "px"));
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor;
});
var Container = function (_a) {
    var minwidth = _a.minwidth, maxwidth = _a.maxwidth, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? 'transparent' : _b, children = _a.children;
    return (_jsx(ContainerComponent, { children: _jsx(ContainerContentComponent, { maxwidth: maxwidth, minwidth: minwidth, backgroundColor: backgroundColor, children: children }) }));
};
export default Container;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map