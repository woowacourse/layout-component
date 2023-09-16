var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
var ContainerComponent = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n"])));
var ContainerContentComponent = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-width: ", ";\n  width: ", ";\n  height: 100%;\n"], ["\n  min-width: ", ";\n  width: ", ";\n  height: 100%;\n"])), function (_a) {
    var maxWidth = _a.maxWidth, minWidth = _a.minWidth;
    var maxWidthParams = !maxWidth ? '100%' : "".concat(maxWidth, "px");
    return "".concat(!minWidth ? maxWidthParams : "".concat(minWidth, "px"));
}, function (_a) {
    var maxWidth = _a.maxWidth;
    return (!maxWidth ? '100%' : "".concat(maxWidth, "px"));
});
var Container = function (_a) {
    var minWidth = _a.minWidth, maxWidth = _a.maxWidth, children = _a.children;
    return (_jsx(ContainerComponent, { children: _jsx(ContainerContentComponent, { maxWidth: maxWidth, minWidth: minWidth, children: children }) }));
};
export default Container;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map