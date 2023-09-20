var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
var ContainerComponent = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n"])));
var ContainerContentComponent = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-width: ", ";\n  width: ", ";\n  background-color: ", ";\n  height: 100%;\n"], ["\n  min-width: ", ";\n  width: ", ";\n  background-color: ", ";\n  height: 100%;\n"])), function (_a) {
    var maxWidth = _a.maxWidth, minWidth = _a.minWidth;
    var maxWidthParams = !maxWidth ? '100%' : "".concat(maxWidth, "px");
    return "".concat(!minWidth ? maxWidthParams : "".concat(minWidth, "px"));
}, function (_a) {
    var maxWidth = _a.maxWidth;
    return (!maxWidth ? '100%' : "".concat(maxWidth, "px"));
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor;
});
var Container = function (_a) {
    var minWidth = _a.minWidth, maxWidth = _a.maxWidth, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? 'transparent' : _b, children = _a.children;
    return (_jsx(ContainerComponent, { children: _jsx(ContainerContentComponent, __assign({ maxWidth: maxWidth, minWidth: minWidth, backgroundColor: backgroundColor }, { children: children }), void 0) }, void 0));
};
export default Container;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map