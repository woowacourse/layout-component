import { jsx as _jsx } from "react/jsx-runtime";
import './index.css';
var FlexItem = function (_a) {
    var _b = _a.align, align = _b === void 0 ? 'auto' : _b, children = _a.children;
    var applyStyle = {
        alignSelf: align,
    };
    return (_jsx("div", { className: 'ys-layout-components-flex-item', style: applyStyle, children: children }));
};
export default FlexItem;
//# sourceMappingURL=index.js.map