var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
var FlexItemComponent = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-self: ", ";\n"], ["\n  align-self: ", ";\n"])), function (_a) {
    var align = _a.align;
    return align;
});
var FlexItem = function (_a) {
    var _b = _a.align, align = _b === void 0 ? 'auto' : _b, children = _a.children;
    return _jsx(FlexItemComponent, { align: align, children: children });
};
export default FlexItem;
var templateObject_1;
//# sourceMappingURL=index.js.map