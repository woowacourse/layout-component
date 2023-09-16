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
import './index.css';
var Container = function (_a) {
    var minWidth = _a.minWidth, maxWidth = _a.maxWidth, _b = _a.customStyle, customStyle = _b === void 0 ? {} : _b, children = _a.children;
    var applyStyle = __assign(__assign({}, customStyle), { minWidth: "".concat(!minWidth ? maxWidth : minWidth, "px"), width: "".concat(maxWidth, "px") });
    return (_jsx("div", { className: 'ys-layout-components-container', children: _jsx("div", { className: 'ys-layout-components-content', style: applyStyle, children: children }) }));
};
export default Container;
//# sourceMappingURL=index.js.map