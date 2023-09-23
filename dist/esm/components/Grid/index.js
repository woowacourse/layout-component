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
var GridComponent = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: ", ";\n  gap: ", ";\n  grid-template-rows: ", ";\n"], ["\n  display: grid;\n  grid-template-columns: ", ";\n  gap: ", ";\n  grid-template-rows: ", ";\n"])), function (_a) {
    var columns = _a.columns;
    return "repeat(".concat(columns, ", ").concat((100 / columns).toFixed(2), "%)");
}, function (_a) {
    var gap = _a.gap;
    return "".concat(gap, "px");
}, function (_a) {
    var rows = _a.rows;
    return "repeat(".concat(rows, ", auto)");
});
var Grid = function (_a) {
    var children = _a.children, _b = _a.rows, rows = _b === void 0 ? 10 : _b, _c = _a.columns, columns = _c === void 0 ? 10 : _c, _d = _a.gap, gap = _d === void 0 ? 0 : _d;
    return (_jsx(GridComponent, __assign({ rows: rows, columns: columns, gap: gap }, { children: children }), void 0));
};
export default Grid;
var templateObject_1;
//# sourceMappingURL=index.js.map