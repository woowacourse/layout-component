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
var GridItemComponent = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  grid-column: ", ";\n  grid-row: ", ";\n"], ["\n  grid-column: ", ";\n  grid-row: ", ";\n"])), function (_a) {
    var gridCol = _a.gridCol;
    return (!gridCol ? 'auto' : gridCol);
}, function (_a) {
    var gridRow = _a.gridRow;
    return (!gridRow ? 'auto' : gridRow);
});
var GridItem = function (_a) {
    var _b = _a.gridRow, gridRow = _b === void 0 ? 'auto' : _b, _c = _a.gridCol, gridCol = _c === void 0 ? 'auto' : _c, children = _a.children;
    return (_jsx(GridItemComponent, __assign({ gridRow: gridRow, gridCol: gridCol }, { children: children }), void 0));
};
export default GridItem;
var templateObject_1;
//# sourceMappingURL=index.js.map