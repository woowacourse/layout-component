import { jsx as _jsx } from "react/jsx-runtime";
import './index.css';
var Grid = function (_a) {
    var children = _a.children, _b = _a.rows, rows = _b === void 0 ? 10 : _b, _c = _a.columns, columns = _c === void 0 ? 10 : _c, _d = _a.gap, gap = _d === void 0 ? 0 : _d;
    var applyStyle = {
        gridTemplateColumns: "repeat(".concat(columns, ", ").concat((100 / columns).toFixed(2), "%)"),
        gridTemplateRows: "repeat(".concat(rows, ", auto)"),
        gap: "".concat(gap, "px"),
    };
    return (_jsx("div", { className: 'ys-layout-components-grid', style: applyStyle, children: children }));
};
export default Grid;
//# sourceMappingURL=index.js.map